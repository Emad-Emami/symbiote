import queryString from 'query-string';
import transformBy from '@utils/transform-by';
import updateBy from '@utils/update-by';

export function fetchBookingsQueryConfigs({
  locationId,
  providerId,
  roleId,
  startDateTime,
  endDateTime,
}) {
  const filter = JSON.stringify(arguments[0]);
  return {
    url: `${
      process.env.PROD_API_BASE_PATH
    }/api/v2/booking/location/${locationId}/role/${roleId}/?${queryString.stringify(
      {
        startDateTime,
        endDateTime,
        providerId,
      },
      {
        encode: false,
      },
    )}`,
    transform: (responseBody) =>
      transformBy(responseBody.data, 'booking', 'id', filter),
    update: updateBy('booking', 'id', filter),
  };
}
