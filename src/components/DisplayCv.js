import React, {useState} from 'react'

function DisplayCv(props) {
    const [firstName,lastName,phone,email,university,major,start_from,end_at,location,details,company, position,from,to,city,description] = props.personalInformations

    return (
        <div id="display">
           <h1 className = 'resume'>Resume</h1>
                <div id="resume">
                  <div id="personalInfo" >
                    <h1>Personal Information</h1>
                    <p>Name: {firstName} {lastName}</p>
                    <p>Phone: {phone}</p>
                    <p>Email: {email} </p>
                  </div>
                </div>
                <div id="education">
                    <h1>Education</h1>
                    <p id="dis-city">{location}</p>
                    <h3>{major}, {university}</h3>
                    <p>{start_from} - {end_at}</p>
                    <br/>
                    <p>{details}</p>
                </div>
                <div id="workExp">
                    <h1>Work Experience</h1>
                    <p id="dis-city">{city}</p>
                    <h3>{position} , {company}</h3>
                    <p>{from} - {to}</p>
                    <br/>
                    <p>{description}</p>
                </div>
            </div>

    )
}

export default DisplayCv
