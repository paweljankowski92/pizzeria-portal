import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderWaiter.scss';
import { Link } from 'react-router-dom';

const OrderWaiter = () => (
  <div className={styles.component}>
    <h2>OrderWaiter view</h2>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Link>
      <Link to={`${process.env.PUBLIC_URL}/waiter/:id`}> order id</Link>
  </div>
);

OrderWaiter.propTypes = {
  children: PropTypes.node,
};

export default OrderWaiter;
