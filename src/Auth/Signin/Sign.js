import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import Axios from "axios";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [authIsLoading, setAuthIsLoading] = useState(false);

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      setAuthIsLoading(true)
      Axios.post("https://api.atata57.com/login", {
        email: email,
        password: password,
      })
        .then((response) => console.log(response))
        .catch((err) => console.log(err.response));
    } else {
      setError("Email/Password cannot be empty");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        {/* <p className="alert alert-danger">{item.email}</p> */}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {error !== "" ? (
          <Alert severity="error">{error}</Alert>
        ) : null}

        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            // error={props.loginError.email}
            // helperText={props.loginError.email && props.loginError.email[0]}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            // error={props.loginError.password ? true:false}
            // helperText={
            //   props.loginError.password && props.loginError.password[0]
            // }
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => handleLogin()}
            className={classes.submit}
          >
            {authIsLoading === true ? (
              <CircularProgress size={16} color="inherit" />
            ) : (
              "Sign In"
            )}
          </Button>
          {/* <Grid container>
            <Grid item>
              <Link component={RouterLink} to="/createManager" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
    </Container>
  );
}

export default SignIn;
