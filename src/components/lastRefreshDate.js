import React, { useState, useEffect } from 'react';

function LastRefreshDate() {
  // Step 2: Use the useState hook to manage a date state variable
  const [refreshDate, setRefreshDate] = useState(new Date());

  // Step 3: Use the useEffect hook to update the date when the component mounts (on refresh)
  useEffect(() => {
    const lastRefreshed = new Date();
    setRefreshDate(lastRefreshed);
  }, []);

  // Step 4: Render the last refreshed date and time
  return (
    <div className='update'>
      <p>Last Updated: {refreshDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
    </div>
  );
}

export default LastRefreshDate;
