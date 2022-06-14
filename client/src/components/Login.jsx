import { Button, FormControl, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react';

import { loginUser} from '../http/auth'

const initialState =  {
    username: '',
    password: ''
}

const Login = () => {

    const [userDetail, setUserDetail] = useState(initialState)

    const handleChange = (e) => {

        setUserDetail({...userDetail, [e.target.name]: e.target.value})
        console.log(userDetail);

    }

    const SubmitDetails = async () => {
        //axios call lagao
        await loginUser(userDetail)

    }

  return (
    <>

    <FormControl style={{ marginTop: 111 }}>

        <TextField label='Enter username' value={userDetail.username} name='username' onChange = {(e)=>handleChange(e)} />

        <TextField label='Enter password' value={userDetail.password} onChange = {(e)=>handleChange(e)} name='password' />


    <Button variant='contained' color='primary' onClick={(e) => SubmitDetails(e)}> Login </Button>

    </FormControl>



    </>
  )
}

export default Login