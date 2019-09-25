import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'

import moment from 'moment'

import Grid from '../Grid'
import Button from '../Button'
import IconButton from '../IconButton'

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
  return moment(dayOne).format('DD-MM-YYYY') === moment(dayTwo).format('DD-MM-YYYY')
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
      return events.reduce((accumulator, currentValue) => {
        if (isSameDay(day, currentValue.start)) {
          accumulator.push(currentValue)
        }
        return accumulator
      }, [])
    } else {
      return []
    }
  }

  return (
    <div
      className={className}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>
      <div style={{ display: 'flex' }}>
        <IconButton
          onClick={() => {
            setDate(moment(date).subtract(1, 'year'))
          }}
          icon="first_page"/>
        <IconButton
          onClick={() => {
            setDate(moment(date).subtract(1, 'months'))
          }}
          icon="chevron_left"/>
        <div style={{ flexGrow: 1, textAlign: 'center' }}>{month} {year}</div>
        <IconButton
          onClick={() => {
            setDate(moment(date).add(1, 'months'))
          }}
          icon="chevron_right"/>
        <IconButton
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
                ...(today.format('DD-MM-YYYY') === moment(day).format('DD-MM-YYYY') ? {
                  background: 'rgba(0,0,0,0.5)'
                } : null),
                // Highlight selected day
                ...(moment(selectedDay).format('DD-MM-YYYY') === moment(day).format('DD-MM-YYYY') ? {
                  background: selectedColor || 'gold'
                } : null),
                // Highlight Apointments
                ...(eventsThisDay.length > 0 ? {
                  background: 'red'
                } : null)
              }}
              hoverStyle={{
                background: 'rgba(0,0,0,0.2)'
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
  className: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  events: PropTypes.string,
  onClick: PropTypes.func,
  selectedColor: PropTypes.string
}

export default Calendar
