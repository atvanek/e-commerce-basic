import React from 'react'
import Nav from './Nav'
import {Context} from '../Context'

export default function Login (){

    const {user, setUser, loggedIn, setLoggedIn} = React.useContext(Context)
    const [password, setPassword] = React.useState('')
    const [invalidPassword, setInvalidPassword] = React.useState(false)
    const [hideSpinner, setHideSpinner] = React.useState(true)

    function handleSubmit (e) {
        e.preventDefault()
        setHideSpinner(false)
        setInvalidPassword(false)
        setTimeout(()=>{
            if(password !== 'password'){
                setInvalidPassword(true)
            } else {
                setInvalidPassword(false)
                setLoggedIn(true) 
            }
            setHideSpinner(true)
        }, 1000)
        
        
        
        
    }

    function logout (){
        setHideSpinner(false)
        setTimeout(()=>{
            setLoggedIn(false)
            setUser('')
            setPassword('')
            setHideSpinner(true)
        }, 1000)
    }

    return (
    <>
    <Nav />
    <div className='card m-5 p-5'>
        {!loggedIn ?
        <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Username</label>
            <div id="emailHelp" class="form-text">Use your first name</div>
            <input value={user} onChange={(e)=>setUser(e.target.value)}type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <div id="emailHelp" class="form-text">use "password"</div>
            <input value={password} onChange={(e)=>setPassword(e.target.value)}type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        {invalidPassword && 
        <p className='mb-0'style={{color: 'red'}}>Please enter valid password</p>}
       <div class="d-flex justify-content-center">
            <div id='spinner' hidden={hideSpinner} class="spinner-border m-4" role="status">
                <span display='hidden' class="visually-hidden">Loading...</span>
            </div>
        </div>
        <button onClick={handleSubmit} class="btn btn-primary mx-0 mt-4">Submit</button>
        </form>
        :
        <div className='card-body'>
        <p className='card-text'>{`You are logged in as "${user}"`}</p>
        <div class="d-flex justify-content-center">
            <div id='spinner' hidden={hideSpinner} class="spinner-border m-4" role="status">
                <span display='hidden' class="visually-hidden">Loading...</span>
            </div>
        </div>
        <button onClick={logout}className='btn btn-primary'>Log out</button>
        </div>
         }
    </div>
    </>
    )
}