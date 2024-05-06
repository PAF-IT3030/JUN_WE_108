import './App.css';
import Header from './components/Header';

import AddDoc from './components/AddDoc';
import AllDoc from './components/AllDoc';
import UpdateDoc from './components/UpdateDoc';
import DeleteDoc from './components/DeleteDoc';



import {BrowserRouter , Router,Route, Routes} from "react-router-dom"


function App() {

  //call the classes
  return (
  
      
      <div className="App">
      
      
       <Routes>

      <Route path="/doc/doc-add" element={<AddDoc/>}/>
      <Route path="/doc" element={<AllDoc/>}/>
      <Route path="/doc/doc-update/:id" element={<UpdateDoc/>}/>
      <Route path="doc/doc-delete/:id" element={<DeleteDoc/>}/>


       </Routes>
      </div>
      
   

  );
}

export default App;
