import React from 'react'
import{
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom"

import UB_Web_Test from  './Pages/UB_Web_Test'


function App(){
  let url = window.location.protocol + "//" + window.location.host
  console.log(url);
  
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<UB_Web_Test />} />
          <Route exact path="/test" element={<UB_Web_Test />} />
        </Routes>
      </div>
    </Router>
  )

}



export default App