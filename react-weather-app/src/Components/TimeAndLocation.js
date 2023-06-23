import React from 'react'

function TimeAndLocation() {
  return (
    <div>
        <div className="flex flex-row items-center justify-center my-6">
            <p className="text-white text-xl font-extralight">
                Tuesday, 23 June 2023 | Local Time: 12.36 PM
            </p>
        </div>

        <div className="flex flex-row items-center justify-center my-6">
            <p className="text-white text-xl font-bold">Berlin, DE</p>
        </div>
    </div>
  )
}

export default TimeAndLocation