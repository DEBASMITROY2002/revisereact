import axios from 'axios';
import { useState } from 'react';

export function ShowUserData(){
    let [userData, setUserData] = useState({
        id: 0,
        email: '',
        first_name: '',
        last_name: '',
        avatar: ''
    })

    let variable = 10;

    function getData(event){
        // get is returning a promise
        if (event.target.id === 'b1'){
            event.target.value = 1
        }
        let p = axios.get(`https://reqres.in/api/users/${event.target.value}`)
        p.then((resolved)=>{
            console.log(`Data is ${resolved.data.data}`)
            setUserData(resolved.data.data)
        }, (rejected)=>{
            console.log(`Error is ${rejected}`)
            setUserData({
                id: 0,
                email: 'Not found',
                first_name: 'Not found',
                last_name: 'Not found',
                avatar: ''
            })
        }
        )
    }
    return (
        <div>
            <input type='number' onChange={getData} max={12} min={1} id='n1'/>
            <input type='button' onClick={getData} value='Reset to 1' id='b1'/>
            <div style={
                {
                    border: '1px solid black', 
                    padding: '10px', 
                    margin: '10px',
                    boxShadow: '5px 5px 5px grey',
                    backgroundColor: 'lightblue',
                    width: '300px',
                    justifyContent: 'center',
                    alignItems: 'center'
                }
            }>
            <p>ID: {userData.id}</p>
            <p>Email: {userData.email}</p>
            <p>First Name: {userData.first_name}</p>
            <p>Last Name: {userData.last_name}</p>
            <img src={userData.avatar} alt='avatar'/>
            </div>
        </div>
    )
}