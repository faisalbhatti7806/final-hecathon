import React,{useState} from "react";


import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

import { initializeApp } from 'firebase/app';
import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export function DialogWithForm() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');
    const [pic, setPic] = useState(null);
     const [password, setPassword] = useState('');
     const firebaseConfig = {
        apiKey: "AIzaSyBzowxPv27CB3uSUoaSVNdEbWFsZ0USi74",
        authDomain: "final-hecathon.firebaseapp.com",
        projectId: "final-hecathon",
        storageBucket: "final-hecathon.appspot.com",
        messagingSenderId: "999986011004",
        appId: "1:999986011004:web:915bcde923e03e1a06a2f9",
        measurementId: "G-89DSFP97ZV"
      };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

    const handleFileChange = (e) => {
      if (e.target.files[0]) {
        setPic(e.target.files[0]);
      }
    };
  


    const generateRandomRollNumber = async () => {

        let isUnique = false;
        let rollNumber;
    
        while (!isUnique) {
          rollNumber = Math.floor(1000 + Math.random() * 9000);
    
          // Check if the generated roll number already exists in Firestore
          const rollNumberQuery = query(collection(db, 'students'), where('rollNumber', '==', rollNumber));
          const rollNumberSnapshot = await getDocs(rollNumberQuery);
    
          if (rollNumberSnapshot.empty) {
            // If the roll number doesn't exist, mark it as unique and break the loop
            isUnique = true;
          }
        }
    
        return rollNumber;
      };

    const handleAddStudent = async () => {
   
  
      try {
        if (pic) {
          // Upload the picture to Firebase Storage
          const storageRef = ref(storage, `student_pics/${pic.name}`);
          await uploadBytes(storageRef, pic);
          const picUrl = await getDownloadURL(storageRef);
  
          const rollNumber = await generateRandomRollNumber();

          // Add student data to Firestore
          await addDoc(collection(db, 'students'), {
            rollNumber,
            name,
            course,
            email,
            picUrl,
            password,
          });
  
          // Clear form fields after successful addition
          setName('');
          setEmail('');
          setCourse('')
          setPic(null);
          setPassword('');
          setOpen(false)
        } else {
          console.error("Please select a picture.");
          alert("Please select a picture.")
        }
      } catch (error) {
        console.error("Error adding student: ", error);
        alert("Error adding student: ", error.message)
      }
    };

  return (
    <div>
      <Button onClick={handleOpen}> <i class="fa-solid fa-plus"></i> Add Student</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-1">
      <Typography variant="h4" color="blueGray">
        Add Student
      </Typography>
      <Typography variant="h6">Student Name</Typography>
      <Input
        label="Name"
        size="lg"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Typography variant="h6">Course  Name</Typography>
      <Input
        label="Course Name"
        type="text"
        size="lg"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <Typography variant="h6">Student Email</Typography>
      <Input
        label="Email"
        type="email"
        size="lg"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Typography variant="h6">Student Pic</Typography>
      <Input
        label="Pic"
        type="file"
        size="lg"
        onChange={handleFileChange}
      />
      <Typography variant="h6">Student Password</Typography>
      <Input
        label="Password"
        type="password"
        size="lg"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleAddStudent}>
        Add Student
      </Button>


            <Typography variant="small" className="mt-4 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                Sign up
              </Typography>
            </Typography>
 </CardBody>
        </Card>
      </Dialog>
    </div>
  );
}