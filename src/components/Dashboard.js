import React, { useEffect, useState } from 'react';
import { DefaultSidebar } from './SideBar';
import "./Style.css";
import {
    // Import your necessary Material-UI components
} from "@material-tailwind/react";
import { UserIcon } from '@heroicons/react/24/solid';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { DialogWithForm } from './addStdModal';


const firebaseConfig = {
    apiKey: "AIzaSyBzowxPv27CB3uSUoaSVNdEbWFsZ0USi74",
    authDomain: "final-hecathon.firebaseapp.com",
    projectId: "final-hecathon",
    storageBucket: "final-hecathon.appspot.com",
    messagingSenderId: "999986011004",
    appId: "1:999986011004:web:915bcde923e03e1a06a2f9",
    measurementId: "G-89DSFP97ZV"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getFirestore(app);
function Dashboard() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const auth = getAuth(app);
        const db = getFirestore(app);

        const fetchData = async () => {
            try {
                const studentsCollection = collection(db, 'students');
                const studentsSnapshot = await getDocs(studentsCollection);
                const studentsData = studentsSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setStudents(studentsData);
            } catch (error) {
                console.error("Error fetching students:", error);
                // Handle errors accordingly, e.g., display a message to the user
            }
        };

        fetchData();
    }, [firebaseConfig]); // Add dependencies if needed

    const handleDelete = async (studentId) => {
        try {
            await deleteDoc(doc(db, 'students', studentId));
            const updatedStudents = students.filter(student => student.id !== studentId);
            setStudents(updatedStudents);
        } catch (error) {
            console.error("Error deleting student:", error);
            // Handle errors accordingly
        }
    };


    return (
        <div className='container'>
            <DefaultSidebar />
            <div className='dashTable'>
                <div className="head">
                    <div className='headingdash'>
                    <i class="fa-solid fa-circle-user"></i>
                    <h1>Attendance</h1>
                </div>
                <div className='addbtn'>
                    <DialogWithForm/>
                    {/* <button> Student</button> */}
                </div>
                </div>
                <table className='tab'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Profile Img</th>
                            <th>Name</th>
                            <th>Course Name</th>
                            <th>Passwrod</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
            {students.map((student,i) => (
              <tr key={i}>
                <td>{student.rollNumber}</td>
                <td> <img src={student.picUrl} id='imge' alt="" srcset="" /> </td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.password}</td>
                <td><i className="fa-solid fa-pen-to-square"></i></td>
                <td>
                                <i
                                    className="fa-solid fa-trash"
                                    onClick={() => handleDelete(student.id)}
                                    style={{ cursor: 'pointer' }}
                                ></i>
                            </td>
              </tr>
            ))}
          </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard
