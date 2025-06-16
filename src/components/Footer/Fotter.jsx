import { Link } from 'react-router-dom'
import './Fotter.css'

const Footer = () => {
  return (
    <footer id='footer' className='footer type1'>
      <div className='footerConteiner izquierdo'></div>
      <div className='footerConteiner medio'>
        <p>Hostal Alicia - Morón, Cuba</p>
      </div>
      <div className='footerConteiner derecho'>
        <Link
          to='/politica-privacidad'
          target='_blank'
          rel='noreferrer noopener'
        >
          Política de Privacidad
        </Link>
      </div>
    </footer>
  )
}

export default Footer
