import React from 'react'
function EmployeesCard({title, text}) {
  return (
    <div className='employees__card'>
        <div className="employees__text">
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
        <div className="employees__btn">
            <button>Apply</button>
        </div>
    </div>
  )
}

export default EmployeesCard