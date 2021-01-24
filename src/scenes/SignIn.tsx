import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";

import ControlledTextInput from "../general/components/ControlledTextInput";
import { Button } from "../general/core-ui";

type SignInForm = {
  username: string;
  password: string;
};

export default function SignIn() {
  let { control, errors, handleSubmit, setValue } = useForm<SignInForm>();
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" style={{marginBottom:20}}>
          Sign in
        </Typography>

        <ControlledTextInput
          control={control}
          rules={{
            required: "UserName wajib diisi",
            minLength: {
              value: 5,
              message: "UserName minimal 5 karakter",
            },
          }}
          error={!!errors.username}
          helperText={errors.username?.message}
          name="username"
          label="Masukan Username Anda*"
          classes={{
            root: classes.input,
          }}
        />
        <ControlledTextInput
          control={control}
          rules={{
            required: "Password wajib diisi",
            minLength: {
              value: 5,
              message: "Password minimal 5 karakter",
            },
          }}
          error={!!errors.password}
          helperText={errors.password?.message}
          name="password"
          label="Password*"
          type="password"
          classes={{
            root: classes.input,
          }}
        />

        <Button onPress={handleSubmit((_data) => {})}>Sign in</Button>
      </div>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(25),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 20,
    justifyContent: "center",
  },

  input: {
    color: "#333",
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        border: "2px solid #333", // focus
      },
    },
    "& .MuiInputLabel-root": {
      "&.Mui-focused":{
        color:'#333'
      }
    },
    marginBottom: 20,
    width: "100%"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
