import React from 'react'
import './index.css'
import Button from '../button'
import Logo from '../img/logo.svg'


export default function index() {
    return (
        <div className='about-wrapper'>
            <div className='about-item'>
                <div className='item-1'>
                    <div className='item-2'>
                    <img src={Logo} alt="" />
                    </div>
                </div>
            </div>
            <div className='about-text'>
                <p>
                    Группа компаний MEDOL создавалась <br />
                     высококвалифицированными
                    специалистами в сфере медицины, <br /> инженерии и экономики, за плечами
                    которых значительный опыт <br /> на рынке высоких медицинских технологий,
                    которая имеет свои <br /> представительства в разных уголках Земли. В 2011
                    году MEDOL <br /> зарегистрировал в Узбекистане ИП ООО “Medical Online Services". <br />
                    Цель компании построить прозрачный долгосрочный бизнес, <br /> принести пользу
                    обществу путем развития и внедрения передовых <br /> технологий в систему
                    здравоохранения Республики Узбекистан.
                </p>
                <Button title="Узнать больше"/>
            </div>
        </div>
    )
}
