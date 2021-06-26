import React, {useState} from 'react'
import './Form.css'
import {IconButton} from '@material-ui/core'
import {db} from './firebase'

function Form() {
    const [Name, setname] = useState('');
    const [Branch, setbranch] = useState('');
    const [College, setcollege] = useState('');
    const [State, setstate] = useState('');
    const [City, setcity] = useState('');

    const handleSubmit = (e) => {
       e.preventDefault();
       
       db.collection('details').add({
           Name: Name,
           Branch: Branch,
           College: College,
           State: State,
           City: City,
       })
       .then(() => {
           alert('Details has been Submitted 👍');
       })
       .catch((error) => {
           alert(error.message);
       })
       setname('')
       setbranch('')
       setcollege('')
       setbranch('')
       setstate('')
       setcity('')
    }

    return (
        <div className='form'>
            <form className='information' onSubmit={handleSubmit}>
                
                Name<input placeholder='Full Name' value={Name} onChange={(e) => setname(e.target.value)}/>
                Branch<input placeholder='Branch'  value={Branch} onChange={(e) => setbranch(e.target.value)} />
                College Name<input placeholder='College Name' value={College} onChange={(e) => setcollege(e.target.value)} />
                State<input placeholder='State'  value={State} onChange={(e) => setstate(e.target.value)} />
                City<input placeholder='City'  value={City} onChange={(e) => setcity(e.target.value)} />
                <IconButton><button disabled = {!Name && !Branch && !College && !City && !State} className='button' type='submit'>Submit</button></IconButton>
            </form>
            
        </div>
    )
}

export default Form
