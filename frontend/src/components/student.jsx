import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Chart from "chart.js/auto";

const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8089/api/v1/student";

function Student() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${API_URL}/getall`);
      setStudents(response.data);
    } catch (error) {
      setError("Error fetching details");
    }
  };

  const handleNavigateToAddStudent = () => {
    navigate("/post");
  };

  const handleEditStudent = (studentId) => {
    navigate(`/editpost/${studentId}`);
  };

  const handleDeleteStudent = async (studentId) => {
    try {
      await axios.delete(`${API_URL}/delete/${studentId}`);
      alert("Successfully Deleted");
      fetchStudents(); // Refetch data after deletion
    } catch (error) {
      setError("Error deleting student details");
    }
  };

  return (
    <center>
      <div>
        <br />
        <h1>Workout Plan</h1>
        <br />
        <button
          className="btn btn-dark mt-4"
          onClick={handleNavigateToAddStudent}
        >
          Create Workout Plan
        </button>
        <div>
          <table className="table table-striped mt-4">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">No Of Reps</th>
                <th scope="col">Ran Distance</th>
                <th scope="col">Weight Lifted</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student._id}>
                  <td>{student.studentname}</td>
                  <td>{student.studentaddress}</td>
                  <td>{student.status}</td>
                  <td>{student.noofpushups}</td>
                  <td>{student.randistance} Km</td>
                  <td>{student.weightlifted} Kg</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary mr-2"
                      onClick={() => handleEditStudent(student._id)}
                    >
                      Edit Plan
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDeleteStudent(student._id)}
                    >
                      Delete Plan
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <br />
        <br />
      </div>
    </center>
  );
}

export default Student;
