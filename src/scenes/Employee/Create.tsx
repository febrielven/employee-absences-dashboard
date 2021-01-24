import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { Drawer, Main, ControlledTextInput } from '../../general/components';
import { Text, Button } from '../../general/core-ui';

type CreateForm = {
  nik: string;
  password: string;
  name: string;
  phone_number: string;
  email: string;
  created: string;
};

export default function Create() {
  const history = useHistory();
  const classes = useStyles();

  let { control, errors, handleSubmit, setValue } = useForm<CreateForm>();

  return (
    <div className={classes.root}>
      <Drawer />
      <Main>
        <Container component='main' maxWidth='sm'>
          <CssBaseline />
          <div className={classes.paper}>
            <Text size='xlarge' className={classes.title}>
              Create Employee
            </Text>
            <ControlledTextInput
              control={control}
              type='number'
              rules={{
                required: 'Nik wajib diisi',
                minLength: {
                  value: 6,
                  message: 'Nik minimal 6 karakter',
                },
                maxLength: {
                  value: 6,
                  message: 'Nik maksimal 6 karakter',
                },
              }}
              error={!!errors.nik}
              helperText={errors.nik?.message}
              name='nik'
              label='NIK*'
              classes={{
                root: classes.input,
              }}
            />
            <ControlledTextInput
              control={control}
              rules={{
                required: 'Password wajib diisi',
                minLength: {
                  value: 6,
                  message: 'Password minimal 6 karakter',
                },
              }}
              error={!!errors.password}
              helperText={errors.password?.message}
              name='password'
              label='Password*'
              type='password'
              classes={{
                root: classes.input,
              }}
            />

            <ControlledTextInput
              control={control}
              rules={{
                required: 'Nama wajib diisi',
              }}
              error={!!errors.name}
              helperText={errors.name?.message}
              name='name'
              label='Name*'
              classes={{
                root: classes.input,
              }}
            />

            <ControlledTextInput
              control={control}
              rules={{
                required: 'Phone Number wajib diisi',
              }}
              error={!!errors.nik}
              helperText={errors.nik?.message}
              name='phone_number'
              label='Phone Number*'
              classes={{
                root: classes.input,
              }}
            />

            <ControlledTextInput
              control={control}
              rules={{
                required: 'Email wajib diisi',
              }}
              error={!!errors.nik}
              helperText={errors.nik?.message}
              name='email'
              label='Email*'
              classes={{
                root: classes.input,
              }}
            />

            <Button
              onPress={handleSubmit((_data) => {
                history.push('/employee');
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
    display: 'flex',
  },
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
    fontWeight: 'bold',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 20,
    justifyContent: 'center',
  },

  input: {
    color: '#333',
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        border: '2px solid #333', // focus
      },
    },
    '& .MuiInputLabel-root': {
      '&.Mui-focused': {
        color: '#333',
      },
    },
    marginBottom: 20,
    width: '100%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
