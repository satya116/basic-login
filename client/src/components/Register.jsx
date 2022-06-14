import { Button, FormControl, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react';

import { registerUser} from '../http/auth'

const initialState =  {
    name: '',
    username: '',
    password: ''
}

const Register = () => {

    const [userDetail, setUserDetail] = useState(initialState)

    const handleChange = (e) => {

        setUserDetail({...userDetail, [e.target.name]: e.target.value})
        console.log(userDetail);

    }

    const SubmitDetails = async () => {
        //axios call lagao
        await registerUser(userDetail)

    }

  return (
    <>

    <FormControl style={{ marginTop: 111 }}>



        <TextField label='Enter name' value={userDetail.name} onChange = {(e)=>handleChange(e)} name='name'/>

        <TextField label='Enter username' value={userDetail.username} name='username' onChange = {(e)=>handleChange(e)} />

        <TextField label='Enter password' value={userDetail.password} onChange = {(e)=>handleChange(e)} name='password' />


    <Button variant='contained' color='primary' onClick={(e) => SubmitDetails(e)}> Register </Button>

    </FormControl>



    </>
  )
}

export default Register