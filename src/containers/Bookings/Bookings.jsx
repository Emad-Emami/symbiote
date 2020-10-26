import React from 'react';
import PropTypes from 'prop-types';

export default function Bookings({ children = 'Bookings' }) {
  return <div>{children}</div>;
}

Bookings.propTypes = {
  children: PropTypes.node,
};
