import { Button, Card, CardContent, CardHeader, TextField } from "@mui/material";
import { useState } from "react";

function Register(){

    const [userDetails,setUserDetails]= useState({
        name : "",
        email : "",
        password : "",
        age: "",
        gender: ""
    })

    function handleOnChange(event){
        setUserDetails({
            ...userDetails,
            [event.target.id] : event.target.value
        })
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
            <CardHeader title="Register"/>
            <CardContent sx={{
                m: 1/2,
                display: 'flex',
                flexDirection : 'column',
                justifyContent : 'space-around',
                gap: '10px'
            }}>
                {/* Name TextField */}
                <TextField
                required
                id="name"
                label="Name"
                value={userDetails.name}
                onChange={handleOnChange}
                // helperText={userDetails.emailError ? "Invalid Email" : ""}
                // error = {userDetails.emailError}
                // onBlur= {handleOnChange}
                 />

                 {/* Email TextField */}
                 <TextField 
                 required
                 id="email"
                 label="Email"
                 value={userDetails.email}
                 onChange={handleOnChange}
                 />

                 {/* PasswordTextfiled */}

                 <TextField 
                 required
                 id="password"
                 label="Password"
                 value={userDetails.password}
                 onChange={handleOnChange}
                 />

                 {/* Age TextField                  */}
                 <TextField 
                 required
                 type="number"
                 id="age"
                 label="Age"
                 value={userDetails.age}
                 onChange={handleOnChange}
                 />

                 {/* Gender TextField */}
                 

                 {/* Register Button */}
                <Button 
                variant="contained" 
                onClick={handleOnSubmit} 
                // disabled={userDetails.emailError || userDetails.passwordError}
                >Register</Button>
                {/* Register Button */}
                <Button 
                variant="text"
                href="/login"
                >Already Registered? Login</Button>





            </CardContent>
        </Card>
    )
}

export default Register