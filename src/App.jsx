import './App.css'
import logo from './assets/logo.png'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import one from './assets/01.png'
import two from './assets/02.png'
import three from './assets/03.png'
import four from './assets/04.png'
import five from './assets/05.png'
import six from './assets/06.png'
import www from './assets/3.png'
import foto from './assets/foto.png'
import vector1 from './assets/Vector (3).png'
import vector2 from './assets/Vector (4).png'
import Group774 from './assets/Group774.png'
import Group719 from './assets/Group719.png'
import Group1049 from './assets/Group1049.png'
import Group1010 from './assets/Group1010.png'
import video from './assets/video.png'
import v1 from './assets/v1.png'
import v2 from './assets/v2.png'
import v3 from './assets/v3.png'
import pacan from './assets/pacan.png'
import a1 from './assets/a1.png'
import a2 from './assets/a2.png'
import a3 from './assets/a3.png'
import a4 from './assets/a4.png'
import q1 from './assets/q1.png'
import q2 from './assets/q2.png'
import q3 from './assets/q3.png'
import teleg from './assets/teleg.png'
import wats from './assets/wats.png'


import { Article1 } from './components/article1/article1'
import { Button2 } from './components/button2/button2'
import { Article2 } from './components/article2/article2'
export default function App(){
  return <>
<header>
   <nav>
   <img src={logo} alt="" />
  <ul>
    <li>Кто мы?</li>
    <li>Услуги</li>
    <li>Акселератор</li>
    <li>Новости</li>
  </ul>
  <button>Войти</button>
 </nav>
 <div className='aside_1'>
<h1>Запустите 
технологический IT-бизнес 
на международных рынках</h1>
<p>Открыт набор заявок на акселератор</p>

<button>
  Подать заявку
</button>
 </div>
</header>
<section className='section_1'>
<aside className='aside_2'>
<h1>Аналитические исследования</h1>
<p>Одним из наших ключевых направлений является анализ технологических трендов на международных рынках.
Мы проводим анализ на основе публичных исследований McKinsey, BCG, PWC, Deloitte, Accenture, BCG, EY,  Crunchbase, Dealroom, F6S, PitchBook а также агрегируем и анализируем данные из открытых международных источников патенты, медиа, научные публикации
</p>
<button>Узнать подробнее</button>
</aside>
<img className='img1' src={img1} alt="" />
</section>
<section className='section_1'>
  <img className='img1' src={img2} alt="" />
<aside className='aside_2'>
<h1>Аналитические исследования</h1>
<p>Одним из наших ключевых направлений является анализ технологических трендов на международных рынках.
Мы проводим анализ на основе публичных исследований McKinsey, BCG, PWC, Deloitte, Accenture, BCG, EY,  Crunchbase, Dealroom, F6S, PitchBook а также агрегируем и анализируем данные из открытых международных источников патенты, медиа, научные публикации
</p>
<button>Узнать подробнее</button>
</aside>

</section>

<section className='section_2'>
<Article1>
  <img src={one} alt="" />
  <h1>IT проекты на стадии идеи</h1>
<p>Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт</p>
</Article1>



<Article1>
  <img src={two} alt="" />
  <h1>Инновационный бизнес</h1>
<p>Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт</p>
</Article1>


<Article1>
  <img src={three} alt="" />
  <h1>Корпорации</h1>
<p>Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт</p>
</Article1>

</section>

<section className='section_3'>
<h1>Научитесь исследовать иностранные рынки 
и откройте новые возможности для своего бизнеса</h1>
<p>Наша команда поможет вам изучить рынки Ближнего Востока, Азии, Латинской Америки и Африки</p>
<Button2/>
</section>
<section className='section_4'>
<h1>С какими рынками мы работаем?</h1>
<div className='div_4'>
  <aside>
    <h1>Чем интересен
Рынок MENA:</h1>
<p>ОАЭ, Саудовская Аравия, 
Израиль, Оман, Бахрейн, Катар, 
Тунис, Йемен, Египет, Алжир</p>
<Button2/>
  </aside>
  <img src={Group774} alt="" />
</div>

</section>
<section className='section_5'>
<h1>Об акселераторе IT бизнеса</h1>
<p>Программа акселератора расчитана на 8 недель интенсивного онлайн  курса с вебинарами приглашенных экспертов по международным рынкам, разборами ваших идей и проектов </p>
</section>
<section className='section_6'>

  <Article1>
    <img src={www} alt="" />
    <p>Месяца обучения</p>

  </Article1>
   <Article1>
    <img src={vector1} alt="" />
    <p>Приглашенные эксперты</p>
    
  </Article1>
   <Article1>
    <img src={vector2} alt="" />
    <p>Персональный менеджер</p>
    
  </Article1>
</section>
<img className='video' src={video} alt="" />
 <section className="accelerator-section">
      <h2 className="section-title">Программа акселератора</h2>
      <div className="accordion">
        <div className="accordion-item open">
          <div className="accordion-header open">
            <strong>Модуль 1</strong> Тенденции и тренды современного мира
          </div>
          <div className="accordion-body">
            <ul>
              <li>Тема 1. Куда движутся IT тренды? Аналитика Gartner, разбор отчетов консалтинговых компаний</li>
              <li>Тема 2. Рынки Ближнего Востока, Азии, Латинской Америки</li>
              <li>Что такое внутренние и внешние инновации? Как искать инновационные идеи?</li>
              <li>9 видео роликов, вместе с приглашенным экспертом</li>
            </ul>
          </div>
        </div>

        {[
          "Модуль 2 Стартап подход к созданию международного IT продукта",
          "Модуль 3 Бизнес моделирование и поиск Product Market Fit",
          "Модуль 4 Определение рынка, поиск и исследование Целевой аудитории",
          "Модуль 5 Что такое MVP и почему это важно",
          "Модуль 6 Unit экономика и финансовое моделирование",
          "Модуль 7 Что такое дорожная карта продукта?",
          "Модуль 8 Документы для международных инвесторов",
          "Модуль 9 Открытие юридического лица. Возможности для стартапов",
          "Демо день"
        ].map((text, idx) => (
          <div className="accordion-item" key={idx}>
            <div className="accordion-header">{text}</div>
          </div>

        ))}
      </div>
      <Button2></Button2>

    </section>

    <section className='section_7'>

      <aside>
      
        <h1>Попадите на радары инвесторов и партнеров</h1>
    
     <p>В результате прохождения обучения мы создадим профили вашей компании на всех международных скаутинговых площадках</p>
      <button>Записаться в акселератор</button>
      </aside>
      <img src={Group719} alt="" />
    </section>

    <section className='section_8'>
      <h1>Что вы получите в результате?</h1>

      <div className='div_8'>
        <Article1>
<img src={one} alt="" />
<h1>Документы по продукту</h1>
<p>Бизнес план, отчет по анализу рынка, маркетинговый план, unit экономика, список гипотез, проект MVP</p>

        </Article1>

         <Article1>
<img src={two} alt="" />
<h1>Обратная связь от рынка</h1>
<p>Бизнес план, отчет по анализу рынка, маркетинговый план, unit экономика, список гипотез, проект MVP</p>

        </Article1>
         <Article1>
<img src={three} alt="" />
<h1>Продвижение продукта</h1>
<p>Бизнес план, отчет по анализу рынка, маркетинговый план, unit экономика, список гипотез, проект MVP</p>

        </Article1>
      </div>





        <div className='div_8'>
        <Article1>
<img src={four} alt="" />
<h1>Подписка на отчеты</h1>
<p>Бизнес план, отчет по анализу рынка, маркетинговый план, unit экономика, список гипотез, проект MVP</p>

        </Article1>

         <Article1>
<img src={five} alt="" />
<h1>Подписка на отчеты</h1>
<p>Бизнес план, отчет по анализу рынка, маркетинговый план, unit экономика, список гипотез, проект MVP</p>

        </Article1>
         <Article1>
<img src={six} alt="" />
<h1>Подписка на отчеты</h1>
<p>Бизнес план, отчет по анализу рынка, маркетинговый план, unit экономика, список гипотез, проект MVP</p>
        </Article1>
      </div>
    </section>
    <section className='section_9'>
      <h1>Стоимость</h1>
      <div className='div_9'>
<Article2>
<img src={v1} alt="" />
<h1>Анализ международных 
рынков при Готовность </h1>
<h1>Что входит в отчет?</h1>
<ul>
  <li>Анализ конкурентов</li>
  <li>Анализ инвесторов</li>
  <li>Размеры рынка (TAM,SAM,SOM)</li>
  <li>Анализ СМИ</li>
   <li>Анализ запрос в сети интернет</li>
   
</ul>
<div>
   <h3>Готовность</h3>
   <p>7 раб. дней</p>
   </div>
    <div>
   <h3>Язык</h3>
   <p>рус. / англ.</p>

   </div>
    <div>
   <h3>Стоимость</h3>
   <p className='price'>1000p</p>
   
   </div>
   <button>Оставить заявку</button>

</Article2>
<Article2>
<img src={v2} alt="" />
<h1>Упаковка стартапа 
под локальные рынки </h1>
<h1>Что входит в услугу?</h1>
<ul>
  <li>Анализ конкурентов</li>
  <li>Анализ инвесторов</li>
  <li>Размеры рынка (TAM,SAM,SOM)</li>
  <li>Анализ СМИ</li>
   <li>Анализ запрос в сети интернет</li>
   
</ul>
<div>
   <h3>Готовность</h3>
   <p>7 раб. дней</p>
   </div>
    <div>
   <h3>Язык</h3>
   <p>рус. / англ.</p>

   </div>
    <div>
   <h3>Стоимость</h3>
   <p className='price'>1000p</p>
   
   </div>
   <button>Оставить заявку</button>

</Article2>



<Article2>
<img src={v3} alt="" />
<h1>Акселератор 
вашего бизнеса при снабжэнии инефикация </h1>
<h1>Что входит в акселератор?</h1>
<ul>
  <li>Анализ конкурентов</li>
  <li>Анализ инвесторов</li>
  <li>Размеры рынка (TAM,SAM,SOM)</li>
  <li>Анализ СМИ</li>
   <li>Анализ запрос в сети интернет</li>
   
</ul>
<div>
   <h3>Готовность</h3>
   <p>7 раб. дней</p>
   </div>
    <div>
   <h3>Язык</h3>
   <p>рус. / англ.</p>

   </div>
    <div>
   <h3>Стоимость</h3>
   <p className='price'>1000p</p>
   
   </div>
   <button>Оставить заявку</button>

</Article2>

      </div>
    </section>
  <section className='section_1'>
  <img className='img1' src={foto} alt="" />
<aside className='aside_2'>

<p>Одним из наших ключевых направлений является анализ технологических трендов на международных рынках.
Мы проводим анализ на основе публичных исследований McKinsey, BCG, PWC, Deloitte, Accenture, BCG, EY,  Crunchbase, Dealroom, F6S, PitchBook а также агрегируем и анализируем данные из открытых международных источников патенты, медиа, научные публикации
</p>

</aside>

</section>
 <section className='section_1'>
  <img className='img1' src={pacan} alt="" />
<aside className='aside_2'>

<p>Одним из наших ключевых направлений является анализ технологических трендов на международных рынках.
Мы проводим анализ на основе публичных исследований McKinsey, BCG, PWC, Deloitte, Accenture, BCG, EY,  Crunchbase, Dealroom, F6S, PitchBook а также агрегируем и анализируем данные из открытых международных источников патенты, медиа, научные публикации
</p>

</aside>

</section>
<img className='fff' src={Group1049} alt="" />
<section className='section_10'>
  <h1>Эксперты и трекеры программы</h1>
<div className='div_10'>

  <Article1>
  <img src={a1} alt="" />
  <h1>Юрий Ким</h1>
  <p>Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
</Article1>

<Article1>
  <img src={a2} alt="" />
  <h1>Эшли Абрамс</h1>
  <p>Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
</Article1>

<Article1>  
  <img src={a3} alt="" />
  <h1>Фатими Юсуф</h1>
  <p>Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
</Article1>
</div>

</section>
<img className='patner' src={Group1010} alt="" />

<section className='section_3'>
<h1>Научитесь исследовать иностранные рынки 
и откройте новые возможности для своего бизнеса</h1>
{/* <p>Наша команда поможет вам изучить рынки Ближнего Востока, Азии, Латинской Америки и Африки</p> */}
<Button2/>
</section>


<section className='section_11'>

  <article className='article3'>
    <img className='q' src={q1} alt="" />
    <h1>Новый отчет по MENA</h1>
    <p>Аналитический отчет по рынкам 
Ближнего Востока (инвесторы, 
объем раундов, ТОП сферы)</p>
  </article>
   <article className='article3'>
    <img className='q' src={q2} alt="" />
    <h1>Новый отчет по MENA</h1>
    <p>Аналитический отчет по рынкам 
Ближнего Востока (инвесторы, 
объем раундов, ТОП сферы)</p>
  </article>
   <article className='article3'>
    <img className='q' src={q3} alt="" />
    <h1>Новый отчет по MENA</h1>
    <p>Аналитический отчет по рынкам 
Ближнего Востока (инвесторы, 
объем раундов, ТОП сферы)</p>
  </article>
</section>

<section className="contact-section">
      <div className="contact-container">
        <div className="contact-text">
          <h2>Остались вопросы?</h2>
          <p>Оставьте заявку и наша команда свяжется с вами</p>
          <p className="contact-or">Или напишите нам:</p>
          <div className="contact-icons">
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="contact-btn tg">
              <img src={teleg} alt="Telegram" />
              Telegram
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="contact-btn wa">
              <img src={wats} alt="WhatsApp" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="contact-form">
          <input type="text" placeholder="Имя" />
          <input type="email" placeholder="Почта" />
          <div className="contact-phone">
            <select>
              <option value="+971">🇦🇪 +971</option>
              <option value="+7">🇷🇺 +7</option>
              <option value="+998">🇺🇿 +998</option>
            </select>
            <input type="tel" placeholder="Номер телефона" />
          </div>
          <button type="submit">Оставить заявку</button>
        </div>
      </div>
    </section>
    <footer>

      <img src={logo} alt="" />
      <ul>
        <li>Кто мы?</li>
        <li>Услуги</li>
        <li>Акселератор</li>
        <li>Новости</li>
      </ul>

      <p>Dubai, Single Business Tower 1503, Business Bay
</p>
    </footer>
  </>
}