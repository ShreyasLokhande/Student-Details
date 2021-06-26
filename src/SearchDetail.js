import React, { useState, useEffect } from 'react'
import { db } from './firebase'
import './SearchDetails.css'

function SearchDetail() {
    const [details, setDetails] = useState([])
 
    const [search, setSearch] = useState("")

    useEffect(() => {
        db.collection('details').onSnapshot(snapshot => (
            setDetails(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    return (
        <div className='details__table'>
            <center>
                <div className='search'>
                    <input  placeholder='Search by City' className='search__box' onChange={(event) => {
                        setSearch(event.target.value)
                    }} />
                </div>                
            </center>
            <table className='details'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Branch</th>
                        <th>College</th>
                        <th>State</th>
                        <th>City</th>
                    </tr>
                </thead>
                {details.filter((Name)=> {
                    if(search == ""){
                        return Name
                    } else if (Name.City.toLowerCase().includes(search.toLowerCase())){
                        return Name
                    } 
                }).map(({ Name, Branch, College, State, City }) => (
                    <tbody>
                        <tr>
                            <td>{Name}</td>
                            <td>{Branch}</td>
                            <td>{College}</td>
                            <td>{State}</td>
                            <td>{City}</td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div>
    )
}

export default SearchDetail
