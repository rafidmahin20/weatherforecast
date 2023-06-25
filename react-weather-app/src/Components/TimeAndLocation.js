import React from 'react'
import { formatToLocalTime } from '../Services/WeatherDetails'

function TimeAndLocation({weather: {dt, timezone, name, country}}) {
  return (
    <div>
        <div className="flex flex-row items-center justify-center my-6">
            <p className="text-white text-xl font-extralight">
                {formatToLocalTime(dt, timezone)}
            </p>
        </div>

        <div className="flex flex-row items-center justify-center my-6">
            <p className="text-white text-xl font-bold">{`${name}, ${country}`}</p>
        </div>
    </div>
  )
}

export default TimeAndLocation