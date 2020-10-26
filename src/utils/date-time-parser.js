import itsadate from 'its-a-date';

function dateTimeParser(string, options) {
  const date = itsadate.parse(string, options);
  return date;
}

export default dateTimeParser;
