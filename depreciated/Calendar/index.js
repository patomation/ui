import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'

import moment from 'moment'

import Grid from '../Grid'
import Button from '../Button'
import IconButton from '../IconButton'

/**
* A calendar ui component with selectable days
*/

const daysInMonth = (date) => {
  // Get total dates
  let totalDays = moment(date).daysInMonth()
  // Store date objects in array
  const days = []
  // Loop over total days
  while (totalDays) {
    days.push(moment(date).date(totalDays))
    totalDays--
  }
  // Return array of date objects but reverse the order to start withday one
  return days.reverse()
}

const firstDayOfMonth = (date) => {
  return moment(date).startOf('month').format('d')
}

const isSameDay = (dayOne, dayTwo) => {
  const dayOneDate = moment(dayOne).format('YYYY-MM-DD')
  const dayTwoDate = moment(dayTwo).format('YYYY-MM-DD')
  const result = dayOneDate === dayTwoDate

  return result
}

const Calendar = ({
  className, background, color, style,
  events, onClick, selectedColor
}) => {
  const [date, setDate] = useState(moment())
  const today = moment()
  const month = moment(date).format('MMMM')
  const year = moment(date).format('YYYY')

  const [selectedDay, setSelectedDay] = useState()

  const days = [
    // Add blank days
    ...new Array(Number(firstDayOfMonth(date))).fill(''),
    // The rest of the calendar days
    ...daysInMonth(date)
    // Todo add blank days for the end of the month
  ]

  const getEvents = (day) => {
    if (events) {
      return events.reduce((acc, item) => {
        if (isSameDay(day, item.start)) {
          acc.push(item)
        }
        return acc
      }, [])
    } else {
      return []
    }
  }

  return (
    <div
      className={concat('calendar', className)}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>
      <div style={{ display: 'flex' }}>
        <IconButton
          className='calendar__prevyear'
          onClick={() => {
            setDate(moment(date).subtract(1, 'year'))
          }}
          icon="first_page"/>
        <IconButton
          className='calendar__prevmonth'
          onClick={() => {
            setDate(moment(date).subtract(1, 'months'))
          }}
          icon="chevron_left"/>
        <div className='calendar__title' style={{ flexGrow: 1, textAlign: 'center' }}>{month} {year}</div>
        <IconButton
          className='calendar__nextmonth'
          onClick={() => {
            setDate(moment(date).add(1, 'months'))
          }}
          icon="chevron_right"/>
        <IconButton
          className='calendar__nextyear'
          onClick={() => {
            setDate(moment(date).add(1, 'year'))
          }}
          icon="last_page"/>
      </div>

      <Grid col={7}>
        {moment.weekdaysShort().map((day, index) =>
          <div key={`week-day_${index}`} style={{ textAlign: 'center' }}>{day}</div>
        )}
      </Grid>

      <Grid col={7}>
        {days.map((day, index) => {
          const eventsThisDay = getEvents(day)

          return (
            <Button
              className={`day_${moment(day).format('YYYY-MM-DD')}`}
              key={`day_${index}`}
              onClick={() => {
                // Selected Day must be after today
                if (today.diff(day) < 0) {
                  setSelectedDay(day)
                  if (onClick) {
                    onClick({
                      day: day,
                      events: eventsThisDay
                    })
                  }
                }
              }}
              style={{
                color: '#000000',
                background: 'none',
                paddingLeft: 0,
                paddingRight: 0,
                // Highlight today
                ...(today.format('YYYY-MM-DD') === moment(day).format('YYYY-MM-DD') ? {
                  background: 'rgba(0,0,0,0.5)'
                } : null),
                // Highlight selected day
                ...(selectedDay && moment(selectedDay).format('YYYY-MM-DD') === moment(day).format('YYYY-MM-DD') ? {
                  background: selectedColor || 'gold'
                } : null),
                // Highlight Apointments
                ...(eventsThisDay.length > 0 ? {
                  background: 'red'
                } : null)
              }}
              hoverStyle={{
              }}>

              {day ? moment(day).format('D') : ''}

            </Button>
          )
        })}
      </Grid>

    </div>
  )
}

Calendar.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
  className: PropTypes.string,
  /**
  * The background color of component
  **/
  background: PropTypes.string,
  /**
  * The text color of component
  **/
  color: PropTypes.string,
  /**
  * Set any styles of the top level element of the component
  **/
  style: PropTypes.object,
  events: PropTypes.array,
  onClick: PropTypes.func,
  selectedColor: PropTypes.string
}

export default Calendar
