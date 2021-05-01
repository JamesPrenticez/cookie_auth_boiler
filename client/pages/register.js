import {useState} from 'react'
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState('James')
    const [email, setEmail] = useState('james@gmail.com')
    const [password, setPassword] = useState('lkiokmn')

    const handleSubmit = async (e) => {
        e.preventDefault(); //prevents reload
       // console.table({ name, email, password })
       const { data } = await axios.post('http://localhost:8000/api/register', {
           name,
           email,
           password,
       })
       console.log("REGISTER RESPOSE", data)
    } 
    return (
        <>
        <h1 className='jumbotron text-center bg-primary square'>Register</h1>
        
        <div className='container col-md-4 offset-md-4 pb-5'>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    className='form-control mb-4 p-4'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                    required
                />
                <input 
                    type='email'
                    className='form-control mb-4 p-4'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    required
                />
                <input 
                    type='password'
                    className='form-control mb-4 p-4'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                />
                <button type='submit' className='btn btn-block btn-primary p-2'>
                    Submit
                </button>
            </form>
        </div>
        </>
    )
}

export default Register