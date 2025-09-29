// import React, { useState } from "react";
// // import Sidebar from "./components/Sidebar";
// // import Main from "./components/Main";
// import "./index.css";
// import Home from "./Home";
// import DisplayComponent from "./DisplayComponent";

// const App = () => {
//   const [extended, setExtended] = useState(true);

//   return (
//     <>
//       {/* <Sidebar extended={extended} setExtended={setExtended} /> */}
//       {/* <Main extended={extended} /> */}
//     <div className="layout">
//       <Home />
//       <DisplayComponent />

//     </div>
      
//     </>
//   );
// };

// export default App;

import React, { useState } from "react";
import Home from "./Home";
import DisplayComponent from "./DisplayComponent";
import "./index.css";

const App = () => {
  const [extended, setExtended] = useState(true);
  const [message, setMessage] = useState([]);


  const handleSubmit = (dataFromSidebar)=>{
        setMessage(prevMessages => [dataFromSidebar, ...prevMessages]);
  }
  

  return (
    <div className="layout">
      {/* sidebar */}
      <Home extended={extended} setExtended={setExtended} shareData={message} />

      {/* main area */}
      <DisplayComponent  onSend={handleSubmit}/>
    </div>
  );
};

export default App;

