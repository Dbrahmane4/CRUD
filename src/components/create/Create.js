import React, { useState } from 'react';
import axios from 'axios';

function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    console.log(firstName);
    console.log(lastName);
    
    const sendDataTpApi = () => {
      axios.post(`https://61dd428af60e8f00176686b5.mockapi.io/Crud`, {
          firstName,
          lastName
      })
    }
    return(
        <div>
            <form>
                <label>First Name</label>
                <input name="fname" 
                onChange={(e) => setFirstName(e.target.value)} 
                type="text" 
                placeholder='First name'/>
                <label>Last Name</label>
                <input name="lname" 
                onChange={(e) => setLastName(e.target.value)} 
                type="text" 
                placeholder='Last name'/>
                <button type="submit" onClick={sendDataTpApi}>Submit</button>
            </form>
        </div>
    )
}

export default Create
