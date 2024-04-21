import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import Header from '../components/Header';




export default function UserQuiz() {

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
                                    <Link to="/emadd" className="nav-link active text-white" aria-current="page">Add New Quiz</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>



                <div className="col-lg-9 mt-2 mb-5 p-3 pt-4 text-white">
                    <h1 style={{ textAlign: "left", paddingLeft: "90px", textDecoration: "underline" }}>Get Your Certification</h1>
                </div>











                {quizs.map((quiz, index) => (
                    <div className="col-sm-15">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-sm-6">
                                    <div className="card shadow-sm p-3 mb-3 rounded-3 " style={{ background: "#041a2e" }}>
                                        <div className="col-lg-9 mt-2 mb-3 text-center">
                                            <h1 style={{ color: 'white', marginLeft: '15px', display: 'inline-block' }}>{quiz.quiz_name}</h1>
                                            <h3 style={{ color: 'white', marginLeft: '15px', display: 'inline-block' }}>({quiz.quiz_type})</h3>
                                        </div>


                                        <a className="btn btn-success" href={`quiz/${quiz._id}`}>
                                            &nbsp; Get Certification
                                        </a>


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

