import {
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import { useState } from "react";

function LoginPage() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });

  const [isDisabled, setIsDisabled] = useState(true)

  function handleOnChange(event) {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  }

  function handleOnBlur(event) {
    if (event.target.name === "email") {
      if (userDetails.email === "") {
        setError({
          ...error,
          emailError: "Email cannot be empty",
        });
      }
      else{
        setError({
            ...error,
            emailError: "",
          });
      }
    }
    if (event.target.name === "password") {
      if (userDetails.password === "") {
        setError({
          ...error,
          passwordError: "Password cannot be empty",
        });
      }
      else{
        setError({
            ...error,
            passwordError: "",
          });
      }
    }

    if (Object.values(error).every((x) => x === "")) {
        setIsDisabled(true);
      }
      if(Object.values(userDetails).indexOf("")==-1){

        setIsDisabled(false);
      }
  }

  function handleOnSubmit() {
    console.log(userDetails);
  }
  return (
    <Card
      sx={{
        width: "fit-content",
        m: "auto",
        boxShadow: 12,
      }}
    >
      <CardHeader title="LOGIN" />
      <CardContent
        sx={{
          m: 1 / 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          gap: "10px",
        }}
      >
        {/* login TextField */}
        <TextField
          required
          name="email"
          label="Email Id"
          value={userDetails.email}
          onChange={handleOnChange}
          helperText={error.emailError}
          error={error.emailError === "" ? false : true}
          onBlur={handleOnBlur}
        />

        {/* Password TextField */}
        <TextField
          type="password"
          required
          name="password"
          label="Password"
          value={userDetails.password}
          onChange={handleOnChange}
          helperText={error.passwordError}
          error={error.passwordError === "" ? false : true}
          onBlur={handleOnBlur}
        />

        {/* Login Button */}
        <Button
          variant="contained"
          onClick={handleOnSubmit}
          disabled={isDisabled}
        >
          Login
        </Button>
        {/* Register Button */}
        <Button variant="text" href="/register">
          Register
        </Button>
      </CardContent>
    </Card>
  );
}

export default LoginPage;
