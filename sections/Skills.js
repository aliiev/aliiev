import Image from 'next/image'
import HtmlIcon from '../public/resources/icons/html.svg'
import CssIcon from '../public/resources/icons/css.svg'
import JsIcon from '../public/resources/icons/js.svg'
import ReactIcon from '../public/resources/icons/react.svg'
import ReduxIcon from '../public/resources/icons/redux.svg'
import NextjsIcon from '../public/resources/icons/nextjs.svg'
import GulpIcon from '../public/resources/icons/gulp.svg'
import PugIcon from '../public/resources/icons/pug.svg'
import SassIcon from '../public/resources/icons/sass.svg'
import TailwindcssIcon from '../public/resources/icons/tailwindcss.svg'
import IllustratorIcon from '../public/resources/icons/illustrator.svg'
import FigmaIcon from '../public/resources/icons/figma.svg'

const skills = [{
  title: 'Html',
  icon: HtmlIcon
}, {
  title: 'Css',
  icon: CssIcon
}, {
  title: 'Js',
  icon: JsIcon
}, {
  title: 'React',
  icon: ReactIcon
}, {
  title: 'Redux',
  icon: ReduxIcon
}, {
  title: 'Next.js',
  icon: NextjsIcon
}, {
  title: 'Tailwindcss',
  icon: TailwindcssIcon
}, {
  title: 'Gulp',
  icon: GulpIcon
}, {
  title: 'Pug',
  icon: PugIcon
}, {
  title: 'Sass',
  icon: SassIcon
}, {
  title: 'Figma',
  icon: FigmaIcon
}, {
  title: 'Illustrator',
  icon: IllustratorIcon
}]

export default function Skills() {
	return (
		<section id="skills" className="p-v p-h">
	    <h3 className="text-2xl lg:text-3xl 2xl:text-5xl text-center mb-6 lg:mb-12">Навыки</h3>
	    <div className="relative grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-3 sm:gap-6 lg:gap-8">
	      { skills.map((skill, i) => (
	        <div key={ i } className="relative bg-neutral-800 rounded-xl text-center p-4 lg:p-6">
	          <div className="relative h-8 lg:h-12 mx-auto mb-3">
		          <Image src={ skill.icon } layout="fill" alt={ skill.title } />
	          </div>
	          <h4 className="text-xs xl:text-base mt-auto mb-auto">{ skill.title }</h4>
	        </div>  
	      )) }
	    </div>
	  </section>
	)
}