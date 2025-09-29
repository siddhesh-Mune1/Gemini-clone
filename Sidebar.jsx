// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../App.css";

// const Sidebar = () => {
//   const [Extended, setExtended] = useState(true);
//   return (
//     <>
//       <div className="sidebar d-flex flex-column justify-content-between ">
//         <div className="top">
//           <div className="menu ">
//             <img src="/src/assets/menu.png" alt="" onClick={()=>setExtended(prev=>!prev)}/>
//           </div>
          
//           <div className="add ">
//             <img src="/src/assets/add.png" alt="" onClick={()=>setExtended(prev=>!prev)}/>
//             {Extended ? <p className="mt-3 pe-3">Add New</p> : null}
//           </div>
//           {Extended ? 
//           <div className="recent p-3 d-flex mt-5">
//             <img src="/src/assets/chat.png" className="mx-3" alt="" />
//             <p className="">Recent</p>
//           </div>
//           :null}
//           {Extended ? 
//           <div className="recent-chats ms-5 fs-2 me-5">
//             <p> What is React</p>
//           </div>
//           :null}
//         </div>

//         <div className="bottom ">
//           <div className="help p-2 d-flex">
//             <img src="/src/assets/help.png" alt="" onClick={()=>setExtended(prev=>!prev)}/>
//             {Extended ? <p>Help</p> :null}
//           </div>
//           <div className="history p-2 d-flex">
//             <img src="/src/assets/history.png" alt="" onClick={()=>setExtended(prev=>!prev)}/>
//             {Extended ?  <p>Activity</p> :null}
//           </div>
//           <div className="setting p-2 d-flex">
//             <img src="/src/assets/setting.png" alt="" onClick={()=>setExtended(prev=>!prev)}/>
//             {Extended ? <p>Settings</p> :null}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Sidebar = ({ extended, setExtended }) => {
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between"
      style={{ width: extended ? "250px" : "80px" }}
    >
      <div className="top p-2">
        <div className="menu">
          <img
            src="/src/assets/menu.png"
            alt=""
            style={{width: extended ? "40px" : "45px", height: extended ? "40px" : "45px"}}
            onClick={() => setExtended((prev) => !prev)}
          />
        </div>

        <div className="add">
          <img
            src="/src/assets/add.png"
            alt=""
            onClick={() => setExtended((prev) => !prev)}
          />
          {extended ? <p className="mt-3 pe-3">Add New</p> : null}
        </div>

        {extended && (
          <div className="recent p-3 d-flex mt-5">
            
            <p className="fs-1">Recent</p>
          </div>
        )}
        {extended && (
          <div className="recent-chats ms-5 fs-2 me-5 d-flex">
            <img src="/src/assets/chat.png" className="me-2"  alt="" />
            <p>What is React</p>
          </div>
          
        )}
      </div>

      <div className="bottom">
        <div className="help p-2 d-flex">
          <img
            src="/src/assets/help.png"
            alt=""
            onClick={() => setExtended((prev) => !prev)}
          />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="history p-2 d-flex">
          <img
            src="/src/assets/history.png"
            alt=""
            onClick={() => setExtended((prev) => !prev)}
          />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="setting p-2 d-flex">
          <img
            src="/src/assets/setting.png"
            alt=""
            onClick={() => setExtended((prev) => !prev)}
          />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
