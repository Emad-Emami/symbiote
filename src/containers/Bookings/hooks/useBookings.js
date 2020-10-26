import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import bookingsSelectorFactory from '@containers/Bookings/selectors';

function useBookings(params) {
  const bookingsSelector = useMemo(bookingsSelectorFactory, []);
  return useSelector((state) =>
    bookingsSelector(state, JSON.stringify(params)),
  );
}

export default useBookings;
