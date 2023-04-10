import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../cssFiles/calendar.css';
const Calender = () => {
    const [value, onChange] = useState(new Date());
  return (
    <div className='div'>
         <Calendar onChange={onChange} value={value} />
    </div>
  )
}

export default Calender