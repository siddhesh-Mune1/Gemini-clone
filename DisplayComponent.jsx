import React from "react";
import "./Display.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";


// import {chat} from "assets/chat";
const DisplayComponent = ({onSend}) => {

  const API_KEY = "AIzaSyDDmfPSGW3Z5Qe7MEYKNOhXpMLyWvaJQf4";
  const genAI = new GoogleGenerativeAI(API_KEY);

  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
const [showCards, setShowCards] = useState(true);

  const textareaRef = useRef(null);



 async function generateResponse(prompt) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"  // change this to a supported model
    });
    const result = await model.generateContent(prompt);
    const resp = await result.response;
    const text = resp.text();
    setResponse(text);
    return text;
  } catch (error) {
    console.error("Error generating content:", error);
    return "Failed to generate a response. Please try again later.";
  }
}

const handleSubmit = async (event) => {
  event.preventDefault();
  onSend(text);
  setShowCards(false);   // hide cards
  setLoading(true);      // show spinner

  const resp = await generateResponse(text);
  setResponse(resp);

  setLoading(false);     // hide spinner
  // response area will now show automatically
  setText("");
};



  const handleChange = (event) => {
    setText(event.target.value);
    // console.log(text);
    
  };

//  const handleSubmit = async (event) => {
//     event.preventDefault(); 
    
//     await generateResponse(text);
//     console.log(response);
    
//     setText("");
//   };

  // The key to auto-resizing
  useEffect(() => {
    if (textareaRef.current) {
      // Temporarily set the height to 'auto' to correctly calculate the scrollHeight
      textareaRef.current.style.height = "auto";
      // Set the height based on the content
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]); // Recalculate whenever the text changes


  const formatResponse = (text) => {
    if (!text) return { __html: '' };

    // Step 1: Convert markdown bold **text** to HTML <strong>text</strong>
    let htmlText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Step 2: Split by double newline (\n\n) to create true paragraphs.
    // Wrap each resulting paragraph in a <p> tag with the appropriate margin.
    const paragraphs = htmlText.split(/\n\n+/).map(para => {
        // Step 3: Inside a paragraph, replace single newlines (\n) with <br /> 
        // to handle list items or forced line breaks.
        let pContent = para.replace(/\n/g, '<br />');
        return `<p class="mb-4 last:mb-0">${pContent}</p>`;
    }).join('');

    // React's built-in way to render raw HTML content securely.
    return { __html: paragraphs };
};

  return (
    <div className="main">
      <div className="nav d-flex justify-content-between px-2">
        <div className="GeminiName fs-1">Gemini AI</div>
        <div className="logo">
          <img
            src="./src/assets/setting.png"
            alt=""
            style={{ width: "40px" }}
          />
        </div>
      </div>

      <div className="main-content">
  

  {/* Show cards if no prompt yet */}
  {showCards && !loading && !response && (
    <><div className="heading text-center">
            <h1>Hello Dev</h1>
            <h1>Welcome To Gemini AI</h1>
          </div><div className="cards">
              <div className="row mt-5">
                <div className="col-3 card px-3 py-2 mx-3">
                  <h5>Hello I am Siddhesh FullStack devloper</h5>
                  <center>
                    <img src="./src/assets/chat.png" alt="" />
                  </center>
                </div>
                <div className="col-3 card px-3 py-2 mx-3">
                  <h5>Hello I am Siddhesh FullStack devloper</h5>
                  <center>
                    <img src="./src/assets/chat.png" alt="" />
                  </center>
                </div>
                <div className="col-3 card px-3 py-2 mx-3">
                  <h5>Hello I am Siddhesh FullStack devloper</h5>
                  <center>
                    <img src="./src/assets/chat.png" alt="" />
                  </center>
                </div>
              </div>
            </div></>
  )}

  {/* Show spinner while loading */}
  {loading && (
    <div className="text-center mt-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-2">Generating response…</p>
    </div>
  )}

  {/* Show response once ready */}
  {/* {!loading && response && (
    <div className="response text-center mt-5">
      <h3>Gemini says:</h3>
      <p>{response}</p>
    </div>
  )} */}
  <style>{`
                /* Ensure Inter font is used across the component */
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
                body {
                    font-family: 'Inter', sans-serif;
                }
                /* Custom styling for the strong tags rendered by formatResponse */
                .ai-content strong {
                    font-weight: 600;
                    color: #1a1a1a;
                }

                .ai-content {
                  
                }
            `}</style>

  {!loading && response && (
                <div className="response-wrapper mx-auto max-w-4xl w-full"> 
                    {/* The outer div maintains the card look and limits height/scroll */}
                    <div className="bg-white p-6 md:p-10 shadow-xl rounded-2xl border border-gray-100 transition-all duration-300 max-h-96 overflow-y-auto">
                        
                        {/* Gemini Says Header - Now NOT sticky. The inner content will scroll beneath it. */}
                        <h3 className="text-2xl md:text-3xl font-bold  text-indigo-700 mb-6 border-b  p-3">
                            Gemini says:
                        </h3>

                        {/* The Content Area - This is where the long response content is rendered. */}
                        <div 
                            className="ai-content text-base text-gray-700 leading-relaxed p-4"
                            dangerouslySetInnerHTML={formatResponse(response)}
                        >
                        </div>
                    </div>
                </div>
            )}
</div>


      {/* <div className="main-input d-flex justify-content-between">
        <div className="input d-flex w-75 ">
            <input type="text" placeholder="Enter Your Prompt Here" className="p-4"/>
            <div className="side-action-btn ms-5 mt-2 d-flex ">
            <img src="./src/assets/chat.png" alt="" className="mx-2"/>
            <img src="./src/assets/setting.png" alt="" className="mx-2"/>
            <img src="./src/assets/add.png" alt="" className="mx-2"/>
        </div>
        </div>
        
      </div> */}
<form action="" onSubmit={handleSubmit}>
      <div className="input">
        
        <div className="textarea-container">
          
          <textarea
            ref={textareaRef} // Attach the ref
            className="expanding-textarea"
            value={text}
            onChange={handleChange}
            rows={1}
            placeholder="Enter your prompt"
          />
          
            {/* <img src="./src/assets/send.png" alt="" role="button"/> */}
          <button type="submit" style={{ border: 'none', background: 'none', padding: 0 }}>
        <img
          src="./src/assets/send.png" // Replace with your image source
          alt="Submit"
        />
      </button>
        </div>  
        
      </div>
      </form>
    </div>
  );
};

export default DisplayComponent;


// First Build