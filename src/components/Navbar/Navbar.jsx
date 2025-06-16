import './Navbar.css'

const Navbar = ({ sections, name }) => {
  const handleScroll = sectionId => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className='navbar' id={name}>
      <h1>HOSTAL ALICIA</h1>
      <nav>
        {Object.values(sections).map(seccion => (
          <button
            className='navButton'
            key={seccion}
            onClick={() => handleScroll(seccion)}
          >
            {seccion.toUpperCase().replace('-', ' ')}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Navbar
