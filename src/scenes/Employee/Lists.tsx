import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { Drawer, Main, Table } from '../../general/components';
import { Text, Button } from '../../general/core-ui';
import fetchApi from '../../general/helpers/fetchApi';

type Items = {
  id: string;
  nik: string;
  fullname: string;
  phone_number: string;
  email: string;
  created: string;
};

export default function List() {
  const history = useHistory();
  const classes = useStyles();
  const rowTable: Array<string> = [
    'ID',
    'NIK',
    'NAME',
    'PHONE NUMBER',
    'Email',
    'CREATE',
    'ACTION',
  ];

  let [items, setItems] = useState<Items[]>([]);

  const getEmployee = async () => {
    let { data, statusCode } = await fetchApi('/api/employee');
    if (statusCode === 200) {
      setItems(data);
    }
  };

  const deleteEmployee = async (event:any,id:string) => {
    console.log('delete'+ id);
    let { statusCode } = await fetchApi(`/api/employee/${id}`, {
      method: 'DELETE',
    });
    if (statusCode === 200) {
      getEmployee();
    }
  };

  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <div className={classes.root}>
      <Drawer />
      <Main>
        <div className={classes.spacebetween}>
          <Text size='large' bold>
            Employee Lists
          </Text>
          <Button onPress={() => history.push('/employee/create')}>
            CREATE
          </Button>
        </div>

        <Table lists={rowTable}>
          {items.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.nik}</TableCell>
              <TableCell>{row.fullname}</TableCell>
              <TableCell>{row.phone_number}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.created}</TableCell>
              <TableCell className={classes.spacearound}>
                <Button
                  className={classes.button}
                  onPress={() => history.push(`/employee/edit/${row.id}`)}
                >
                  Edit
                </Button>
                <Button 
                  buttonType='secondary' 
                  onPress={(e)=> deleteEmployee(e, row.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </Main>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  table: {
    minWidth: 650,
  },
  spacebetween: {
    justifyContent: 'space-between',
    display: 'flex',
  },
  spacearound: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    marginRight: 15,
    backgroundColor: '#BDBDBD',
  },
});
