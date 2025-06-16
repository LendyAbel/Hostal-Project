import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import SelectorFechas from '../SelectorFechas/SelectorFechas'
import './Formulario.css'

const Formulario = ({ name, serviceID, templateID, publicKey }) => {
  const form = useRef()

  const [mensajeEnviado, setMensajeEnviado] = useState(false)
  const [textoBoton, setTextoBoton] = useState('Enviar')
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(false)

  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)

  const enviarMail = async event => {
    event.preventDefault()
    setTextoBoton('Enviando...')
    setBotonDeshabilitado(true)

    try {
      await emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      setTextoBoton('Enviado')
      setMensajeEnviado(true)
    } catch (error) {
      setTextoBoton('Enviar')
      setBotonDeshabilitado(false)
      alert(JSON.stringify(error))
    }
  }

  const restablecerFormulario = () => {
    setMensajeEnviado(false)
    setBotonDeshabilitado(false)
    setTextoBoton('Enviar')
  }

  return (
    <section id={name} className='section type1 reservar'>
      <h1>CONSULTA DE RESERVA</h1>
      <form
        ref={form}
        id='form'
        className='form'
        onSubmit={enviarMail}
        onChange={restablecerFormulario}
      >
        <div className='fechas'>
          <SelectorFechas
            checkInDate={checkInDate}
            setCheckInDate={setCheckInDate}
            checkOutDate={checkOutDate}
            setCheckOutDate={setCheckOutDate}
          />
          {/* Campos ocultos para enviar las fechas */}
          <input
            type='hidden'
            name='fecha-entrada'
            value={checkInDate ? checkInDate.toISOString().split('T')[0] : ''}
          />
          <input
            type='hidden'
            name='fecha-salida'
            value={checkOutDate ? checkOutDate.toISOString().split('T')[0] : ''}
          />
        </div>
        <div
          id='contenedorHabitaciones'
          className='contenedorHabitaciones formElement'
        >
          <label htmlFor='habitaciones'>*Habitaciones:</label>
          <div id='habitaciones' className='habitaciones' name='habitaciones'>
            <label htmlFor='habitacion1' className='checkboxs'>
              <input
                type='checkbox'
                name='habitacion1'
                id='habitacion1'
                value='1'
              />
              Habitacion 1
            </label>
            <label htmlFor='habitacion2' className='checkboxs'>
              <input
                type='checkbox'
                name='habitacion2'
                id='habitacion2'
                value='2'
              />
              Habitacion 2
            </label>
            <label htmlFor='habitacion3' className='checkboxs'>
              <input
                type='checkbox'
                name='habitacion3'
                id='habitacion3'
                value='3'
              />
              Habitacion 3
            </label>
            <label htmlFor='habitacion4' className='checkboxs'>
              <input
                type='checkbox'
                name='habitacion4'
                id='habitacion4'
                value='4'
              />
              Habitacion 4
            </label>
            <label htmlFor='personas' className='personas'>
              *Personas:
              <input
                className='personas'
                type='number'
                id='personas'
                name='personas'
                placeholder='Nº'
                max='12'
                required
              />
            </label>
          </div>
        </div>
        <div id='contact' className='info'>
          <div className='formElement'>
            <label htmlFor='nombre'>*Nombre:</label>
            <input
              type='text'
              id='nombre'
              name='nombre'
              placeholder='Ej: Pedro Garcia'
              required
            />
          </div>
          <div className='formElement'>
            <label htmlFor='email'>*Correo electrónico:</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Ej: pedro@garcia.com'
              required
            />
          </div>
          <div className='formElement'>
            <label htmlFor='telefono'>*Teléfono:</label>
            <input
              type='tel'
              id='telefono'
              name='telefono'
              placeholder='Ej: +53 10000256'
              required
            />
          </div>
        </div>
        <div className='comentario formElement'>
          <label htmlFor='comentario'>Comentario:</label>
          <textarea
            id='comentario'
            name='comentario'
            placeholder='Ej: ¿Queremos saber ...? ¿Es posible ...?'
          ></textarea>
        </div>
        <p>*Obligatorio</p>
        <input
          type='submit'
          id='button'
          className='button'
          value={textoBoton}
          disabled={botonDeshabilitado}
        />
        <label className='politicas' htmlFor='aceptar-politica'>
          <input type='checkbox' id='aceptar-politica' required />
          <span>He leído y acepto la </span>
          <Link
            to='/politica-privacidad'
            target='_blank'
            rel='noreferrer noopener'
          >
            Política de Privacidad
          </Link>
        </label>
        <div className='confirmDiv'>
          {mensajeEnviado && (
            <p>
              Mensaje enviado, gracias!!! Contactaremos lo antes posible para
              confirmar la reserva
            </p>
          )}
        </div>
      </form>
    </section>
  )
}

export default Formulario
