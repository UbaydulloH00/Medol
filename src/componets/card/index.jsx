import React from 'react'
import Button from '../button'

import './index.css'

export default function index({ src, title,classes }) {
    return (
        <div className='card-wrapper'>
           <div className={classes}>
           <img src={src} alt="" />
            <h4>
               {title}
            </h4>
           </div>
          <Button title="Посмотреть все" />
        </div>
    )
}
