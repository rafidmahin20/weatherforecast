import React from 'react'

function TopButtons() {
    const cities = [
        {
            id: 1,
            title: "Dhaka"
        },
        {
            id: 2,
            title: "London"
        },
        {
            id: 3,
            title: "Sydney"
        },
        {
            id: 4,
            title: "Tokyo"
        },
        {
            id: 5,
            title: "Paris"
        }
    ]
  return (
    <div className="flex items-center justify-around my-6">
        {cities.map((city) => (
            <button key={city.id} className="text-white text-lg font-medium">{city.title}</button>
        ))}
    </div>
  )
}

export default TopButtons; 