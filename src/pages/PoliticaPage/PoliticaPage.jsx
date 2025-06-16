import { Link } from 'react-router-dom'
import './PoliticaPage.css'

const PoliticaPage = () => {
  return (
    <div id='politica-privacidad' className='politicaPrivacidad'>
      <header id='header-politica' className='headerPolitica'>
        <h1>Política de Privacidad</h1>
      </header>
      <main id='main-politica' className='mainPolitica'>
        <section id='section-politica' className='sectionPolitica'>
          <h2>1. Introducción</h2>
          <p>
            En Hostal Alicia, valoramos su privacidad y nos comprometemos a
            proteger los datos personales que recopilamos. Esta política explica
            qué datos recopilamos, cómo los utilizamos y los derechos que usted
            tiene sobre ellos.
          </p>
        </section>
        <section id='section-politica' className='sectionPolitica'>
          <h2>2. Datos que recopilamos</h2>
          <p>
            Podemos recopilar los siguientes datos personales a través de
            nuestro formulario de contacto y reserva:
          </p>
          <ul>
            <li>Nombre completo</li>
            <li>Correo electrónico</li>
            <li>Número de teléfono</li>
            <li>
              Detalles de la reserva (habitaciones solicitadas, fechas, etc.)
            </li>
          </ul>
        </section>
        <section id='section-politica' className='sectionPolitica'>
          <h2>3. Uso de los datos</h2>
          <p>
            Los datos personales recopilados se utilizan exclusivamente para:
          </p>
          <ul>
            <li>
              Gestionar las reservas realizadas a través de nuestro sitio web.
            </li>
            <li>
              Responder a consultas y proporcionar información solicitada.
            </li>
            <li>
              Contactar con los clientes para confirmar reservas o enviar
              información relevante.
            </li>
          </ul>
        </section>
        <section id='section-politica' className='sectionPolitica'>
          <h2>4. Seguridad de los datos</h2>
          <p>
            Nos comprometemos a proteger sus datos personales. Utilizamos
            medidas de seguridad adecuadas para evitar el acceso no autorizado a
            los datos.
          </p>
        </section>
        <section id='section-politica' className='sectionPolitica'>
          <h2>5. Compartición de datos</h2>
          <p>
            No compartimos sus datos personales con terceros, excepto cuando sea
            necesario para cumplir con obligaciones legales.
          </p>
        </section>
        <section id='section-politica' className='sectionPolitica'>
          <h2>6. Derechos del usuario</h2>
          <p>Usted tiene derecho a:</p>
          <ul>
            <li>Acceder a los datos personales que tenemos sobre usted.</li>
            <li>Solicitar la rectificación o eliminación de sus datos.</li>
            <li>
              Retirar su consentimiento para el uso de sus datos en cualquier
              momento.
            </li>
          </ul>
          <p>
            Para ejercer estos derechos, puede contactarnos en
            <a href='mailto:hostalalicia2009@gmail.com'>
              hostalalicia2009@gmail.com
            </a>
            .
          </p>
        </section>
        <section id='section-politica' className='sectionPolitica'>
          <h2>7. Cambios en la política de privacidad</h2>
          <p>
            Nos reservamos el derecho de actualizar esta política de privacidad
            en cualquier momento. Se recomienda revisar esta página
            periódicamente para estar informado sobre cualquier cambio.
          </p>
        </section>
        <Link to='/'>
          <button id='button-regresar' className='buttonRegresar'>
            Regresar a la Página Principal
          </button>
        </Link>
      </main>
      <footer id='footer-politica' className='footerPolitica'>
        <p>Hostal Alicia - Morón, Cuba</p>
      </footer>
    </div>
  )
}

export default PoliticaPage
