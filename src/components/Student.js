import {FaTimes} from 'react-icons/fa'
const Student = ({student, onDelete}) => {
    return (
        <div className= "student" >
           <h3>{student.firstName +' '+ student.lastName} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(student.id)}/> </h3>
           <p>Address:{student.address}</p> 
           <table className='details'>
               <thead>
               <tr>
                    <th>#id</th>
                    <th>Picture</th>
                    <th>Email-Id</th>
                    <th>DOB</th>
                    <th>Gender</th>
                    <th>Contact</th>
                    <th>Father's Name</th>
                    <th>Country</th> 
                </tr>
               </thead>
               <tbody>
                   <tr>
                    <td>{student.id}</td>
                    <td>{student.picture}</td>
                    <td>{student.emailId}</td>
                    <td>{student.dob}</td>
                    <td>{student.gender}</td>
                    <td>{student.contact}</td>
                    <td>{student.fatherName}</td>
                    <td>{student.country}</td>
                   </tr>
               </tbody>
           </table>
        </div>
    )
}

export default Student;