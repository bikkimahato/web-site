import React from 'react'
import './index.css'
import './util.js'
const getYears = () => {
    let years = []
    const start = 2000
    let end = new Date().getFullYear()
    for (let i = start; i <= end; i++) {
        years[i] = i
    }
    return years
}
class Attendance extends React.Component {

    state = {
        employees: [
            {
                id: 1,
                name: "Bikki",
                days: []
            },
            {
                id: 2,
                name: "Anshuman",
                days: []
            },
            {
                id: 3,
                name: "Sushant",
                days: []
            },
            {
                id: 4,
                name: "Shalu",
                days: []
            },
            {
                id: 5,
                name: "Zohiab",
                days: []
            },
            {
                id: 6,
                name: "Nireesh",
                days: []
            }
        ],
        days: [],
        years: getYears(),
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        selectedYear: null,
        selectedMonth: null,
        tableDisplay: false
    }
    handleYearChange = (e) => {
        let { selectedYear } = this.state
        selectedYear = e.target.value

        this.setState({
            ...this.state,
            selectedYear
        })
    }

    getCurrentMonthDaysHandler = (selectedMonth) => {
        let day1;
        switch (selectedMonth) {
            case 'January':
            case 'March':
            case 'May':
            case 'July':
            case 'August':
            case 'October':
            case 'December':
                day1 = 31
                break;
            case 'April':
            case 'June':
            case 'September':
            case 'November':

                day1 = 30
                break;
            default:
                if ((this.state.selectedYear % 100 === 0) ? (this.state.selectedYear % 400 === 0) : (this.state.selectedYear % 4 === 0))
                    day1 = 29
                else
                    day1 = 28
        }
        return day1;
    }


    handleMonthChange = (e) => {

        let { selectedMonth, selectedYear,tableDisplay } = this.state
        selectedMonth = e.target.value

        tableDisplay = true;
        //import employees from  state
        const { employees } = this.state
        // find start date and end date
        let start = 1
        let end

        // s year is current year

        if ((parseInt(selectedYear) === new Date().getFullYear())) {
            //check for current month
            if (selectedMonth.toString().substr(0, 3) === new Date().toString().substr(4, 3)) {
                end = new Date().getDate()
            }
            //check for month is less than current month
            else if ((new Date(selectedMonth + 0).getMonth() < new Date().getMonth())) {
                end = this.getCurrentMonthDaysHandler(selectedMonth)
            }
            else {
                tableDisplay=false
            }
        }
        //check for any other year other than current year
        else if (selectedYear !== new Date().getFullYear()) {

            end = this.getCurrentMonthDaysHandler(selectedMonth)

        }
        else {
            tableDisplay = false
        }

        let day1 = []
        for (let i = start; i <= end; i++) {
            day1[i] = i
        }
        // create array of object it will contain day,date,status

        //loop through employee assigne days to days
        let x;
        for (let i of employees) {
            i.days = []
            for (let j = start; j <= end; j++) {
                let currDay = {
                    day: '',
                    date: '',
                    status: '',
                    colorProperty: {
                        backColor: 'white',
                        textColor: 'white'
                    }

                }
                x = new Date(selectedMonth + j + ',' + selectedYear)
                currDay.day = x.toString().substr(0, 3)
                currDay.date = x.toString().substr(8, 2)
                currDay.status = ''
                i.days.push(currDay);
            }

        }

        // set state days and employees
        this.setState({
            ...this.state,
            employees,
            selectedMonth,
            days: day1,
            tableDisplay
        })
    }

    //overloaded function to simult for color for both input from checkbox and individual input
    colorChangeHandler = (index, empValue = null) => {
        const { employees = [] } = this.state
        const { days = [] } = employees[index]

        employees[index].days.colorProperty = days.map(el => {
            let x = el.status
            switch (x) {
                case 'P':
                case 'p':

                    el.colorProperty = {
                        backColor: 'darkGreen',
                        textColor: 'white'
                    }
                    break;
                case 'H':
                case 'h':

                    el.colorProperty = {
                        backColor: 'blue',
                        textColor: 'white'
                    }
                    break;

                case 'L':
                case 'l':

                    el.colorProperty = {
                        backColor: 'yellow',
                        textColor: 'black'
                    }
                    break;

                case 'A':
                case 'a':

                    el.colorProperty = {
                        backColor: 'red',
                        textColor: 'white'
                    }
                    break;
                default:
                    el.colorProperty = {
                        backColor: 'white',
                        textColor: 'black'
                    }
            }
        })

        this.setState({
            ...this.state,
            employees
        })
    }

    handleCheckBox = (e, index) => {
        const { employees = [] } = this.state

        const { days = [] } = employees[index]

        employees[index].days = days.map(el => {
            if (el.day == 'Sun' || el.day == 'Sat') {
                el.status = 'H'
                this.colorChangeHandler(index);
            } else {
                el.status = 'P'
                this.colorChangeHandler(index);
            }
            return el;
        })

        this.setState({
            ...this.state,
            employees
        })

    }

    handleDayStatus = (e, employeeIndex, dayIndex) => {

        let { employees = [] } = this.state;
        let { days = [] } = employees[employeeIndex]

        days[dayIndex].status = e.target.value
        this.colorChangeHandler(employeeIndex, days[dayIndex].status)

        this.setState({
            ...this.state,
            employees
        })
    }

    render() {
        const { handleMonthChange, handleCheckBox, handleDayStatus, handleYearChange } = this
        const { employees, days, months, selectedMonth, years, selectedYear,tableDisplay } = this.state

        console.log(employees)

        return (
            <div>Attendance
                <div className="year-month-display">
                    <div>Year</div>
                    <select name="year" onChange={handleYearChange} value={selectedYear}>
                        {years.map(el =>
                            <option value={el}>{el}</option>
                        )}
                    </select>
                    <div>Month</div>
                    <select name="month" onChange={handleMonthChange} value={selectedMonth}>
                        {months.map(el =>
                            <option value={el}>{el}</option>
                        )}
                    </select>
                </div>
                {tableDisplay ? 
                <div>
                    <table id='t01'>
                        <tr>
                            <th>Name</th>
                            <th>Checkbox</th>
                            <th>Days</th>

                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td className="display-date">
                                {days.map((data) => (
                                    <p style={{ margin: '0 3.2px' }}>
                                        {data}
                                    </p>
                                ))}
                            </td>
                        </tr>

                        {employees.map((i, empIndex) => {
                            return (
                                <tr>
                                    <td>{i.name}</td>
                                    <td><input type="checkbox" name="status" onChange={e => handleCheckBox(e, empIndex)} /></td>
                                    <td>{<div>
                                        {i.days.map(((el, dayIndex) =>
                                            <input className='input-display'
                                                style={{ backgroundColor: el.colorProperty.backColor, color: el.colorProperty.textColor }}
                                                key={el}
                                                value={el.status}
                                                onChange={e => handleDayStatus(e, empIndex, dayIndex)}
                                                size='1'>

                                            </input>))

                                        }</div>}</td>
                                </tr>
                            )
                        })}

                    </table>

                </div>
                :false}
            </div>
        )
    }
}

export default Attendance

