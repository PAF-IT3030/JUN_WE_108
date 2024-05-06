import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import backgroundImage from '../images/2222.jpg';


export default function DeleteDoc() {
    const [doc, setDoc] = useState({});
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const userId = params.id;
    const navigate = useNavigate();

    useEffect(() => {
        async function Getid() {
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:8070/api/workoutplan/${userId}`)

                setDoc(res.data);
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
        axios.delete(`http://localhost:8070/api/deleteworkoutplan/${userId}`)

            .then(() => {


                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Delete Successful',
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
                <div className="col-lg-9-mt-2 mb-2 p-3 pt-4 text-white">
                    <h1 style={{ textAlign: "left", paddingLeft: "90px" }}>Delete WorkOut</h1>
                </div>
                <div className="container">

                    {loading ? (
                        <div>Loading...</div>


                    ) : (doc && Object.keys(doc).length !== 0 ? (
                        <div className="container shadow-lg p-3 mb-5  rounded" style={{ backgroundColor: "rgba(7, 43, 82, 0.5)", backdropFilter: "blur(2px)" }}>
                            <form onSubmit={handleDelete}>

                                <div className="mb-3 text-white">
                                    <label for="name" className="form-label">WorkOut Topic: {doc.title}</label>
                                </div>

                                <div className="mb-3 text-white">
                                    <label for="department" className="form-label">WorkOut description: {doc.description}</label>
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
