import React from 'react';
import Dashboard from './components/Dashboard';
import PropTypes from 'prop-types';
import useFetchBookingsRequest from '@containers/Bookings/hooks/useFetchBookingsRequest';

export default function DashboardWrapper() {
  const [states] = useFetchBookingsRequest({
    locationId: '40799',
    roleId: '3',
    startDateTime: '2020-10-24T00:00:00',
    endDateTime: '2020-10-27T00:00:00',
    providerId: '13081',
  });
  console.log(states);
  return <Dashboard />;
}

DashboardWrapper.propTypes = {
  children: PropTypes.node,
};
