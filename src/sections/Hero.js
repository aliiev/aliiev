import { HashLink } from 'react-router-hash-link'
import HeroImg from '../resources/images/hero-min.png'

const Hero = () => {
  const scrollAdjusted = e => {
    let offset = document.getElementById('navbar').offsetHeight
    let elPosition = e.getBoundingClientRect().top
    let offsetPosition = elPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

  return (
    <section id="hero" className="relative flex flex-col md:flex-row justify-between items-center gap-6 p-v p-h overflow-hidden">
      <div className="absolute ccchaos w-96 h-96 top-0 left-0 scale-150 opacity-60 -translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="relative flex flex-col items-start gap-6 xl:gap-8 w-full md:w-2/3">
        <h2 className="text-3xl lg:text-5xl 2xl:text-6xl">Разработка адаптивных лендингов за <span className="text-emerald-600">$100</span></h2>
        <p className="text-base 2xl:text-xl">
          Лендинг можно считать парадной дверью вашего бизнеса, через которую входит потенциальный клиент. Ваша страница приветствует посетителя и отвечает на все его вопросы о вашей деятельности, представляет Ваше решение для реализации вопросов клиента.
        </p>
        <HashLink className="btn bg-emerald-600" to="/#contacts" scroll={ e => scrollAdjusted(e) }>Написать мне</HashLink>
      </div>
      <div className="relative w-full order-first md:order-last">
        <img className="drop-shadow-xl" src={ HeroImg } alt="Адаптивная верстка" />
      </div>
    </section>
  )
}

export default Hero