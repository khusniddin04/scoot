import React from 'react'
import "../styles/employees.css"
import EmployeesCard from './EmployeesCard'
function Employees() {
  return (
    <section className='employees'>
        <div className="container">
            <EmployeesCard title="General Manager" text="Jakarta, Indonesia"/>
            <EmployeesCard title="UI/UX Designer" text="Yokohama, Japan"/>
            <EmployeesCard title="Blog Content Copywriter" text="New York, United States"/>
            <EmployeesCard title="Graphic Designer" text="New York, United States"/>
            <EmployeesCard title="Fleet Supervisor" text="Jakarta, Indonesia"/>
            <EmployeesCard title="UX Analyst" text="London, United Kingdom"/>
        </div>
    </section>
  )
}

export default Employees