import {
  Navbar,
  Inicio,
  Descripcion,
  Fotos,
  Formulario,
  Contacto,
  Fotter
} from '../components'
import data from '../data'
import config from '../utils/config'

const HomePage = () => {
  const { secciones, frases, descripcion, rooms, enlacesContacto } = data
  return (
    <>
      <Navbar name='navbar' sections={secciones} />
      <Inicio name={secciones.inicio} frases={frases} />
      <Descripcion name={secciones.descripcion} descripcion={descripcion} />
      <Fotos name={secciones.fotos} rooms={rooms} />
      <Formulario
        name={secciones.reservar}
        serviceID={config.EMAILJS_SERVICEID}
        templateID={config.EMAILJS_TEMPLATEID}
        publicKey={config.EMAILJS_PUBLICKEY}
      />
      <Contacto
        name={secciones.contacto}
        whatsapp={enlacesContacto.whatsapp}
        email={enlacesContacto.email}
        tripAdvisor={enlacesContacto.tripAdvisor}
        airbnb={enlacesContacto.airbnb}
      />
      <Fotter/>
    </>
  )
}

export default HomePage
