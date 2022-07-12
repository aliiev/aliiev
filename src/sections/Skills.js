import HtmlIcon from '../resources/icons/html.svg'
import CssIcon from '../resources/icons/css.svg'
import JsIcon from '../resources/icons/js.svg'
import ReactIcon from '../resources/icons/react.svg'
import ReduxIcon from '../resources/icons/redux.svg'
import GulpIcon from '../resources/icons/gulp.svg'
import PugIcon from '../resources/icons/pug.svg'
import SassIcon from '../resources/icons/sass.svg'
import TailwindcssIcon from '../resources/icons/tailwindcss.svg'
import PhotoshopIcon from '../resources/icons/photoshop.svg'
import IllustratorIcon from '../resources/icons/illustrator.svg'
import FigmaIcon from '../resources/icons/figma.svg'

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
  title: 'Adobe Photoshop',
  icon: PhotoshopIcon
}, {
  title: 'Adobe Illustrator',
  icon: IllustratorIcon
}, {
  title: 'Figma',
  icon: FigmaIcon
}, ]

const Skills = () => (
  <section id="skills" className="p-v p-h">
    <h3 className="text-2xl lg:text-3xl 2xl:text-5xl text-center mb-6 lg:mb-12">Навыки</h3>
    <div className="relative grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-3 sm:gap-6 lg:gap-8">
      { skills.map((skill, i) => (
        <div key={ i } className="relative bg-neutral-800 rounded-xl text-center p-4 lg:p-6">
          <img className="h-8 lg:h-12 mx-auto mb-3" src={ skill.icon } alt={ skill.title } />
          <h4 className="text-xs xl:text-base mt-auto mb-auto">{ skill.title }</h4>
        </div>  
      )) }
    </div>
  </section>
)

export default Skills