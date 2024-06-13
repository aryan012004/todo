
import "bootstrap/dist/css/bootstrap.min.css"
// import Person from "./Components/Person";
import Irctc from "./Components/Irtctc";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import To from "./Components/To";
import Viewtodos from "./Components/Viewtodos";
import De from "./Components/De";
import Userform from "./Components/Userform";



function App()
 {
     return (
    <div className="App">
         
<BrowserRouter>

        <Routes>
            <Route path="/" element={<To/>}/>
            <Route path="/viewtodo" element={<Viewtodos/>}/>
        </Routes>
        
</BrowserRouter>
      
    </div>
  );
}

export default App;
