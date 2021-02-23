import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderWaiter.scss';

const OrderWaiter = () => (
  <div className={styles.component}>
    <h2>OrderWaiter view</h2>
  </div>
);

OrderWaiter.propTypes = {
  children: PropTypes.node,
};

export default OrderWaiter;
