import React, {useState} from 'react'

function Personal(props) {

    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    


    const submitTask = e =>{
        e.preventDefault();
        
        if(firstName ==='' || lastName==='' || phone==='' || email===''){
            alert('Please provide all fields')
        }else{
            alert('submitted')
        }
        props.handleData(firstName,lastName,phone,email)

    }

    const inputHandler = e =>{
        let name = e.target.name
        if(name==='firstName'){
            setfirstName(e.target.value)
        }
        if(name==='lastName'){
            setlastName(e.target.value)
        }
        if(name==='email'){
            setemail(e.target.value)
        }
        if(name==='phone'){
            setphone(e.target.value)
        }
    }

    return (
        <div>
            <h2> Personal Information</h2>
            <form onSubmit = {submitTask}>
        
            <input type='text' id='name_1' name='firstName' placeholder='First Name' value={firstName} onChange = {inputHandler}/>
            <input type='text' id='name_2' name='lastName' placeholder='Last Name' value={lastName}  onChange = {inputHandler} />
           
            <div>
            <input type='text' id='phone' name='phone' placeholder='Phone No.' value={phone}  onChange = {inputHandler} />
            <input type='text' id='email' name='email' placeholder='Email' value={email}  onChange = {inputHandler} />
            </div>
            <button type = 'submit' id='btn1'> Submit</button>
            </form>

        </div>
    )
}

export default Personal
