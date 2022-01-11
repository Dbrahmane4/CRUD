import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Read() {
    const [apiData, setApiData] = useState([]);
    useEffect(()=>{
        axios.get(`https://61dd428af60e8f00176686b5.mockapi.io/Crud`).then((getData)=>{
            setApiData(getData.data)
        })
    })
    const deleteItem = (id) => {
        axios.delete(`https://61dd428af60e8f00176686b5.mockapi.io/Crud/${id}`);
    }
    return (
        <div>
            <table>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Update</th>
                        <th>Delete</th>
                        
                    </tr>
                    
                    {apiData.map((data)=> {
                        return(
                            <>
                            <tr>
                            <td>{data.id}</td>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td>
                                <button>Update</button>
                            </td>
                            <td>
                                <button onClick={()=>deleteItem(data.id)}>Delete</button>
                            </td>
                            </tr>
                           
                            </>
                            
                        ) 
                        
                    })}
                        
                    
            </table>
        </div>
    )
}

export default Read
