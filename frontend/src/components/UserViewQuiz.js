import React, { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import './FullDetails.css';
import Header from '../components/Header';

//qr
import QRCode from 'qrcode.react';

//report
import jsPDF from "jspdf";


export default function UserViewQuiz() {
    const [quiz, setQuiz] = useState({});
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const userId = params.id;

    useEffect(() => {

        async function Getid() {
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:8070/quiz/quiz-get/${userId}`)

                setQuiz(res.data);
                setLoading(false);
                console.log(res.data);
            } catch (err) {
                setLoading(false);
                alert(err.message);
            }
        }
        Getid();
    }, [userId])



    const quizData = quiz.quiz || {};
    const { quiz_name, quiz_type, description } = quizData;



    return (
        <div style={{
            background: "#010117",
            backgroundSize: 'cover',
            minHeight: '170vh',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',

        }}>
            <Header />
            <div>
                <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "#072b52" }}>
                    <div className="container-fluid">



                    </div>
                </nav>
                <div style={{ marginTop: '20px' }}>

                    {loading ? (
                        <div>Loading...</div>
                    ) : (quiz && quizData && Object.keys(quizData).length !== 0 ? (
                        <div>
                            <div className="col-lg-9 mt-8 mb-2 p-3 pt-4 text-white">
                                <h1 style={{ textAlign: "right", paddingRight: "80px" }}>{quiz_name}</h1>
                                <h2 style={{ textAlign: "right", paddingRight: "60px" }}>({quiz_type})</h2>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="container shadow-lg p-3 mb-5 rounded" style={{ background: "#04052e", maxWidth: "800px", marginLeft: "5rem" }}>

                                        <h1 style={{ color: 'white' }}>Description</h1>
                                        <p style={{ color: 'white' }}>{description}</p>


                                    </div>
                                </div>

                                <div className="col" style={{ marginRight: "9rem", marginTop: "20rem" }}>
                                    <a className="btn btn-success" href={`quiz/${quiz._id}`}>
                                        &nbsp; war Begin
                                    </a>
                                    <div className="mt-3">
                                        <a className="btn btn-light" href={`../quiz`}>
                                            &nbsp; Back
                                        </a>
                                    </div>


                                </div>

                            </div>
                        </div>

                    ) : (
                        <div>Loading...</div>
                    ))}
                </div>
            </div>
        </div>
    )

}