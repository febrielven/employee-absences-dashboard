import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { Drawer, Main, Table } from '../../general/components';
import { Text, Button } from '../../general/core-ui';

type Items = {
  nik: string;
  name: string;
  phone_number: string;
  email: string;
  created: string;
};

export default function List() {
  const history = useHistory();
  const classes = useStyles();
  const rowTable: Array<string> = [
    'NIK',
    'NAME',
    'PHONE NUMBER',
    'Email',
    'CREATE',
    'ACTION',
  ];

  let [items, setItems] = useState<Items[]>([]);

  useEffect(() => {
    let data: Items[] = [
      {
        nik: '1232324',
        name: 'Febrianto',
        phone_number: '08134343434',
        email: 'febrielven@gmail.com',
        created: new Date().toDateString(),
      },
      {
        nik: '2323246',
        name: 'Febrianto',
        phone_number: '08134343434',
        email: 'febrielven@gmail.com',
        created: new Date().toDateString(),
      },
    ];

    setItems(data);
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
            <TableRow key={row.nik}>
              <TableCell>{row.nik}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phone_number}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.created}</TableCell>
              <TableCell className={classes.spacearound}>
                <Button className={classes.button} onPress={() => history.push('/employee/edit')}>
                  Edit
                </Button>
                <Button buttonType='secondary' onPress={() => alert('delete')}> Delete</Button>
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
    flexDirection:'row',
  },
  button:{
    marginRight:15,
    backgroundColor:'#BDBDBD'
  }
});
