import AboutImg from '../resources/images/about-min.jpg'

const About = () => (
  <section id="about" className="p-v p-h">
    <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 xl:gap-20 bg-neutral-800 rounded-lg md:rounded-xl w-full p-6 md:p-8 xl:p-12 overflow-hidden">
      <div className="absolute bbblurry opacity-50 w-full sm:w-1/2 pb-[100%] sm:pb-[50%] top-full md:top-0 right-0 translate-x-1/2 -translate-y-1/2"></div>
      <div className="relative w-full md:w-1/2">
        <img className="w-full h-[50vh] object-cover rounded-lg md:rounded-xl" src={ AboutImg } alt="Мое фото" />
      </div>
      <div className="relative flex flex-col items-start gap-3 w-full">
        <h3 className="text-2xl lg:text-3xl 2xl:text-5xl mb-1">Меня зовут <span className="text-emerald-600">Ахтем Алиев</span> и я <span className="underline underline-offset-4 decoration-emerald-600">веб-разработчик</span></h3>
        <p className="text-sm 2xl:text-lg">
          Изучаю IT более 3 лет, в том числе веб-разработку и программирование. Начинал с разработки простых страниц и компонентов, но также освоил разработку фулл-стек веб-приложений. При разработке фронтенда использую актуальные технологии и учитываю основные размеры устройств для адаптивной верстки.
        </p>
        <p className="text-sm 2xl:text-lg">
          Помимо веб-разработки увлекаюсь программированием, в том числе микроконтроллеров - в качестве хобби и отдыха. В данной сфере моим достижением было разработанная система умного дома, основанная на микроконтроллере Arduino в качестве веб-сервера, и веб-приложении для взаимодействия с этим сервером, написанный на React.
        </p>
      </div>
    </div>
  </section>
)

export default About