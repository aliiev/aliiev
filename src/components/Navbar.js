import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import Logo from '../resources/Logo.svg'

const links = [{
  title: 'Главная',
  url: '/#hero'
}, {
  title: 'Обо мне',
  url: '/#about'
}, {
  title: 'Проекты',
  url: '/#projects'
}, {
  title: 'Навыки',
  url: '/#skills'
}, {
  title: 'Контакты',
  url: '/#contacts'
}]

const Navbar = () => {
  const [ isOpen, setOpen ] = useState(false)

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
    <nav className={ `sticky bg-neutral-900 ${ !isOpen && 'backdrop-blur bg-opacity-60' } sm:backdrop-blur sm:bg-opacity-60 border-b border-neutral-800 w-full top-0 transition-opacity z-50` }>
      <div id="navbar" className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-10 p-h py-6">
        
        {/* LOGO AND TOGGLER */}
        <div className="flex justify-between items-center shrink-0 w-full sm:w-auto">
          <a className="" href="/">
            <img className="h-6 lg:h-8" src={ Logo } alt="Aliiev" />
          </a>
          <button className="sm:hidden" onClick={ () => setOpen(!isOpen) }>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={ 2 }>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* NAV LINKS */}
        <div className={ `${ isOpen ? 'translate-y-0 visible opacity-100' : '-translate-y-6 invisible opacity-0' } absolute sm:relative flex flex-col sm:flex-row sm:justify-end lg:justify-between gap-4 sm:gap-0 items-center bg-neutral-900 sm:bg-transparent border-b border-neutral-800 sm:border-none w-full top-full left-0 right-0 mt-px sm:mt-0 py-4 sm:py-0 sm:translate-y-0 sm:visible sm:opacity-100 transition-all` }>
          
          {/* LINKS LOOP */}
          <ul className="flex flex-col sm:flex-row justify-start items-star sm:items-center gap-4 sm:gap-8 w-full sm:w-auto text-base sm:text-sm 2xl:text-base font-medium">
            { links.map((link, i) => (
              <li key={ i } className="border-b border-neutral-800 sm:border-none text-center pb-4 sm:pb-0 w-full sm:w-auto">
                <HashLink className="text-neutral-400 hover:text-neutral-100" to={ link.url } scroll={ e => scrollAdjusted(e) } onClick={ () => setOpen(false) }>{ link.title }</HashLink>
              </li>  
            )) }
          </ul>

          {/* BUTTON */}
          <div className="w-full sm:w-auto px-6 sm:px-0">
            <HashLink className="btn bg-emerald-600 hover:bg-emerald-700 block sm:hidden lg:block" to="/#contacts" scroll={ e => scrollAdjusted(e) } onClick={ () => setOpen(false) }>Написать мне</HashLink>
          </div>
          
        </div>

      </div>
    </nav>
  )
}

export default Navbar
