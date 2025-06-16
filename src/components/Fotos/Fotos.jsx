import { useEffect, useState } from 'react'
import './Fotos.css'

const Fotos = ({ name, rooms }) => {
  const [activeDiv, setActiveDiv] = useState({ name: '', index: 0 })

  const showDiv = id => {
    setActiveDiv({ name: id, index: 0 })
  }

  const nextSlide = () => {
    const total = rooms[activeDiv.name].length
    const prev = activeDiv
    setActiveDiv({ ...prev, index: (prev.index + 1) % total })
  }

  const prevSlide = () => {
    const total = rooms[activeDiv.name].length
    const prev = activeDiv
    setActiveDiv({ ...prev, index: (prev.index - 1 + total) % total })
  }

  useEffect(() => {
    //mostrar ultima habitación, en nustro caso sería "Otros"
    const keys = Object.keys(rooms)
    const lastRoom = keys[keys.length - 1]
    showDiv(lastRoom)
  }, [rooms])

  if (!activeDiv.name) {
    return
  }

  return (
    <section id={name} className='section type0 fotos'>
      {/* Enlaces a las habitaciones */}
      <div className='enlaceHabitaciones'>
        {Object.keys(rooms).map(room => (
          <p
            key={room}
            className={activeDiv.name === room ? 'activeText' : null}
            onClick={() => showDiv(room)}
          >
            {room.toUpperCase().replace('HAB', 'HABITACIÓN ')}
          </p>
        ))}
      </div>

      {/* Slider de imágenes */}
      <div className='slider' key={activeDiv.name}>
        <div className='slides'>
          {rooms[activeDiv.name].map((image, index) => (
            <img
              key={index}
              className={`slide ${
                index === activeDiv.index ? 'activeSlide' : ''
              }`}
              src={image}
              alt={`Foto de ${activeDiv}`}
              loading={index === activeDiv.index ? 'eager' : 'lazy'}
            />
          ))}
        </div>
      </div>
      <button className='prev' onClick={prevSlide} aria-label='Imagen anterior'>
        &#10094;
      </button>
      <button
        className='next'
        onClick={nextSlide}
        aria-label='Imagen siguiente'
      >
        &#10095;
      </button>
    </section>
  )
}

export default Fotos
