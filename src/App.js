import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
function App() {

  const [newStudent, setNewStudent] = useState({name:'',age:0,major:''})
  const [student,setStudent] = useState([])
  
  const handleSubmit =()=>{
    // setStudent([...student, newStudent])

    axios.post('http://localhost:3000/college-student/post',newStudent).then((res)=>{
    console.log(res.data)
    })
  }
  useEffect(()=>{
    axios.get('http://localhost:3000/college-student').then((res)=>{
    console.log(res.data)
    setStudent(res.data)
    })

  },[])
  console.log(student)
  return (
    <div className="App">
      <header className="App-header">
       <input type='text' placeholder="Enter your name" onChange={(e)=>setNewStudent({...newStudent,name:e.target.value})}/>
       <input type='number' placeholder="Enter your age" onChange={(e)=>setNewStudent({...newStudent,age:e.target.value})}/>
       <input type='text' placeholder="Enter your major" onChange={(e)=>setNewStudent({...newStudent,major:e.target.value})} />

       <button onClick={handleSubmit}>Submit</button>

       {/* <div>{newStudent.name}</div>
       <div>{newStudent.age}</div>
       <div>{newStudent.major}</div> */}


       {student.map((stu)=>{
        return(
          <div>
            <div>{stu.name}</div>
            <div>{stu.age}</div>
            <div>{stu.major}</div>

          </div>
        )
       })}
      </header>
    </div>
  );
}

export default App;

