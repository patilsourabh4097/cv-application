import React, {useState} from 'react'


function Work(props) {
    const [company, setcompany] = useState('')
    const [position, setposition] = useState('')
    const [from, setfrom] = useState('')
    const [to, setto] = useState('')
    const [city, setcity] = useState('')
    const [description, setdescription] = useState('')

    const inputHandler = e =>{
        let name = e.target.name
        if(name==='company'){
            setcompany(e.target.value)
        }
        if(name==='position'){
            setposition(e.target.value)
        }
        if(name==='from'){
            setfrom(e.target.value)
        }
        if(name==='to'){
            setto(e.target.value)
        }
        if(name==='city'){
            setcity(e.target.value)
        }
        if(name==='description'){
            setdescription(e.target.value)
        }
    }

    const submitTask = e =>{
        e.preventDefault();
        
        if(company ==='' || position==='' || from==='' || to==='' || city ==='' || description ===''){
            alert('Please provide all fields')
        }else{
            alert('submitted')
        }
        props.handleData(company,position,from,to,city,description)

    }
    return (
        <div>
            <h2>Work Experience</h2>
                <form  onSubmit={submitTask} >
                    <div>
                        <input type="text" id="company" placeholder="Company" name="company" value={company} onChange={inputHandler} />
                        <input type="text" id="position" placeholder="Position" name="position" value={position} onChange={inputHandler} />
                    </div>
                    <div>
                        <label htmlFor="from" id="l1">From:</label>
                        <input type="date" id="date" name="from" value={from} onChange={inputHandler} />
                        <label htmlFor="to" id="l2">To:</label>
                        <input type="date" id="date" name="to" value={to} onChange={inputHandler} />
                        <input type="text" id="email" placeholder="City, Country" name="city" value={city} onChange={inputHandler} />
                    </div>
                    <div>
                        
                        <label htmlFor="from" id="l3">Responsibility:</label>
                        <textarea type="text" id="respons" name="description" value={description} onChange={inputHandler} />
                    </div>
                    <button type="submit" id="btn1" >Submit</button>
                </form>

        </div>
    )
}

export default Work
