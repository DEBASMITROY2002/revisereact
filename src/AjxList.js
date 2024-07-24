import React, {useState, useEffect} from 'react'
import axios from 'axios'

export function AjxList() {
    let [userList, setUserList] = useState([])

    useEffect(()=>{
        let p = axios.get('https://reqres.in/api/users?page=2')
        p.then((resolved)=>{
            console.log(`Data is ${resolved.data.data}`)
            setUserList(resolved.data.data)
        }, (rejected)=>{
            console.log(`Error is ${rejected}`)
            setUserList([])
        }
        )
    }, [])
    
    return (
        <div>
            <select>
                {userList.map((user)=>{
                    return <option key={user.id}>{user.first_name} {user.last_name}</option>
                })}
            </select>
        </div>
    )
}