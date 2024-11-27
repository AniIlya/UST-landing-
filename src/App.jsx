
import "./App.css"
import logo from "./assets/logo.png"
import us from "./assets/US.png"
import search from "./assets/icon.png"
import img1 from "./assets/img1.png"
import Button from "./companents/Button"
import icon1 from "./assets/icon1.png"
import icon2 from "./assets/icon2.png"
import icon3 from "./assets/icon3.png"
import icon4 from "./assets/icon4.png"
import icon5 from "./assets/icon5.png"
import icon6 from "./assets/icon6.png"
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.png"
import img4 from "./assets/img4.png"
import img5 from "./assets/img5.png"
import img6 from "./assets/Img6.png"
import icon7 from "./assets/icon7.png"
import icon8 from "./assets/icon8.png"
import icon9 from "./assets/icon9.png"
import icon10 from "./assets/icon10.png"
import group1 from "./assets/Group.png"
import group2 from "./assets/Group1.png"
import group3 from "./assets/Group3.png"
import group4 from "./assets/Group4.png"
import group5 from "./assets/Group5.png"
import social from "./assets/social.png"
import MenuIcon from '@mui/icons-material/Menu';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
function App() {
  return (
    <div><div className="bg">
<header className="bg-[#00000033] px-[7%]  flex justify-between">
  <div className="">
    <img className="w-[80%] m-auto" src={logo} alt="" />
  </div>
  <nav className=" lg:flex gap-[2%] hidden">
    <ul className="flex  items-center">
      <li className="border-[#DDDDE2] border-solid border-l text-[#DDDDE2] px-2">Главная</li>
      <li className="border-[#DDDDE2] border-solid border-l text-[#DDDDE2] px-2">Команда</li>
      <li className="border-[#DDDDE2] border-solid border-l text-[#DDDDE2] px-2">Услуги</li>
      <li className="border-[#DDDDE2] border-solid border-l text-[#DDDDE2] px-2">карьера</li>
      <li className="border-[#DDDDE2] border-solid border-l text-[#DDDDE2] px-2">Портфолио</li>
      
    </ul>
    <div className="self-center"><img className="w-full" src={us} alt="" /></div>
    <div className="self-center"><img className="w-full" src={search} alt="" /></div>
    
  </nav>
  <div className="block lg:hidden self-center"><MenuOutlinedIcon sx={{color:`white`}}/></div>
  
  
</header>
<section>
  <div className="lg:w-[50%] md:w-[70%] w-[85%]  pl-[7%] pt-[10%]">
    <h1 className="lg:text-4xl md:text-3xl text-xl font-bold text-[#EEEFF1] lg:pb-0 pb-[10%]">Студия разработки программного обеспечения <span className="text-[#1E74EC]">с продуктовым мышлением</span> </h1>
    <p className="lg:w-[75%] hidden lg:block text-[#DDDDE2] py-4">Мы создаем кроссплатформенные мобильные приложения и веб-платформы и находим для них лучшие решения.</p>
  </div>
  <div className="grid lg:grid-cols-4 grid-cols-2 gap-[5%] py-[8%] lg:bg-[#03115f00] bg-[#03115F] px-[2%] md:px-0">
    <div className="text-center">
      <h1 className="text-5xl text-[#EEEFF1] font-bold">4+</h1>
      <p className="text-md text-[#EEEFF1] font-normal">Года опыта</p>
    </div>
    <div className="text-center">
      <h1 className="text-5xl text-[#EEEFF1] font-bold">30+</h1>
      <p className="text-md text-[#EEEFF1] font-normal">Завершенных проектов</p>
    </div>
    <div className="text-center">
      <h1 className="text-5xl text-[#EEEFF1] font-bold">4+</h1>
      <p className="text-md text-[#EEEFF1] font-normal">Года опыта</p>
    </div>
    <div className="text-center">
      <h1 className="text-5xl text-[#EEEFF1] font-bold">4+</h1>
      <p className="text-md text-[#EEEFF1] font-normal">Года опыта</p>
    </div>
  </div>
  </section>
  <main>
    <section className="pt-[10%]">
      <p className="text-[#35417F] py-3 pl-[7%]">О нас</p>
      <div className="grid lg:grid-cols-[60%,40%] items-center px-[7%] gap-[5%]">
        <div className="">
          <img className="w-full" src={img1} alt="" />
        </div>
        <div className="w-[95%]">
          <h1 className="text-4xl text-[#03115F] font-bold">Почему UST?</h1>
          <p className="text-[#535670] py-1 text-sm">К услугам наших клиентов разработка программного обеспечения на заказ, проектирование пользовательских интерфейсов, создание сайтов (в том числе на основе индивидуальной CMS) и их поддержка.</p> 
          <p className="text-[#535670] py-1 text-sm">Мы также предлагаем услугу IT-консалтинга — налаживание работы любых информационно-аналитических систем и онлайн-решений компании для большей эффективности бизнес-процессов.</p> 
          <p className="text-[#535670] py-1 text-sm">Сегодня компания «Union Smart Technology» имеет представительства с умелыми project‑менеджерами в РФ и Словакии. </p>
          <p className="text-[#535670] py-1 text-sm">Такая география позволяет привлекать наиболее ответственных и квалифицированных программистов и живо реагировать на потребности заказчиков со всего света, сохраняя комфортный уровень цен.
</p>
<div className="flex gap-[5%]">
  <Button hasBorderGreen={true} itemBtn='Вакансии'/>
  <Button hasbgGreen={true} itemBtn='Читать далее'/>
</div>
        </div>
      </div>
    </section>
    <section className="p-[7%]">
      <div className="lg:w-[55%] w-[88%]">
    <p className="text-[#35417F] lg:py-2 py-8">Наши предложения</p>
    <h1 className="text-4xl text-[#03115F] font-bold py-2">Разработка полного цикла</h1>
    <p className="text-[#535670] py-1 text-sm w-[80%] ">Мы можем разработать для вас любое индивидуальное решение. 
    Наша компания обладает широкими возможностями для успешного создания технически-сложных систем.</p>
 </div>
 <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-[3%] lg:py-[6%] md:pb-[20%] pb-[45%] pt-[10%]">
  <div className="lg:text-start text-center">
<img className="lg:m-0 m-auto" src={icon1} alt="" />

<p className="text-[#1E74EC]">Программируем</p>
<p className="text-[#535670] py-1 text-sm  ">Создаём расширяемую архитектуру, пишем чистый и стабильный код. Интегрируемся с технологиями заказчика.</p>
  </div>
  <div className="lg:text-start text-center">
<img className="lg:m-0 m-auto" src={icon2} alt="" />
<p className="text-[#1E74EC]">Программируем</p>
<p className="text-[#535670] py-1 text-sm  ">Создаём расширяемую архитектуру, пишем чистый и стабильный код. Интегрируемся с технологиями заказчика.</p>
  </div>
  <div className="lg:text-start text-center">
<img className="lg:m-0 m-auto" src={icon5} alt="" />
<p className="text-[#1E74EC]">Программируем</p>
<p className="text-[#535670] py-1 text-sm  ">Создаём расширяемую архитектуру, пишем чистый и стабильный код. Интегрируемся с технологиями заказчика.</p>
  </div>
  <div className="lg:text-start text-center">
<img className="lg:m-0 m-auto" src={icon3} alt="" />
<p className="text-[#1E74EC]">Программируем</p>
<p className="text-[#535670] py-1 text-sm  ">Создаём расширяемую архитектуру, пишем чистый и стабильный код. Интегрируемся с технологиями заказчика.</p>
  </div>
  <div className="lg:text-start text-center">
<img className="lg:m-0 m-auto" src={icon4} alt="" />
<p className="text-[#1E74EC]">Программируем</p>
<p className="text-[#535670] py-1 text-sm  ">Создаём расширяемую архитектуру, пишем чистый и стабильный код. Интегрируемся с технологиями заказчика.</p>
  </div>
  <div className="lg:text-start text-center">
<img className="lg:m-0 m-auto" src={icon6} alt="" />
<p className="text-[#1E74EC]">Программируем</p>
<p className="text-[#535670] py-1 text-sm  ">Создаём расширяемую архитектуру, пишем чистый и стабильный код. Интегрируемся с технологиями заказчика.</p>
  </div>
  
  </div>  
  </section>
  <section className=" ">
  <div className="  m-auto bg-[#E6E8EF] h-[70%] py-[5%] lg:px-[23%] px-[10%] pb-[10%]">
    <p className=" text-center text-[#35417F] py-2">Портфолио</p>
    <h1 className="text-center text-4xl text-[#03115F] font-bold py-2">Завершенные проекты</h1>
    <p className=" text-center text-[#535670] py-1 text-sm ">Мы специализируемся на предоставлении программного обеспечения высшего 
    качества и предоставлении высококвалифицированных команд с опытом в области
     разработки блокчейнов, аналитики больших данных и AI/ML, а также услуг по разработке 
     программного обеспечения на заказ.</p>
 </div>
 <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-[2%] px-[7%] mt-[-5%]">
  <div className="">
    <div className="">
      <img src={img2} alt="" className="w-full" />
      </div>
    <p className="text-[#35417F] py-1">Мобильный контроль</p>
      <p className="text-[#535670]  text-sm ">Сервис для работы с клиентами и партнерами</p>
  </div>
  <div className="">
    <div className="">
      <img src={img3} alt="" className="w-full" />
      </div>
    <p className="text-[#35417F] py-1">Мобильный контроль</p>
      <p className="text-[#535670]  text-sm ">Сервис для работы с клиентами и партнерами</p>
  </div>
  <div className="">
    <div className="">
      <img src={img4} alt="" className="w-full" />
      </div>
    <p className="text-[#35417F] py-1">Мобильный контроль</p>
      <p className="text-[#535670]  text-sm ">Сервис для работы с клиентами и партнерами</p>
  </div>
  <div className="">
    <div className="">
      <img src={img5} alt="" className="w-full" />
      </div>
    <p className="text-[#35417F] py-1">Мобильный контроль</p>
      <p className="text-[#535670]  text-sm ">Сервис для работы с клиентами и партнерами</p>
  </div>
 </div>
 <div className="grid lg:grid-cols-2 py-[3%] gap-[2%] px-[7%]">
  <div className="">
  <div className="">
      <img src={img6} alt="" className="w-full" />
      </div>
    <p className="text-[#35417F] py-1">Prorab-x</p>
      <p className="text-[#535670]  text-sm ">Мобильное приложение для строителей</p>
  </div>
  <div className="">
  <div className="">
      <img src={img6} alt="" className="w-full" />
      </div>
    <p className="text-[#35417F] py-1">Prorab-x</p>
      <p className="text-[#535670]  text-sm ">Мобильное приложение для строителей</p>
  </div>

 </div>
 <div className="text-center ">
  <div className="flex justify-between lg:w-[25%] md:w-[45%] w-[80%] m-auto">
    <Button hasBorderGreen={true} itemBtn='Портфолио' />
    <Button hasbgGreen={true} itemBtn='Заказать проект'/>
  </div>
 </div>

  </section>
  <section className="p-[7%]">
  <div className="lg:w-[55%] w-[85%]">
    <p className="text-[#35417F] py-2">Наши</p>
    <h1 className="text-4xl text-[#03115F] font-bold py-2">Преимущества</h1>
    <p className="text-[#535670] py-1 text-sm  ">Основная ценность нашей компании - создание качественного продукта и удовлетворение потребностей клиента. Поэтому перед началом разработки мы проводим маркетинговые исследования и помогаем клиенту определить стратегию развития продукта.
   </p>
</div>
<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-[2%] py-[5%]">
  <div className="">
    <div className="">
      <img src={icon7} alt="" />
 </div>
    <p className="text-[#1E74EC]">Разработка программного обеспечения</p>
<p className="text-[#535670] py-1 text-sm  ">Мы обеспечиваем полный цикл
 разработки программного обеспечения, развертывания и послерелизной поддержки. 
 Вы получите функциональный, масштабируемый и безопасный продукт, идеально 
 подходящий для бизнеса.
MVP за 90 дней.</p>
  </div>

  <div className="">
    <div className="">
      <img src={icon8} alt="" />
 </div>
    <p className="text-[#1E74EC]">Разработка программного обеспечения</p>
<p className="text-[#535670] py-1 text-sm  ">Мы обеспечиваем полный цикл
 разработки программного обеспечения, развертывания и послерелизной поддержки. 
 Вы получите функциональный, масштабируемый и безопасный продукт, идеально 
 подходящий для бизнеса.
MVP за 90 дней.</p>
  </div>

  <div className="">
    <div className="">
      <img src={icon9} alt="" />
 </div>
    <p className="text-[#1E74EC]">Разработка программного обеспечения</p>
<p className="text-[#535670] py-1 text-sm  ">Мы обеспечиваем полный цикл
 разработки программного обеспечения, развертывания и послерелизной поддержки. 
 Вы получите функциональный, масштабируемый и безопасный продукт, идеально 
 подходящий для бизнеса.
MVP за 90 дней.</p>
  </div>
  <div className="">
    <div className="">
      <img src={icon10} alt="" />
 </div>
    <p className="text-[#1E74EC]">Разработка программного обеспечения</p>
<p className="text-[#535670] py-1 text-sm  ">Мы обеспечиваем полный цикл
 разработки программного обеспечения, развертывания и послерелизной поддержки. 
 Вы получите функциональный, масштабируемый и безопасный продукт, идеально 
 подходящий для бизнеса.
MVP за 90 дней.</p>
  </div>

  </div>
  
  </section>
  <section className="px-[7%]">
  <h1 className="text-4xl text-[#03115F] font-bold py-2 text-center">Клиенты</h1>
  <div className="py-[4%] grid lg:grid-cols-6 grid-cols-3 gap-[1%]">
    <img src={group1} alt="" />
    <img src={group2} alt="" />
    <img src={group3} alt="" />
    <img src={group4} alt="" />
    <img src={group5} alt="" />
    <img src={group1} alt="" />
    <img src={group2} alt="" />
    <img src={group3} alt="" />
    <img src={group4} alt="" />
    <img src={group5} alt="" />
    <img src={group1} alt="" />
    <img src={group2} alt="" />
  </div>
  </section>
  <section className="bg1 lg:p-[7%] py-[3%]">
<p className="text-[#ffffff]">Связаться</p>  
<h1 className="lg:text-5xl md:text-3xl text-xl text-[#ffffff] font-bold lg:w-[70%] pt-2 pb-[5%]">Готовы предложить Вам лучшие IT-решения</h1>  
<div className="mx-[7%] p-[5%] bg-[#EEEFF1] grid lg:grid-cols-2 ">
<div className="bg-[#012C88] p-[7%]">
  <p className="text-[#DDDDE2] font-light text-xl">Есть идея?</p>
  <p className="text-[#DDDDE2] font-light py-1">У вас есть уже существующий проект, 
  который вы хотите усовершенствовать? Вы хотите воплотить в жизнь смелую идею, 
  но вам нужна помощь? Или вы вообще не знаете, с чего начать реализацию проекта? 
</p>
<div className="flex gap-[7%] py-3 border-t border-b border-solid border-[#DDDDE2] flex-wrap">
  <div className="">
    <p className="text-[#DDDDE2] font-semibold">Словения</p>
     <p className="text-[#DDDDE2] text-xs font-light py-1">contact@unionsmarttech.ru</p>
     <p className="text-[#DDDDE2] text-xs font-light py-1">+421 494 539-852</p>
  </div>
  <div className="">
  <p className="text-[#DDDDE2] font-semibold">Словения</p>
     <p className="text-[#DDDDE2] text-xs font-light py-1">contact@unionsmarttech.ru</p>
     <p className="text-[#DDDDE2] text-xs font-light py-1">+421 494 539-852</p>
  </div>
</div>
<div className="py-3">
  <img src={social} alt="" />
</div>

</div>
<div className="px-5">
  <h1 className="text-3xl text-[#03115F] font-medium ">Связаться с нами</h1>
  <p className="py-2 text-[#535670]">Оставьте свою контактную информацию, 
  и мы с радостью свяжемся с вами! </p>
  <form action="">
    <input className="p-2 w-full my-2" placeholder="Имя" type="text" />
    <input className="p-2 w-full my-2" placeholder="Компания" type="text" />
    <input className="p-2 w-full my-2" placeholder="Электронная почта" type="text" />
    <textarea className="w-full p-2 mt-2" placeholder="Сообщение" name="" id="" cols="30" rows="5"></textarea>
  </form>
</div>
</div>
 </section>
 <section className="px-[10%] lg:py-[4%] py-[7%]">
 <div className="lg:w-[55%] w-[75%]">
    <p className="text-[#35417F] py-2">FAQ</p>
    <h1 className="md:text-4xl text-2xl text-[#03115F] font-bold py-2">Возможно, у вас остались вопросы. Отвечаем</h1>
    </div>
   <div className="flex justify-between">
   <p className="text-[#535670] py-1 text-sm  ">Когда я смогу использовать готовый продукт?</p>
   <p className="text-[#535670] py-1 text-sm  ">x</p>
</div>
<p className="text-[#535670] py-1 text-sm px-[5%] ">Мы обеспечиваем полный цикл
 разработки программного обеспечения, развертывания и послерелизной поддержки.
  Вы получите функциональный, масштабируемый и безопасный продукт, идеально подходящий для бизнеса.
MVP за 90 дней.</p>
<div className="flex justify-between border-t border-b border-solid border-[#535670] py-2">
   <p className="text-[#535670] py-1">У меня есть недоработанное приложение. Вы можете его доработать?</p>
   <p className="text-[#535670] py-1  ">+</p>
</div>
<div className="flex justify-between  border-[#535670] py-2">
   <p className="text-[#535670] py-1">У меня есть недоработанное приложение. Вы можете его доработать?</p>
   <p className="text-[#535670] py-1  ">+</p>
</div>
<div className="flex justify-between border-t border-b border-solid border-[#535670] py-2">
   <p className="text-[#535670] py-1">У меня есть недоработанное приложение. Вы можете его доработать?</p>
   <p className="text-[#535670] py-1  ">+</p>
</div>

 </section>
<section className="px-[9%] lg:py-[3%] bg-[#03115F] py-[12%] ">
<div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-[5%]">
  <div className="">
  <p className="text-[#F0F0F1] py-1">Российская команда</p>
  <p className="text-[#F0F0F1] text-sm ">contact@unrttech.ru</p>
  <p className="text-[#F0F0F1] text-sm pb-2 ">+7 911 932-90-29</p>
  <p className="text-[#F0F0F1] text-sm ">24 Entuziastov street,</p>
  <p className="text-[#F0F0F1] text-sm "> Saint Petersburg, 191 119</p>
  </div>
  <div className="">
  <p className="text-[#F0F0F1] py-1">Российская команда</p>
  <p className="text-[#F0F0F1] text-sm ">contact@unions</p>
  <p className="text-[#F0F0F1] text-sm pb-2 ">+7 911 932-90-29</p>
  <p className="text-[#F0F0F1] text-sm ">24 Entuziastov street,</p>
  <p className="text-[#F0F0F1] text-sm "> Saint Petersburg,</p>
  </div>
  <div className="">
  <p className="text-[#F0F0F1] py-1">Российская команда</p>
  <p className="text-[#F0F0F1] text-sm ">contact@unionsma</p>
  <p className="text-[#F0F0F1] text-sm pb-2 ">+7 911 932-90-29</p>
  <p className="text-[#F0F0F1] text-sm ">24 Entuziastov street,</p>
  <p className="text-[#F0F0F1] text-sm "> Saint Petersbu9</p>
  </div>
  <div className="">
  <p className="text-[#F0F0F1] py-1">Российская команда</p>
  <p className="text-[#F0F0F1] text-sm ">contact@marttech.ru</p>
  <p className="text-[#F0F0F1] text-sm pb-2 ">+7 911 932-90-29</p>
  <p className="text-[#F0F0F1] text-sm ">24 Entuziastov street,</p>
  <p className="text-[#F0F0F1] text-sm "> Saint Pburg, 191 119</p>
  </div>
  <div className="">
  <p className="text-[#F0F0F1] py-1">Российская команда</p>
  <p className="text-[#F0F0F1] text-sm ">contact@unmarttech.ru</p>
  <p className="text-[#F0F0F1] text-sm pb-2 ">+7 911 932-90-29</p>
  <p className="text-[#F0F0F1] text-sm ">24 Entuziastov street,</p>
  <p className="text-[#F0F0F1] text-sm "> Saint Pete 191 119</p>
  </div>
</div>
</section>
  </main>
</div>
    </div>
  );
}

export default App;
