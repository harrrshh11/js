import React from "react";

function Hello({isLoggedIn}){
    if(isLoggedIn){
        return <h1>Hello, Sai</h1>
    }else{
        return <h1>Please Login</h1>
    }
};
export default Hello;



import React from "react";
import "./App.css";

import Hello from "./Hello";

const App=()=>{
  const isLoggedIn = true;
  return(
      <div className="App">
        <Hello isLoggedIn={isLoggedIn}/>
      </div>
  );
};

export default App;
