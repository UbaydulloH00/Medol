import React from 'react'
import './index.css'

export default function button({title,classes}) {
    classes += ' button'
  return (
    <button className={classes}>
       {title}
    </button>
  )
}
