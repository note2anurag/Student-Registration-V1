import Header from './components/Header'
import Students from './components/Students'
import AddStudent from './components/AddStudent'
import Footer from './components/Footer'
import About from './components/About'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {useState} from 'react'

function App() {
  const [showAddStudent, setShowAddStudent] = useState(false)
  const [students, setStudents] = useState([
    {
        firstName: 'Anurag',
        lastName: 'Gautam',
        fatherName: 'RB Singh',
        emailId: 'note2anurag@outlook.com',
        gender: 'Male',
        dob: '04/03/1993',
        picture: '',
        country:'India',
        contact: '9262748948',
        address:'Patna-24'        
    }
])

// Add student
const addStudent = (student) => {
 const id = Math.floor(Math.random()*10000) + 1
 const newStudent = {id, ...student}
 setStudents([...students, newStudent])
}

  //Delete students
const deleteStudent = (id) => {
  setStudents(students.filter((student) => student.id !== id))
  //console.log('click', id)
}


  return (
    <Router>
    <div className="container">
      <Header onAdd={()=>setShowAddStudent(!showAddStudent)} showAdd={showAddStudent}/>
        <h4>Welcome to Student Registration portal</h4>
        <p>Click to register new Students or simply view the list of registered students below!</p>
       <Route path='/' exact render = {(props) => (
          <>
            {showAddStudent && <AddStudent onAdd={addStudent}/>}
          </>
        )} />
      <Route path='/students' exact render = {(props) => (
          <>
            { students.length > 0 ? <Students students={students} onDelete={deleteStudent}/> : 'No students to show!' }
          </>
        )}  />
      <Route path='/about' exact component={About} />
      
     
      <Footer />
    </div>
    </Router>

  );
}

export default App;