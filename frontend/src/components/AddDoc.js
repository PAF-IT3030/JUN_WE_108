import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';



function AddDoc() {

    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [exercises, setExercises] = useState("");



    const navigate = useNavigate();


    function sendData(e) {
        e.preventDefault();

        const newDoc = {

            id: uuidv4(),
            title,
            description,
            exercises,


        }
        console.log(newDoc);

        axios.post("http://localhost:8070/api/addworkoutplan", newDoc).then(() => {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Add Successful',
                showConfirmButton: false,
                timer: 1500
            })
            navigate("/doc");
        }).catch((err) => {
            alert(err)
        })

    }

    return (

        <div style={{
            background: "#010117",
            backgroundSize: 'cover',
            minHeight: '110vh',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',

        }}>
        

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
                <h1 style={{ textAlign: "left", paddingLeft: "90px" }}>Add New WorkOut</h1>
            </div>

            <div className="container shadow-lg p-3 mb-5  rounded" style={{ background: "#04052e" }}>

                <form onSubmit={sendData}>

                    <div className="mb-3 text-white ">
                        <label for="fullname" className="form-label">Topic</label>
                        <input type="text" className="form-control ml-2 mr-5" id="Topic" placeholder="Enter topic"
                            required onChange={(e) => {

                                setTitle(e.target.value);
                            }} />

                    </div>



                        <div className="mb-3 text-white">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea className="form-control" id="description" placeholder="Enter  description"
                                required onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                            />
                        </div>

                        <div className="mb-3 text-white">
                            <label htmlFor="description" className="form-label">Excercises</label>
                            <textarea className="form-control" id="description" placeholder="Enter  exercises"
                                required onChange={(e) => {
                                    setExercises(e.target.value);
                                }}
                            />
                        </div>

                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>


                </form>


            </div>
        </div>
    )
}
export default AddDoc;