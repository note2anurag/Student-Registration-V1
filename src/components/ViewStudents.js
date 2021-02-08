import React from 'react'
import Students from './Students'

const ViewStudents = (students, deleteStudent) => {
    return (
           
        <div className='student'>
           { students.length > 0 ? <Students students={students} onDelete={deleteStudent} /> : <p> Add Students to view List!</p> }
        </div>  
    )
}

export default ViewStudents
