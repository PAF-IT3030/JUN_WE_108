import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';

export default function UpdateQuiz() {
    const [doc, setDoc] = useState({});
    const [loading, setLoading] = useState(true);

    const [title, setHeading] = useState("");
    const [description, setDescription] = useState("");
    const [exercises, setCodeCopy] = useState("");

    const navigate = useNavigate();
    const params = useParams();
    const userId = params.id;



    useEffect(() => {
        async function Getid() {
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:8070/api/workoutplan/${userId}`)
                setDoc(res.data.doc);
                console.log(res.data);

                setHeading(res.data.title);
                setDescription(res.data.description);
                setCodeCopy(res.data.exercises);
         
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
        const updatedDoc = {
            title,
            description,
            exercises,
        }
        axios.put(`http://localhost:8070/api/workoutplan/${userId}`, updatedDoc)
            .then(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'document Updated',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate("/doc");
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
                                <Link to="/doc" className="nav-link active text-white" aria-current="page">Dashboard</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/doc/doc-add" className="nav-link active text-white" aria-current="page">Add New WorkOut</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="col-lg-9-mt-2 mb-2 p-3 pt-4 text-white">
                <h1 style={{ textAlign: "left", paddingLeft: "90px" }}>Update WorkOut</h1>
            </div>

            <div className="container shadow-lg p-3 mb-5  rounded" style={{ background: "#04052e" }}>

                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <form onSubmit={handleSubmit}>
                       <div className="mb-3 text-white ">
                        <label for="fullname" className="form-label">Title</label>
                        <input type="text" className="form-control ml-2 mr-5" id="Topic" placeholder="Enter topic"
                         value={title}   required onChange={(e) => {

                                setHeading(e.target.value);
                            }} />

                    </div>



                        <div className="mb-3 text-white">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea className="form-control" id="description" placeholder="Enter  description"
                             value={description}   required onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                            />
                        </div>

                        <div className="mb-3 text-white">
                            <label htmlFor="description" className="form-label">Excercises</label>
                            <textarea className="form-control" id="description" placeholder="Enter  excercises"
                              value={exercises}  required onChange={(e) => {
                                    setCodeCopy(e.target.value);
                                }}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Update</button>

                    </form>
                )}
            </div>
        </div>
    );
}
