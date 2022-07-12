import AboutImg from '../resources/images/about.jpg'

const About = () => (
  <section>
    <div id="about" className="relative flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 xl:gap-20 bg-neutral-800 rounded-lg md:rounded-xl xl:rounded-3xl w-full p-6 md:p-8 xl:p-12">
      <div className="w-full md:w-1/2">
        <img className="w-full h-[50vh] object-cover rounded-lg md:rounded-xl xl:rounded-3xl" src={ AboutImg } alt="Мое фото" />
      </div>
      <div className="flex flex-col items-start gap-3 w-full">
        <h3 className="text-2xl lg:text-3xl 2xl:text-5xl">Меня зовут <span className="text-emerald-600">Ахтем Алиев</span> и я <span className="underline underline-offset-4 decoration-emerald-600">веб-разработчик</span></h3>
        <p className="text-sm 2xl:text-lg">
          Lorem ipsum, dolor, sit amet consectetur adipisicing elit. Veniam quidem at atque voluptatibus rerum possimus reprehenderit quia facere. Quas magni debitis, asperiores! Perspiciatis adipisci dolorem minus. Incidunt iste debitis, tenetur!
        </p>
        <p className="text-sm 2xl:text-lg">
          Lorem ipsum, dolor, sit amet consectetur adipisicing elit. Veniam quidem at atque voluptatibus rerum possimus reprehenderit quia facere. Quas magni debitis, asperiores! Perspiciatis adipisci dolorem minus. Incidunt iste debitis, tenetur!
        </p>
      </div>
    </div>
  </section>
)

export default About