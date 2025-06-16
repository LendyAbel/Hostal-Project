import { useState } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import Modal from 'react-modal'
import './MapModal.css'

const MapaModal = () => {
  const [modalAbierto, setModalAbierto] = useState(false)

  const centro = {
    lat: 22.11255142557758,
    lng: -78.62755409498743,
  }

  return (
    <div className='mapaModal'>
      <button className='boton' onClick={() => setModalAbierto(true)}>
        Ver en el mapa
      </button>
      <Modal
        isOpen={modalAbierto}
        onRequestClose={() => setModalAbierto(false)}
        className='modal'
        overlayClassName='overlay'
        ariaHideApp={false}
      >
        <button className='botonCerrar' onClick={() => setModalAbierto(false)}>
          X
        </button>
        <h2>Ubicación en el mapa</h2>
        {modalAbierto && (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '400px' }}
            center={centro}
            zoom={18}
          >
            <Marker position={centro} />
          </GoogleMap>
        )}
      </Modal>
    </div>
  )
}

export default MapaModal
