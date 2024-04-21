import './App.css';
import Header from './components/Header';

//quiz components
import AddQuiz from './components/AddQuiz';
import AllQuiz from './components/AllQuiz';
import FullQuiz from './components/FullQuiz';
import UpdateQuiz from './components/UpdateQuiz';
import DeleteQuiz from './components/DeleteQuiz';
import UserViewQuiz from './components/UserViewQuiz';
import UserQuiz from './components/UserQuiz';

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

       <Route path="/quiz/quiz-add" element={<AddQuiz/>}/>
       <Route path="/quiz" element={<AllQuiz/>}/>
       <Route path="/quiz-get/:id" element={<FullQuiz/>}/>
       <Route path="/quiz/quiz-update/:id" element={<UpdateQuiz/>}/>
       <Route path="quiz/quiz-delete/:id" element={<DeleteQuiz/>}/>
       <Route path="quiz/user/quiz/:id" element={<UserViewQuiz/>}/>
       <Route path="quiz/user/quiz" element={<UserQuiz/>}/>

      {/*Doc */}
      <Route path="/doc/doc-add" element={<AddDoc/>}/>
      <Route path="/doc" element={<AllDoc/>}/>
      <Route path="/doc/doc-update/:id" element={<UpdateDoc/>}/>
      <Route path="doc/doc-delete/:id" element={<DeleteDoc/>}/>


       </Routes>
      </div>
      
   

  );
}

export default App;
