"use client";
import { FC,useState } from 'react';
import ReactCalender from 'react-calendar';
import "./Calender.css"
import {add,format} from "date-fns";



interface DateType{
    justDate: Date | null
    dateTime: Date | null
}

function Calendar() {
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  });


  const getTimes = () =>{
    if(!date.justDate) return

    const {justDate} = date

    const beginning = add(justDate,{hours: 9})
    const end = add(justDate,{hours: 18})
    const interval = 30 //In Minutes

    const times =[]
    for (let i = beginning; i <= end; i =add(i,{minutes: interval})) {
      times.push(i)
    }

    return times
  }

  const times = getTimes()

  return (
    <div>
    {date.justDate ? (
        <div>
          {times?.map((time,i) => (
              <div> 
                <button type='button' onClick={() => setDate((prev) => ({...prev,dateTime:time}))}>
                {format(time,"kk:mm")}
                </button>
              </div>
          ))}
        </div>
    ):(
      <ReactCalender 
      minDate={new Date()}
      view='month'
      className='react-calender'
      onClickDay={(date) => setDate((prev) => ({...prev,justDate:date}))} />
    )}
    </div>
  );
}

export default Calendar