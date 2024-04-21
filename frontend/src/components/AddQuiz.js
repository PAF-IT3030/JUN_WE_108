import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";



function AddEmployee() {


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


    function addQuestion() {
        let answer = [answer1, answer2, answer3, answer4];
        setAllAnswer(answer);
    }



    function sendData(e) {
        e.preventDefault();

        const newQuiz = {

            quizTopic,
            type,
            description,
            questions,
            allAnswer,
            duration,


        }
        console.log(newQuiz);

        axios.post("http://localhost:8070/quiz/quiz-add", newQuiz).then(() => {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Add Successful',
                showConfirmButton: false,
                timer: 1500
            })
            navigate("/quiz");
        }).catch((err) => {
            alert(err)
        })

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
                <h1 style={{ textAlign: "left", paddingLeft: "90px" }}>Add New Quiz</h1>
            </div>

            <div className="container shadow-lg p-3 mb-5  rounded" style={{ background: "#04052e" }}>

                <form onSubmit={sendData}>

                    <div className="mb-3 text-white ">
                        <label for="fullname" className="form-label">Quiz Topic</label>
                        <input type="text" className="form-control ml-2 mr-5" id="Topic" placeholder="Enter quiz Workout Topic"
                            required onChange={(e) => {

                                setQuizTopic(e.target.value);
                            }} />

                    </div>

                    <div class="row g-3">
                        <div class="col mb-3 text-white">
                            <label for="Type" class="form-label">Type</label>
                            <select id="Type" class="form-select" required onChange={(e) => setType(e.target.value)}>
                                <option selected>Choose Type</option>
                                <option>Soldier</option>
                                <option>Lieutenant</option>
                                <option>Warlord</option>
                            </select>
                        </div>

                        <div className="mb-3 text-white ">
                        <label for="Duration" className="form-label">Duration</label>
                        <input type="number" className="form-control ml-2 mr-5" id="Topic" placeholder="Enter Duration"
                            required onChange={(e) => {

                                setDuration(e.target.value);
                            }} />

                    </div>


                        <div className="mb-3 text-white">
                            <label htmlFor="description" className="form-label">description</label>
                            <textarea className="form-control" id="description" placeholder="Enter  description"
                                required onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                            />
                        </div>
                    </div>

                    <div className="container shadow-lg p-3 mb-5 mt-3 rounded" style={{ background: "#041a2e" }}>
                       

                            <div className="mb-3 text-white ">
                                <label for="Questions" className="form-label">Questions</label>
                                <input type="text" className="form-control ml-2 mr-5" id="Questions" placeholder="type your question here"
                                    required onChange={(e) => {

                                        setQuestions(e.target.value);
                                    }} />


                                <div class="row g-3 mt-2">
                                    <div className="col mb-3 text-white">
                                        <label for="Answer" className="form-label">Answer 1</label>
                                        <input type="text" className="form-control" id="Answer" placeholder="answer 1"
                                            required onChange={(e) => {

                                                setAnswer1(e.target.value);

                                            }} />

                                    </div>
                                    <div className="col mb-3 text-white">
                                        <label for="text" className="form-label">Answer 2</label>
                                        <input type="text" className="form-control" id="text" placeholder="answer 2"
                                            required onChange={(e) => {

                                                setAnswer2(e.target.value);

                                            }} />

                                    </div>
                                </div>
                                <div class="row g-3 ">
                                    <div className="col mb-3 text-white">
                                        <label for="text" className="form-label">Answer 3</label>
                                        <input type="text" className="form-control" id="text" placeholder="answer 3"
                                            required onChange={(e) => {

                                                setAnswer3(e.target.value);

                                            }} />

                                    </div>
                                    <div className="col mb-3 text-white">
                                        <label for="text" className="form-label">Answer 4</label>
                                        <input type="text" className="form-control" id="text" placeholder="answer 4"
                                            required onChange={(e) => {

                                                setAnswer4(e.target.value);

                                            }} />

                                    </div>
                                </div>


                            </div>

                            <div className="mb-3 text-white">
                                <button type="button" className="btn btn-secondary btn-lg" onClick={addQuestion}>Add Questions</button>


                            </div>
                       

                    </div>





                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>


                </form>


            </div>
        </div>
    )
}
export default AddEmployee;