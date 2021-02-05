import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { RouteComponentProps } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import { Drawer, Main, ControlledTextInput } from "../../general/components";
import { Text, Button } from "../../general/core-ui";
import fetchApi from "../../general/helpers/fetchApi";

type CreateForm = {
  nik: string;
  password: string;
  fullname: string;
  phone_number: string;
  email: string;
};

type Props = RouteComponentProps;

function Edit(props: Props) {
  const classes = useStyles();

  let { match, history } = props;
  let { control, errors, handleSubmit, setValue } = useForm<CreateForm>();
  let [item, setItem] = useState({} as CreateForm);

  let { id }: any = match.params;

  useEffect(() => {
    getEmployeeOne();
  }, [!item]);

  const getEmployeeOne = async () => {
    let { data, statusCode } = await fetchApi(`/api/employee/${id}`);
    if (statusCode === 200) {
      setItem(data);
      setValue("nik", data.nik);
      setValue("fullname", data.fullname);
      setValue("phone_number", data.phone_number);
      setValue("email", data.email);
    }
  };

  const editEmployee = async (data: CreateForm) => {
    let { statusCode } = await fetchApi(`/api/employee/${id}`, {
      method: "PUT",
      body: data,
    });
    if (statusCode === 200) {
      history.push("/employee");
    }
  };
  return (
    <div className={classes.root}>
      <Drawer />
      <Main>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <div className={classes.paper}>
            <Text size="xlarge" className={classes.title}>
              Edit Employee {item.nik}
            </Text>
            <ControlledTextInput
              control={control}
              type="number"
              rules={{
                required: "Nik wajib diisi",
                minLength: {
                  value: 6,
                  message: "Nik minimal 6 karakter",
                },
                maxLength: {
                  value: 6,
                  message: "Nik maksimal 6 karakter",
                },
              }}
              error={!!errors.nik}
              helperText={errors.nik?.message}
              name="nik"
              label="NIK*"
              defaultValue={""}
              classes={{
                root: classes.input,
              }}
            />
            <ControlledTextInput
              control={control}
              defaultValue=""
              rules={{
                required: "Password wajib diisi",
                minLength: {
                  value: 6,
                  message: "Password minimal 6 karakter",
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

            <ControlledTextInput
              control={control}
              rules={{
                required: "Nama wajib diisi",
              }}
              error={!!errors.fullname}
              helperText={errors.fullname?.message}
              name="fullname"
              label="Name*"
              classes={{
                root: classes.input,
              }}
            />

            <ControlledTextInput
              control={control}
              defaultValue=""
              rules={{
                required: "Phone Number wajib diisi",
              }}
              error={!!errors.phone_number}
              helperText={errors.phone_number?.message}
              name="phone_number"
              label="Phone Number*"
              classes={{
                root: classes.input,
              }}
            />

            <ControlledTextInput
              control={control}
              defaultValue=""
              rules={{
                required: "Email wajib diisi",
              }}
              error={!!errors.email}
              helperText={errors.email?.message}
              name="email"
              label="Email*"
              classes={{
                root: classes.input,
              }}
            />

            <Button
              onPress={handleSubmit((_data) => {
                editEmployee(_data);
              })}
            >
              Submit
            </Button>
          </div>
        </Container>
      </Main>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    marginBottom: 20,
    fontWeight: "bold",
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
      "&.Mui-focused": {
        color: "#333",
      },
    },
    marginBottom: 20,
    width: "100%",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default Edit;
