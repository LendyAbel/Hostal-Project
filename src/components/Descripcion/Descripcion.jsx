import MapaModal from '../MapModal/MapaModal'
import './Descripcion.css'

const Descripcion = ({ name, descripcion }) => {
  return (
    <section id={name} className='section type1 descripcion'>
      <div className='eslogan'>
        <h1>{descripcion.titulo}</h1>
        <h2>{descripcion.slogan}</h2>
      </div>
      {descripcion.descripcion.map((parrafo, index) => (
        <p key={index}>{parrafo}</p>
      ))}
      <MapaModal />
    </section>
  )
}

export default Descripcion
