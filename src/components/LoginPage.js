import { Button, Card, CardContent, CardHeader, TextField } from "@mui/material";
import { useState } from "react";


function LoginPage(){

    const [userDetails, setUserDetails] = useState({
        email : '',
        password : '',
        emailError : false,
        passwordError : false
    })


    function handleOnChange(event){
        if(event.target.id === 'loginEmail'){
        setUserDetails({
            ...userDetails,
            email : event.target.value,
            emailError: false
        })

        if(event.target.value.length === 0){
            setUserDetails({
                ...userDetails,
                emailError : true,
                email: ''
            })
        }

    }
    if(event.target.id === 'loginPassword'){
        setUserDetails({
            ...userDetails,
            password : event.target.value,
            passwordError: false
        })
        if(event.target.value.length === 0){
            setUserDetails({
                ...userDetails,
                passwordError : true,
                password: ''
            })
        }
    }
    }

    function handleOnSubmit(){
        console.log(userDetails)
    }
    return(
        <Card sx={{
            width: 'fit-content',
            m: 'auto',
            boxShadow: 12
        }}>
            <CardHeader title="LOGIN" />
            <CardContent sx={{
                m: 1/2,
                display: 'flex',
                flexDirection : 'column',
                justifyContent : 'space-around',
                gap: '10px'
            }}>
            
                {/* login TextField */}
                <TextField
                required
                id="loginEmail"
                label="Email Id"
                value={userDetails.email}
                onChange={handleOnChange}
                helperText={userDetails.emailError ? "Email is required" : ""}
                error = {userDetails.emailError} /> 

                {/* Password TextField */}
                <TextField
                type='password'
                required
                id="loginPassword"
                label="Password"
                value={userDetails.password}
                onChange={handleOnChange} 
                helperText={userDetails.passwordError ? "Password is required" : ""}
                error = {userDetails.passwordError}
                />

                {/* Login Button */}
                <Button variant="contained" onClick={handleOnSubmit} disabled={userDetails.emailError || userDetails.passwordError}>Login</Button>
                {/* Register Button */}
                <Button variant="text" href="/register">Register</Button>

            </CardContent>
        </Card>
    )
}

export default LoginPage