/* eslint-disable react/prop-types */
import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (typeof timestamp === 'string') { // Check if timestamp is a string
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = ` ${timePeriod} ago`;
  }
  return (
    <span title={timestamp}>
      <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;

