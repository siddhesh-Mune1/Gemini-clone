import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = ({ shareData }) => {
  const [extended, setExtended] = useState(true);
  return (
    <div className="sidebar p-2 d-flex flex-column justify-content-between">
      <div className="top ">
        <img
          src="./src/assets/menu.png"
          alt=""
          className="menu"
          onClick={() => setExtended((prev) => !prev)}
        />
        {/* <div className="add p-1 ms-1 mt-5">
                <img src="./src/assets/add.png" alt="" className='me-2 mb-1 ms-2'/>
               {extended ? <span>Add New</span> : null} 
            </div> */}
        {extended ? (
          <div className="recent ms-3 mt-3">
            <h5>Recent</h5>
            <div className="recent-chat mt-3">
              {/* <span>What is React</span> */}
              {shareData.map((message, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "8px",
                    padding: "5px",
                    borderBottom: "1px dotted #aaa",
                    listStyle: "none",
                    // maxBlockSize: "100px"
                  }}
                >
                
                  <img src="./src/assets/chat.png" alt="" className="me-2" />
                  <strong>Chat {shareData.length - index}:</strong> {message}
                </li>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      {/* <div className="bottom mb-5 ms-3">
            <div className="setting mb-3 ">
                <img src="./src/assets/setting.png" alt="" className='me-2'/>
                {extended ? <span>Setting</span>:null}
            </div>
            <div className="setting mb-3">
                <img src="./src/assets/history.png" alt="" className='me-2'/>
                {extended ? <span>History</span>:null}
            </div>
            <div className="setting">
                <img src="./src/assets/help.png" alt="" className='me-2'/>
                {extended ? <span>Help</span> :null}
            </div>

        </div>   */}
    </div>
  );
};

export default Home;
