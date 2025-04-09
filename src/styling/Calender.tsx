import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles

const CalendarComponent = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <div className="flex justify-center items-center min-h-screen  ">
    <div className="lg:px-20  mx-14 shadow-normal">
      <h2 className="text-xl font-semibold mb-2">Select a Date</h2>
      <Calendar onChange={setDate} value={date} />
      {date && (
        <p className="mt-2 ">
          Selected Date: <strong>{date.toDateString()}</strong>
        </p>
      )}
    </div>

    
    </div>
  );
};

export default CalendarComponent;
