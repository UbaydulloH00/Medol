import React from 'react'
import './index.css'
import head1 from '../img/head-1.png'
import head2 from '../img/head-2.png'
import head3 from '../img/head-3.png'
import Button from '../button'

export default function HedarCard() {
    return (
        <div className='header-head-wrapper'>
            <div className="container">
                <div className="head-card-all">
                    <div className='head-card-item'>
                        <img src={head1} alt="nima uchun meni ishga olmaysiz" />
                        <h1>СЕРВИС ОБОРУДОВАНИЯ</h1>
                        <p>Компания предоставляет сервисное обслуживание по
                            всем предоставляемым продуктам. У наших инженеров
                            имеется опыт и сертификаты фирм производителей......
                        </p>
                        <Button  title="Подробнее"/>

                    </div>
                    <div className='head-card-item'>
                        <img src={head2} alt="nima uchun meni ishga olmaysiz" />
                        <h1>РЕГИСТРАЦИИ</h1>
                        <p>Обеспечение получения разрешительных документов,
                             регистрационного удостоверения 
                            на изделия медицинского назначения 
                            Подготовка объектов к проведению ....
                        </p>
                        <Button  title="Подробнее"/>

                    </div>
                    <div className='head-card-item'>
                        <img src={head3} alt="nima uchun meni ishga olmaysiz" />
                        <h1>УСЛУГИ ЛОГИСТИКИ</h1>
                        <p>Компания предоставляет сервисное обслуживание
                             по всем предоставляемым продуктам.
                             У наших инженеров имеется опыт и сертификаты
                              фирм производителей.....
                        </p>
                        <Button  title="Подробнее"/>

                    </div>
                </div>
            </div>
        </div>
    )
}
