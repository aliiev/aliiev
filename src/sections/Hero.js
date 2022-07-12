import HeroImg from '../resources/images/hero.png'

const Hero = () => (
  <section className="flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="flex flex-col items-start gap-6 xl:gap-8 w-full md:w-2/3">
      <h2 className="text-3xl lg:text-5xl 2xl:text-6xl">Разработка адаптивных лендингов за <span className="text-emerald-600">$50</span></h2>
      <p className="text-base 2xl:text-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Eius, aliquam! Vero, ratione cum quas neque sint sequi nam officiis doloremque nostrum eos alias veritatis quasi dicta voluptate adipisci, qui accusantium!
      </p>
      <button className="btn">Написать мне</button>
    </div>
    <div className="w-full order-first md:order-last">
      <img src={ HeroImg } alt="Адаптивная верстка" />
    </div>
  </section>
)

export default Hero