import Image from 'next/image'
import HeroImg from '../public/resources/images/hero-min.png'

export default function Hero() {
	return (
		<section id="hero" className="relative flex flex-col md:flex-row justify-between items-center gap-6 p-v p-h overflow-hidden">
      <div className="absolute ccchaos w-96 h-96 top-0 left-0 scale-150 opacity-60 -translate-x-1/3 -translate-y-1/3 z-10"></div>
      
      <div className="relative flex flex-col items-start gap-6 xl:gap-8 w-full md:w-2/3 z-20">
        <h2 className="text-3xl lg:text-5xl 2xl:text-6xl">Разработка адаптивных лендингов за <span className="text-emerald-600">$100</span></h2>
        <p className="text-base 2xl:text-xl">
          Лендинг можно считать парадной дверью вашего бизнеса, через которую входит потенциальный клиент. Ваша страница приветствует посетителя и отвечает на все его вопросы о вашей деятельности, представляет Ваше решение для реализации вопросов клиента.
        </p>
        <a className="btn bg-emerald-600" href="/#contacts">Написать мне</a>
      </div>
      <div className="relative w-full order-first md:order-last z-20">
        <Image className="drop-shadow-xl" src={ HeroImg } alt="Адаптивная верстка" />
      </div>
    </section>
	)
}