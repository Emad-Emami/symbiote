import { memoize, map } from 'lodash-es';
import { createSelector } from 'reselect';

export const bookingsSelectorFactory = () =>
  createSelector(
    (state) => state.entities.bookings.bookingsById,
    (state) => state.entities.bookings.bookingIds,
    (state, filter) => filter,
    (state, filter) => state.entities.bookings[filter],
    (bookingsById, bookingIds, filter, filteredBookingsId) =>
      memoize(() =>
        map(filter ? filteredBookingsId : bookingIds, (id) => bookingsById[id]),
      ),
  );
