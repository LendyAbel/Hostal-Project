import { Link } from 'react-router-dom'
import './Contacto.css'

const Contacto = ({ name, whatsapp, email, tripAdvisor, airbnb }) => {
  return (
    <section id={name} className='section type0 contacto'>
      <div>
        <h2>Contacto:</h2>
        <div id='area-contactos' className='areaContactos'>
          <Link
            className='enlaceContacto'
            to={whatsapp.link}
            target='_blank'
            rel='noreferrer noopener'
          >
            <img src={whatsapp.icon} alt='whatsapp--v1' loading='lazy' />
            +53 53276404
          </Link>
          <Link className='enlaceContacto' to={email.link}>
            <img src={email.icon} alt='email' loading='lazy' />
            hostalalicia2009@gmail.com
          </Link>
        </div>
      </div>
      <div>
        <h2>Encuéntranos en:</h2>
        <div id='area-enlaces' className='areaEnlaces'>
          <Link
            className='enlaceSitio'
            id='tripadvisor'
            to={tripAdvisor.link}
            target='_blank'
            rel='noreferrer noopener'
          >
            <img
              width='48'
              height='48'
              src={tripAdvisor.icon}
              alt='tripadvisor'
              loading='lazy'
            />
            TripAdvisor
          </Link>
          <Link
            className='enlaceSitio'
            id='airbnb-hab1'
            to={airbnb.link1}
            target='_blank'
            rel='noreferrer noopener'
          >
            <img
              width='50'
              height='50'
              src={airbnb.icon}
              alt='airbnb'
              loading='lazy'
            />
            Habitación 1
          </Link>
          <Link
            className='enlaceSitio'
            id='airbnb-hab2'
            to={airbnb.link2}
            target='_blank'
            rel='noreferrer noopener'
          >
            <img
              width='50'
              height='50'
              src={airbnb.icon}
              alt='airbnb'
              loading='lazy'
            />
            Habitación 2
          </Link>
          <Link
            className='enlaceSitio'
            id='airbnb-hab3'
            to={airbnb.link3}
            target='_blank'
            rel='noreferrer noopener'
          >
            <img
              width='50'
              height='50'
              src={airbnb.icon}
              alt='airbnb'
              loading='lazy'
            />
            Habitación 3
          </Link>
          <Link
            className='enlaceSitio'
            id='airbnb-hab4'
            to={airbnb.kin4}
            target='_blank'
            rel='noreferrer noopener'
          >
            <img
              width='50'
              height='50'
              src={airbnb.icon}
              alt='airbnb'
              loading='lazy'
            />
            Habitación 4
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Contacto
