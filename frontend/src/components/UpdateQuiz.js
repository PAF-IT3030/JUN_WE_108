import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';

export default function UpdateQuiz() {
    const [quizs, setQuiz] = useState({});
    const [loading, setLoading] = useState(true);

    const [quizTopic, setQuizTopic] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [questions, setQuestions] = useState([]);
    const [duration, setDuration] = useState("");
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
    const [allAnswer, setAllAnswer] = useState([]);

    const navigate = useNavigate();
    const params = useParams();
    const userId = params.id;

    
    function addQuestion() {
        let answer = [answer1, answer2, answer3, answer4];
        setAllAnswer(answer);
    }

    useEffect(() => {
        async function Getid() {
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:8070/quiz/quiz-get/${userId}`)
                setQuiz(res.data.quiz);
                console.log(res.data);

                setQuizTopic(res.data.quiz.quiz_name);
                setType(res.data.quiz.quiz_type);
                setDescription(res.data.quiz.description);
                setQuestions(res.data.quiz.question);
                setDuration(res.data.quiz.duration);
                setAllAnswer(res.data.quiz.answers);
                setAnswer1(res.data.quiz.answers[0]);
                setAnswer2(res.data.quiz.answers[1]);
                setAnswer3(res.data.quiz.answers[2]);
                setAnswer4(res.data.quiz.answers[3]);

                setLoading(false);
            } catch (err) {
                setLoading(false);
                alert(err.message);
            }
        }
        Getid();
    }, [userId])

    function handleSubmit(e) {
        e.preventDefault();
        const updatedQuiz = {
            quizTopic,
            type,
            description,
            questions,
            allAnswer,
            duration,
        }
        axios.put(`http://localhost:8070/quiz/quiz-update/${userId}`, updatedQuiz)
            .then(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'quiz Updated',
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
            minHeight: '160vh',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',

        }}>
            <Header />
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
                <h1 style={{ textAlign: "left", paddingLeft: "90px" }}>Update Quiz</h1>
            </div>

            <div className="container shadow-lg p-3 mb-5  rounded" style={{ background: "#04052e" }}>

                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-white ">
                            <label for="fullname" className="form-label">Quiz Topic</label>
                            <input type="text" className="form-control ml-2 mr-5" id="Topic" placeholder="Enter Full Name"
                                value={quizTopic} required onChange={(e) => {

                                    setQuizTopic(e.target.value);
                                }} />

                        </div>

                        <div class="row g-3">
                            <div class="col mb-3 text-white">
                                <label for="Type" class="form-label">Type</label>
                                <select id="Type" class="form-select" value={type} required onChange={(e) => setType(e.target.value)}>
                                    <option selected>Choose Type</option>
                                    <option>Soldier</option>
                                    <option>Lieutenant</option>
                                    <option>Warlord</option>
                                </select>
                            </div>


                            <div className="mb-3 text-white ">
                                <label for="Duration" className="form-label">Duration</label>
                                <input type="number" className="form-control ml-2 mr-5" id="Topic" placeholder="Enter Duration"
                                    value={duration} required onChange={(e) => {

                                        setDuration(e.target.value);
                                    }} />

                            </div>
                        </div>


                        <div className="mb-3 text-white">
                            <label htmlFor="description" className="form-label">description</label>
                            <textarea className="form-control" id="description" placeholder="Enter  description"
                                value={description} required onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                            />
                        </div>



                        <div className="container shadow-lg p-3 mb-5 mt-3 rounded" style={{ background: "#041a2e" }}>
                       

                       <div className="mb-3 text-white ">
                           <label for="Questions" className="form-label">Questions</label>
                           <input type="text" className="form-control ml-2 mr-5" id="Questions" placeholder="type your question here"
                            value={questions}   required onChange={(e) => {

                                   setQuestions(e.target.value);
                               }} />


                           <div class="row g-3 mt-2">
                               <div className="col mb-3 text-white">
                                   <label for="Answer" className="form-label">Answer 1</label>
                                   <input type="text" className="form-control" id="Answer" placeholder="answer 1"
                                   value={answer1}   required onChange={(e) => {

                                           setAnswer1(e.target.value);

                                       }} />

                               </div>
                               <div className="col mb-3 text-white">
                                   <label for="name" className="form-label">Answer 2</label>
                                   <input type="text" className="form-control" id="name" placeholder="answer 2"
                                    value={answer2}   required onChange={(e) => {

                                           setAnswer2(e.target.value);

                                       }} />

                               </div>
                           </div>
                           <div class="row g-3 ">
                               <div className="col mb-3 text-white">
                                   <label for="name" className="form-label">Answer 3</label>
                                   <input type="text" className="form-control" id="name" placeholder="answer 3"
                                    value={answer3}   required onChange={(e) => {

                                           setAnswer3(e.target.value);

                                       }} />

                               </div>
                               <div className="col mb-3 text-white">
                                   <label for="name" className="form-label">Answer 4</label>
                                   <input type="text" className="form-control" id="name" placeholder="answer 4"
                                   value={answer4}    required onChange={(e) => {

                                           setAnswer4(e.target.value);

                                       }} />

                               </div>
                           </div>


                       </div>

                       <div className="mb-3 text-white">
                           <button type="button" className="btn btn-secondary btn-lg" onClick={addQuestion}>Add Questions</button>


                       </div>
                  

               </div>

                        <button type="submit" className="btn btn-primary">Update</button>

                    </form>
                )}
            </div>
        </div>
    );
}
