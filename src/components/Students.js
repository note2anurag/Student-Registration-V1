import Student from './Student'


const Students = ({students, onDelete}) => {
    
    return (
        <>
          {students.map((student)=>(
              <Student key={student.id} student={student} onDelete={onDelete}/> 
          ))}  
        </>
    )
}

export default Students;