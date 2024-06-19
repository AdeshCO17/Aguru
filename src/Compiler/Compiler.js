import React, { Component } from "react";
import styled from "styled-components";
import "./Compiler.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default class Compiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: localStorage.getItem('input')||``,
      output: ``,
      language_id:localStorage.getItem('language_Id')|| 2,
      user_input: ``,
    };
  }
  input = (event) => { 
    event.preventDefault();
    this.setState({ input: event.target.value });
    localStorage.setItem('input', event.target.value) 
  };
  
  userInput = (event) => {
    event.preventDefault();
    this.setState({ user_input: event.target.value });
  };
  
  language = (event) => {  
    event.preventDefault();
    this.setState({ language_id: event.target.value });
    localStorage.setItem('language_Id',event.target.value)
   
  };
  
  submit = async (e) => {
    e.preventDefault();
    let outputText = document.getElementById("output");
    outputText.innerHTML = "";
    outputText.innerHTML += "Creating Submission ...\n";
    const response = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions",
      {
        method: "POST",
        headers: {
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          "x-rapidapi-key": "ff9f053bb3msh8a089e73e50a1dcp116999jsn9981256a87d3", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          source_code: this.state.input,
          stdin: this.state.user_input,
          language_id: this.state.language_id,
        }),
      }
    );
    
    outputText.innerHTML += "Submission Created ...\n";
    const jsonResponse = await response.json();
    let jsonGetSolution = {
      status: { description: "Queue" },
      stderr: null,
      compile_output: null,
    };
    while (
      jsonGetSolution.status.description !== "Accepted" &&
      jsonGetSolution.stderr == null &&
      jsonGetSolution.compile_output == null
    ) {
      outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`;
      if (jsonResponse.token) {
        let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;
        const getSolution = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": "ff9f053bb3msh8a089e73e50a1dcp116999jsn9981256a87d3", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
            "content-type": "application/json",
          },
        });
        jsonGetSolution = await getSolution.json();
      }
    }
    
    if (jsonGetSolution.stdout) {
      const output = atob(jsonGetSolution.stdout);
      outputText.innerHTML = "";
      outputText.innerHTML += `Results :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
    } else if (jsonGetSolution.stderr) {
      const error = atob(jsonGetSolution.stderr);
      outputText.innerHTML = "";
      outputText.innerHTML += `\n Error :${error}`;
    } else {
      const compilation_error = atob(jsonGetSolution.compile_output);
      outputText.innerHTML = "";
      outputText.innerHTML += `\n Error :${compilation_error}`;
    }
  };
  
  render() { 
    return (
      <>
      <Header/>
     
      <Container>
        <Form>
        <div className="row container-fluid">
          <div className="col-6 ml-4 ">
            <label htmlFor="solution ">
              <span className="badge badge-info heading mt-2 ">
                <i className="fas fa-code fa-fw fa-lg"></i>
              </span>
            </label>
          
           <HeaderEdi className="my-3 text-purple-600 font-extrabold font-sans text-xl"> <h1 > <a id="HeaderEditor" href="/home">Code Editor</a></h1></HeaderEdi>
            <textarea
              required
              name="solution"
              id="source"
              onChange={this.input}
              className="source"
              value={this.state.input}
            ></textarea>

            <button
            id="btnRun"
              type="submit"
              className="btn btn-danger ml-2 mr-2 "
              onClick={this.submit}
            >
              <i className="fas fa-cog fa-fw"></i> Run
            </button>

            <label htmlFor="tags" className="mr-1">
              <b className="heading"></b>
            </label>
            <select
              value={this.state.language_id}
              onChange={this.language}
              id="tags"
              className="form-control form-inline mb-2 language"
            >
              <option value="54">C++</option>
              <option value="50">C</option>
              <option value="62">Java</option>
              <option value="71">Python</option>
            </select>
          </div>
          <div className="col-5">
            <div>
              <span className="badge badge-info heading my-2 ">
                <i className="fas fa-exclamation fa-fw fa-md"></i> 
              </span>
        
              <textarea className=" mt-4" label="output" placeholder="Output" id="output"></textarea>
            </div>
          </div>
        </div>
        <div className="mt-2 ml-5">
          <span className="badge badge-primary heading my-2 ">
            <i className="fas fa-user fa-fw fa-md"></i>
            
          </span>
          <br />
        
          <textarea id="input" className=" mr-9 my-10" placeholder="User Input" onChange={this.userInput}></textarea>
        </div>
        </Form>
        </Container>
        <Footer/>
      </>
    );
  }
}
const Container=styled.div`
display:flex;
justify-content:center;
align-items:center;
background-image: linear-gradient(90deg, #0AE0FF, #9900FB);
height:100vh;
overflow: hidden;
`
const Form=styled.div`
background-color: rgba(255, 255, 255, 0.229);
position: relative;
width: 76%;
height: 600px;
border-radius: 4px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
margin-top: 15px;
padding-bottom: 40px;
@media screen and (max-width:6.43in){
width:96%;
height:90%;


}


`

const HeaderEdi=styled.div`

margin-right:40px;
`