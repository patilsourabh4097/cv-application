import React, {useState} from 'react'

function Education(props) {
    const [university, setuniversity] = useState('')
    const [major, setmajor] = useState('')
    const [start_from, setstart] = useState('')
    const [end_at, setend] = useState('')
    const [location, setlocation] = useState('')
    const [details, setdetails] = useState('')
    


    const submitTask = e =>{
        e.preventDefault();
        
        if(university ==='' || major==='' || start_from==='' || end_at==='' || location ==='' || details===''){
            alert('Please provide all fields')
        }else{
            alert('submitted')
        }
        props.handleData(university, major, start_from, end_at, location, details)

    }

    const inputHandler = e =>{
        let name = e.target.name
        if(name==='university'){
            setuniversity(e.target.value)
        }
        if(name==='major'){
            setmajor(e.target.value)
        }
        if(name==='start_from'){
            setstart(e.target.value)
        }
        if(name==='end_at'){
            setend(e.target.value)
        }
        if(name==='location'){
            setlocation(e.target.value)
        }
        if(name==='details'){
            setdetails(e.target.value)
        }
    }
    return (
        <div>
            <h2> Education </h2>
            <form onSubmit = {submitTask}>
               
                <input type='text' id='university' name='university' placeholder='University' value={university} onChange = {inputHandler}/>
                <input type='text' id='major' name='major' placeholder='Major' value={major} onChange = {inputHandler}/>
               
                
                    <label id='l1_edu'>From : </label>
                    <input type='date' id='date' name="start_from" value={start_from} onChange={inputHandler}/>
                    <label  id='l2'>To : </label>
                    <input type='date' id='date' name="end_at" value={end_at} onChange={inputHandler}/>
                    <input type='text' id='email' name="location" placeholder='City' value={location} onChange={inputHandler}/>
                
                <div>
                    <label htmlFor="details" id="l3">Details:</label>
                    <textarea id="details" name="details" value={details} onChange={inputHandler}/>
                </div>
                <button id='btn1'>Submit</button>
            
            </form>

        </div>
    )
}

export default Education
