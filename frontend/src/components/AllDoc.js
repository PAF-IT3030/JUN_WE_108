import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import Header from '../components/Header';
import backgroundImage from '../images/1234.jpg';




export default function AllDoc() {

    const [doc, setDoc] = useState([]);


    useEffect(() => {

        function getDoc() {
            axios.get("http://localhost:8070/api/workoutplan").then((res) => {
                 console.log(res.data);  
                setDoc(res.data);
            }).catch((err) => {
                alert("err.message");
            })
        }
        getDoc();


    }, [])




    return (

        <div style={{
            backgroundImage: `url(${backgroundImage})`, // Use imported image variable
            backgroundSize: 'cover', // Changed to 'cover' to fill the entire screen
            minHeight: '102vh', // Changed to vh to ensure full viewport height
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
        }}>
            <Header />


            <div>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgba(7, 43, 82, 0.5)", backdropFilter: "blur(2px)" }}>
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



          




                <div className="container shadow-lg p-3 mb-5  rounded" style={{ backgroundColor: "rgba(7, 43, 82, 0.5)", backdropFilter: "blur(2px)"  }}>

                <div className="container">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" style={{ color: 'white' }}>Title</th>
                                <th scope="col" style={{ color: 'white' }}>Description</th>
                                <th scope="col" style={{ color: 'white' }}>Exercises</th>
                                <th scope="col" style={{ color: 'white' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doc.map((doc, index) => (
                                <tr key={index}>
                                    <td style={{ color: 'white' }}>{doc.title}</td>
                                    <td style={{ color: 'white' }}>{doc.description}</td>
                                    <td style={{ color: 'white' }}>{doc.exercises}</td>
                                    <td>
                                        <a className="btn btn-warning" href={`/doc/doc-update/${doc.id}`}>
                                            <i className="fas fa-edit"></i>&nbsp; Edit
                                        </a>
                                        &nbsp;
                                        <a className="btn btn-danger" href={`/doc/doc-delete/${doc.id}`}>
                                            <i className="fas fa-trash-alt"></i>&nbsp; Delete
                                        </a>
                                        &nbsp;
                                        <a className="btn btn-primary" href={`/doc/doc-view/${doc.id}`}>
                                            <i className="fas fa-eye"></i>&nbsp; View
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>







                <div style={{ textAlign: "center", padding: "10px" }}>



                    <br />


                </div>

            </div>
        </div>
    )
}

