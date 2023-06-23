import React from 'react'
import { UilCloud,  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset } from '@iconscout/react-unicons'

function TemperatureAndDetails() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-500">
      <p>Clear</p>
    </div>

    <div className="flex flex-row items-center justify-between text-white py-3">
      <UilCloud size={50}/>
      <p className="text-4xl">34°</p>
      <div className="flex flex-col space-y-2">
        <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1"/>
            Real Fell:
            <span className="font-medium ml-1">34°</span>
        </div>
        <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1"/>
            Humidity:
            <span className="font-medium ml-1">65%</span>
        </div>
        <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1"/>
            Wind:
            <span className="font-medium ml-1">11 km/h</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TemperatureAndDetails