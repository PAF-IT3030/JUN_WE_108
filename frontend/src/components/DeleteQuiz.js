import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';

export default function DeleteQuiz(){
    const [quizs, setQuiz] = useState({});
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const userId = params.id;
    const navigate = useNavigate();

    useEffect(() => {
        async function Getid(){
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:8070/quiz/quiz-get/${userId}`)

                setQuiz(res.data);
                console.log(res.data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                alert(err.message);
            }
        }
        Getid();
    }, [userId])

    function handleDelete(e) {
        e.preventDefault();
        axios.delete(`http://localhost:8070/quiz/quiz-delete/${userId}`)
            .then(() => {
             

               Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Delete Successful',
                showConfirmButton: false,
                timer: 1500
                
              })
              navigate("/quiz");
            })
            .catch((err) => {
                alert(err);
                });
                }

                return (
                    <div style={{ 
                        background: "#010117",
                        backgroundSize: 'cover',
                        minHeight: '100vh',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed',
                        
                    }}>
                        <Header/>
                        <div>
        <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "#072b52" }}>
  <div className="container-fluid">
    
  
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
    
        <li className="nav-item">
        <Link to="/" className="nav-link active text-white" aria-current="page">Dashboard</Link>
        </li>  

        <li className="nav-item">
          <Link to="/quiz/quiz-add" className="nav-link active text-white" aria-current="page">Add New Quiz</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className="col-lg-9-mt-2 mb-2 p-3 pt-4 text-white">
                <h1 style={{ textAlign: "left" ,paddingLeft:"90px" }}>Delete Quiz</h1>
            </div>
                    <div className="container">
                        
                        {loading ? (
                            <div>Loading...</div>


                        ) : (quizs && Object.keys(quizs).length !== 0 ? (
                            <div className="container shadow-lg p-3 mb-5  rounded text-white " style={{background:"#04052e"}}>
                            <form onSubmit={handleDelete}>
                
                                <div className="mb-3 text-white">
                                    <label for="name" className="form-label">Quiz Topic: {quizs.quiz.quiz_name}</label>
                                </div>
                
                                <div className="mb-3 text-white">
                                    <label for="department" className="form-label">Quiz Topic: {quizs.quiz.quiz_type}</label>
                                </div>
                
                                <button type="submit" className="btn btn-danger">Delete</button>
                
                            </form>
                            </div>
                            ) : (
            <div>Loading...</div>
        ))}
            </div>
            </div>
            </div>
)
}
