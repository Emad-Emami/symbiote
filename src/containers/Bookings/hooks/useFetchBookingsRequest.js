import { useRequest } from 'redux-query-react';
import { fetchBookingsQueryConfigs } from '@containers/Bookings/query-configs';

function useFetchBookingsRequest(params) {
  return useRequest(fetchBookingsQueryConfigs(params));
}

export default useFetchBookingsRequest;
