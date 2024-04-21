import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import Header from '../components/Header';




export default function AllQuiz() {

    const [quizs, setQuiz] = useState([]);


    useEffect(() => {

        function getQuiz() {
            axios.get("http://localhost:8070/quiz/quiz").then((res) => {
                // console.log(res.data);  
                setQuiz(res.data);
            }).catch((err) => {
                alert("err.message");
            })
        }
        getQuiz();


    }, [])




    return (

        <div style={{
            background: "#010117",
            backgroundSize: 'cover',
            minHeight: '100vh',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',

        }}>
            <Header />


            <div>
                <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "#072b52" }}>
                    <div className="container-fluid">


                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <Link to="/quiz" className="nav-link active text-white" aria-current="page">Dashboard</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/quiz/quiz-add" className="nav-link active text-white" aria-current="page">Add New Quiz</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>



                <div className="col-lg-9-mt-2 mb-2 p-3 pt-4 text-white">
                    <h1 style={{ textAlign: "left", paddingLeft: "90px" }}>Dashboard</h1>
                </div>
                <div style={{ textAlign: "right", paddingRight: "100px", paddingBottom: "20px" }}>
                    <button className="btn btn-success btn-lg float-right"><a href="/quiz/quiz-add" style={{ textDecoration: 'none', color: "white" }}>+ Add New Quiz</a></button>
                </div>









                {quizs.map((quiz, index) => (
                    <div className="col-sm-15">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-sm-5">
                                    <div className="card shadow-sm p-3 mb-3 rounded-3 " style={{ background: "#041a2e" , width:"40rem"}}>
                                        <div className="col-lg-9 mt-2 ms-6">
                                            <h1 style={{ textAlign: "center", color: 'white' }}>{quiz.quiz_name}</h1>
                                            <h3 style={{ textAlign: "center", color: 'white' }}>({quiz.quiz_type})</h3>

                                            <div className="row pb-2 pt-2">
                                                <div className="btn-group" role="group">
                                                   
                                                    <a className="btn btn-warning" href={`/quiz/quiz-update/${quiz._id}`}>
                                                        <i className="fas fa-edit"></i>&nbsp; Edit
                                                    </a>
                                                    &nbsp;
                                                    &nbsp;
                                                    <a className="btn btn-danger" href={`/quiz/quiz-delete/${quiz._id}`}>
                                                        <i className="fas fa-trash-alt"></i>&nbsp; Delete
                                                    </a>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                ))}





                <div style={{ textAlign: "center", padding: "10px" }}>



                    <br />


                </div>

            </div>
        </div>
    )
}

