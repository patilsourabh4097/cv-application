import React, {useState} from 'react'
import './App.css';
import Personal from './components/Personal';
import Education from './components/Education';
import Work from './components/Work';
import DisplayCv from './components/DisplayCv';


function App() {

  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [phone, setphone] = useState('')
  const [email, setemail] = useState('')

  const [university, setuniversity] = useState('')
  const [major, setmajor] = useState('')
  const [start_from, setstart] = useState('')
  const [end_at, setend] = useState('')
  const [location, setlocation] = useState('')
  const [details, setdetails] = useState('')


  const [company, setcompany] = useState('')
  const [position, setposition] = useState('')
  const [from, setfrom] = useState('')
  const [to, setto] = useState('')
  const [city, setcity] = useState('')
  const [description, setdescription] = useState('')
  
  const personalInfo = [firstName,lastName,phone,email,university,major, start_from, end_at,location,details,company, position,from,to,city,description]
  
  const [resumeIsVisible, setresumeIsVisible] = useState(false)

  
  const handlePersonalData = (firstName, lastName,phone,email)=>{
    console.log('I am personal')
    setfirstName(firstName)
    setlastName(lastName)
    setphone(phone)
    setemail(email)
  }
    const handleEducationalData = (university, major, start_from, end_at, location, details)=>{
      console.log('I am education')
      setuniversity(university)
      setmajor(major)
      setstart(start_from)
      setend(end_at)
      setlocation(location)
      setdetails(details)

  }

  const handleWorkData = (company,position,from,to,city,description)=>{
    console.log('I am work')
    setcompany(company)
    setposition(position)
    setfrom(from)
    setto(to)
    setcity(city)
    setdescription(description)
  }

  const toggleResumeDisplay = (e) => {
    e.preventDefault()
    setresumeIsVisible(!resumeIsVisible)
  }

  return (
    <div className="App">
      
      <div className='section'>
      {!resumeIsVisible ? (
            <>
        <header id="header">CV Application</header>
        <Personal handleData = {handlePersonalData}/>
          <hr />
        <Education handleData = {handleEducationalData} />
          <hr />
        <Work handleData= {handleWorkData} />
        
         
          
        <div>
          <button id="btn3" onClick={toggleResumeDisplay}>Display CV</button>
        </div>
   
        
        </>
      ):(
        <div>
        <DisplayCv 
        personalInformations={personalInfo} 
        />
        <div>
            <button id="btn3" onClick={toggleResumeDisplay}>Edit CV</button>
           
        </div>
      </div>
      )}
     </div>
    </div>
  );
}

export default App;
