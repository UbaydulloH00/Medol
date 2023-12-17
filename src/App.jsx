import Button from './componets/button'
import './App.css'
import HeaderHero from './componets/header-hero'
import Footer from './componets/footer'
import Card from './componets/card'
import Edg from './componets/img/endeavor-large.png'
import Edg2 from './componets/img/img-2.png'
import Edg3 from './componets/img/img-3.png'
import Edg4 from './componets/img/img-4.png'
import Edg5 from './componets/img/img5.png'
import Edg6 from './componets/img/img-6.png'
import HeaderCard from './componets/header-head'
import AboutCompany from './componets/About-company'
import Card2 from './componets/img/card2-1.png'
import Plogo1 from './componets/img/plogo-1.png'
import Plogo2 from './componets/img/plogo-2.png'
import Plogo3 from './componets/img/plogo-3.png'
import Plogo4 from './componets/img/plogo-4.png'
import Plogo5 from './componets/img/plogo-5.png'
import Plogo6 from './componets/img/plogo-6.png'
import Plogo7 from './componets/img/plogo-7.png'
import Plogo8 from './componets/img/plogo-8.png'

function App() {

  return (
    <>
      <div>
        <HeaderHero />
        <div className="container">
          <h1 className='header-hero-title'>ПРОДУКЦИЯ</h1>
          <div className="cardAll">
            <Card src={Edg} title="Эндоваскулярная хирургия" />
            <Card classes="small-card" src={Edg2} title="Лабораторная диагностика" />
            <Card classes="card-3" src={Edg3} title="Кардиохирургия" />
            <Card classes="card-4" src={Edg4} title="ДИАБЕТ" />
            <Card classes="card-5" src={Edg5} title="ЭНДОУРОЛОГИЯ" />
            <Card src={Edg6} title="АРИТМОЛОГИЯ" />
          </div>
          <h1 className='hero-title'>Перейти в каталог нашей продукции </h1>
          <h1 className='tarif'>УСЛУГИ</h1>
        </div>
        <HeaderCard/>
        <div className="container">
          <h1 className='about-com'>О КОМПАНИИ</h1>
          <AboutCompany/>
          <h1 className='news-title'  >НОВОСТИ</h1>
         <div className="newsAll">
         <div className="news">
             <img src={Card2} alt="" />
             <h3>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h3>
             <h4>26.07.2021</h4>
             <p>С 19 по 21 апреля в АО «РСНПМЦУ»
               (Республиканский Специализированный 
               Научно-Практический Медицинский Центр Урологии)
                при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) 
                и ИП ООО «Medical Online Services» был проведен мастер-класс в 
                исполнении...
                </p>
                <Button title="Подробнее"/>
          </div>
          <div className="news">
             <img src={Card2} alt="" />
             <h3>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h3>
             <h4>26.07.2021</h4>
             <p>С 19 по 21 апреля в АО «РСНПМЦУ»
               (Республиканский Специализированный 
               Научно-Практический Медицинский Центр Урологии)
                при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) 
                и ИП ООО «Medical Online Services» был проведен мастер-класс в 
                исполнении...
                </p>
                <Button title="Подробнее"/>
          </div>
          <div className="news">
             <img src={Card2} alt="" />
             <h3>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</h3>
             <h4>26.07.2021</h4>
             <p>С 19 по 21 апреля в АО «РСНПМЦУ»
               (Республиканский Специализированный 
               Научно-Практический Медицинский Центр Урологии)
                при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) 
                и ИП ООО «Medical Online Services» был проведен мастер-класс в 
                исполнении...
                </p>
                <Button title="Подробнее"/>
          </div>
         </div>
            <h1 className='partner-title'>ПАРТНЕРЫ</h1>
        </div>
         <div className="container">
         <div className='partner'>
                <div className='partner-item'>
                  <img src={Plogo1} alt="" />
                </div>
                <div className='partner-item'>
                <img src={Plogo2} alt="" />
                </div>
                <div className='partner-item'>
                <img src={Plogo3} alt="" />
                </div>
                <div className='partner-item'>
                <img src={Plogo4} alt="" />
                </div>
                <div className='partner-item'>
                <img src={Plogo5} alt="" />
                </div>
                <div className='partner-item'>
                <img src={Plogo6} alt="" />
                </div>
                <div className='partner-item'>
                <img src={Plogo7} alt="" />
                </div>
                <div className='partner-item'>
                <img src={Plogo8} alt="" />
                </div>
        </div>
         </div>
         <Footer/>
      </div>
    </>
  )
}

export default App
