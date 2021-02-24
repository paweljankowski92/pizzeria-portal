import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderWaiter.scss';
import { Link } from 'react-router-dom';
import { Button, Container } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const OrderWaiter = () => (
<Container maxWidth="sm">
  <div className={styles.component}>
    <h2>OrderWaiter view</h2>
    <Paper className={styles.component}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Table</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Order</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Button variant='outlined' size='small' color='primary'><Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Link></Button>              <TableRow>
                <TableCell component="th" scope="row">
                </TableCell>
                <TableCell><Button variant='outlined' size='small' color='primary'><Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Link></Button></TableCell>
                <TableCell>
                  <Button variant='outlined' size='small' color='primary'><Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Link></Button>
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <Button variant='outlined' size='small' color='primary'><Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Link></Button>
      <Button variant='outlined' size='small' color='secondary'><Link to={`${process.env.PUBLIC_URL}/waiter/id`}>waiter id</Link></Button>
  </div>
  </Container>
);

OrderWaiter.propTypes = {
  children: PropTypes.node,
};

export default OrderWaiter;
