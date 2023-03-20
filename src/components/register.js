import {
  Button,
  Card,
  CardContent,
  CardHeader,
  MenuItem,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { userRegister } from "../services/user";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    address: "",
  });

  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    ageError: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);

  function handleOnChange(event) {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  }

  function handleOnBlur(event) {
    if (event.target.name === "name") {
      if (userDetails.name === "") {
        setError({
          ...error,
          nameError: "Name Cannot be Empty",
        });
      } else {
        setError({
          ...error,
          nameError: "",
        });
      }
    }

    if (event.target.name === "email") {
      if (userDetails.email === "") {
        setError({
          ...error,
          emailError: "Email Cannot be Empty",
        });
      } else if (
        !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(userDetails.email)
      ) {
        setError({
          ...error,
          emailError: "Wrong Email Format",
        });
      } else {
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
          passwordError: "Password Cannot be Empty",
        });
      } else {
        setError({
          ...error,
          passwordError: "",
        });
      }
    }

    if (event.target.name === "age") {
      if (userDetails.age === "") {
        setError({
          ...error,
          ageError: "Age Cannot be Empty",
        });
      } else if (parseInt(userDetails.age) <= 0) {
        setError({
          ...error,
          ageError: "Age Cannot be Less than 1",
        });
      } else {
        setError({
          ...error,
          ageError: "",
        });
      }
    }

    if (Object.values(error).every((x) => x === "")) {
      setIsDisabled(false);
    }
    if (
      userDetails.name === "" ||
      userDetails.password === "" ||
      userDetails.age === "" ||
      userDetails.email === ""
    ) {
      setIsDisabled(true);
    }
  }

  function handleOnSubmit() {
    console.log(userDetails);
    userRegister({
      name: userDetails.name,
      emailId: userDetails.email,
      password: userDetails.password,
      address: userDetails.address,
      age: userDetails.age,
    })
      .then((response) => {
        console.log(response);
        toast.success(
          response,
          {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          },
          {
            onClose: window.location.href = '/login'
          }
        );
      })
      .catch((err) => console.log(err));
  }

  return (
    <Card
      sx={{
        width: "fit-content",
        m: "auto",
        boxShadow: 12,
      }}
    >
      <CardHeader title="Register" />
      <CardContent
        sx={{
          m: 1 / 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          gap: "10px",
        }}
      >
        {/* Name TextField */}
        <TextField
          required
          name="name"
          label="Name"
          value={userDetails.name}
          onChange={handleOnChange}
          helperText={error.nameError}
          error={error.nameError === "" ? false : true}
          onBlur={handleOnBlur}
        />

        {/* Email TextField */}
        <TextField
          required
          name="email"
          label="Email"
          value={userDetails.email}
          onChange={handleOnChange}
          helperText={error.emailError}
          error={error.emailError === "" ? false : true}
          onBlur={handleOnBlur}
        />

        {/* PasswordTextfiled */}

        <TextField
          required
          name="password"
          label="Password"
          type={"password"}
          value={userDetails.password}
          onChange={handleOnChange}
          helperText={error.passwordError}
          error={error.passwordError === "" ? false : true}
          onBlur={handleOnBlur}
        />

        {/* Age TextField                  */}
        <TextField
          required
          type="number"
          name="age"
          label="Age"
          value={userDetails.age}
          onChange={handleOnChange}
          helperText={error.ageError}
          error={error.ageError === "" ? false : true}
          onBlur={handleOnBlur}
        />

        {/* address TextField */}

        <TextField
          name="address"
          label="Address"
          value={userDetails.address}
          onChange={handleOnChange}
        />

        {/* Gender TextField */}
        <TextField
          value={userDetails.gender}
          onChange={handleOnChange}
          select // tell TextField to render select
          label="Gender"
          name="gender"
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem selected value="Prefer Not To Say">
            Prefer Not To Say
          </MenuItem>
        </TextField>

        {/* Register Button */}
        <Button
          variant="contained"
          onClick={handleOnSubmit}
          disabled={isDisabled}
        >
          Register
        </Button>
        {/* Register Button */}
        <Button variant="text" href="/login">
          Already Registered? Login
        </Button>
      </CardContent>
    </Card>
  );
}

export default Register;
