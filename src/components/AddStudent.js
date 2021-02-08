import { useState } from 'react'

const AddStudent = ({onAdd}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [address, setAddress] = useState('')
    const [emailId, setEmailId] = useState('')
    const [dob, setDob] = useState('')
    const [contact, setContact] = useState('')
    const [picture, setPicture] = useState('')
    const [gender, setGender] = useState('')
    const [country, setCountry] = useState('')

    //Submit 
    const onSubmit =(e) => {
        e.preventDefault()
        if(!firstName) {
            alert('Please add text ')
            return
        }
        onAdd({firstName, lastName, fatherName, dob, gender, contact, picture, country, address, emailId})
        setFirstName('')
        setLastName('')
        setFatherName('')
        setCountry('')
        setGender('')
        setPicture('')
        setEmailId('')
        setAddress('')
        setContact('')
        setDob('')


    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>First Name</label>
                <input 
                type='text' 
                placeholder='enter first name...' 
                value={firstName} 
                onChange = {(e)=>
                setFirstName(e.target.value) }
                />
            </div>
            <div className='form-control'>
                <label> Last Name </label>
                <input 
                type='text' 
                placeholder='enter last name...'  
                value={lastName} 
                onChange = {(e)=>
                setLastName(e.target.value) }
                />
            </div>
            <div className='form-control'>
                <label> Father's Name </label>
                <input 
                type='text' 
                placeholder='name of your father...'  
                value={fatherName} 
                onChange = {(e)=>
                setFatherName(e.target.value) }
                />
            </div>
            <div className='form-control'>
                <label> Address </label>
                <input 
                type='text' 
                placeholder='enter your Address...'  
                value={address} 
                onChange = {(e)=>
                setAddress(e.target.value) }
                />
            </div>
            <div className='form-control'>
                <label> Email-Id </label>
                <input 
                type='email' 
                placeholder='xyz@gmail.com'  
                value={emailId} 
                onChange = {(e)=>
                setEmailId(e.target.value) }
                />
            </div>
            <div className='form-control'>
                <input 
                type='radio'
                id='male' 
                name='gender'  
                value= 'male' 
                onChange = {(e)=>
                setGender(e.target.value) }
                />
                <label htmlFor='male'>Male</label>
                <input 
                type='radio'
                id='female' 
                name='gender'  
                value= 'female' 
                onChange = {(e)=>
                setGender(e.target.value) }
                />
                <label htmlFor='female'>Female</label>
            </div>
            <div className='form-control'>
                <label> Contact </label>
                <input 
                type='number' 
                placeholder='Mobile number...'  
                value={contact} 
                onChange = {(e)=>
                setContact(e.target.value) }
                />
            </div>
            <div className='form-control'>
                <label> Add Photo </label>
                <input 
                type='text' 
                
                value={picture} 
                onChange = {(e)=>
                setPicture(e.target.value) }
                />
            </div>
            <div className='form-control'>
                <label> Date of Birth </label>
                <input 
                type='date' 
                  
                value={dob} 
                onChange = {(e)=>
                setDob(e.target.value) }
                />
            </div>
            
            
            <input type='submit' value= 'Save Student' className='btn btn-block'/>
        </form>
    )
}

export default AddStudent