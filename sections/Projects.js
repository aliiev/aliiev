import Image from 'next/image'
import RealmImg from '../public/resources/images/projects/realm-min.png'
import ArchmoveImg from '../public/resources/images/projects/archmove-min.png'
import OpenImg from '../public/resources/images/projects/open-min.png'

const projects = [{
  title: 'Realm Estate Website',
  description: 'Realm — отличный способ купить, продать или даже сдать в аренду свою недвижимость без каких-либо комиссий.',
  image: RealmImg,
  url: 'https://realm-estate-website.vercel.app/'
}, {
  title: 'Archmove Landing Page',
  description: 'Первый и самый надежный рынок проектирования и строительства домов в мире. Гарантия 100% безопасной, комфортной и прозрачной стройки с управлением проектами для достижения наилучшего результата',
  image: ArchmoveImg,
  url: 'https://archmove-landing-page.vercel.app/'
}, {
  title: 'Open Landing Page',
  description: 'Наш шаблон целевой страницы работает на всех устройствах, поэтому вам нужно настроить его только один раз, и вы всегда будете получать прекрасные результаты.',
  image: OpenImg,
  url: 'https://open-landing-page.vercel.app/'
}]

export default function Projects() {
	return (
		<section id="projects" className="border-b border-neutral-800 p-v">
	    <div className="flex justify-between items-center mb-6 lg:mb-12 p-h">
	      <h3 className="text-2xl lg:text-3xl 2xl:text-5xl">Проекты</h3>
	      <a className="hidden sm:flex justify-center items-center gap-2 btn border-2 border-emerald-600 text-neutral-100 fill-neutral-100 w-auto" href="https://github.com/aliiev" target="_blank" rel="noreferrer">
	        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
	        Github
	      </a>
	    </div>
	    <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 p-h">
	      <div className="absolute w-full h-full top-1/2 -translate-y-1/2 oooscillate"></div>
	      { projects.map((project, i) => (
	        <div key={ i } className="card">
	        	<div className="relative w:full sm:w-1/2 lg:w-full">
		          <Image className="rounded-lg md:rounded-xl" src={ project.image } alt={ project.title } />
	        	</div>
	          <div className="flex flex-col items-start gap-3 w-full h-full">
	            <h4 className="text-xl lg:text-3xl">{ project.title }</h4>
	            <p className="text-base mb-3">{ project.description }</p>
	            <a className="btn bg-emerald-600 w-full mt-auto" href={ project.url } target="_blank" rel="noreferrer">Открыть в новой вкладке</a>
	          </div>
	        </div>  
	      )) }
	    </div>
	    <div className="text-center mt-6 lg:mt-12 p-h">
	      <small className="text-xs text-neutral-400">
	        Данные проекты не являются коммерческими. Дизайн страниц был взят из открытых источников.
	      </small>
	    </div>
	  </section>
	)
}