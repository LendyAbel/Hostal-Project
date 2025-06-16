import './Inicio.css'

const Inicio = ({ name, frases }) => {
  const { frase1, frase2, frase3, frase4 } = frases

  return (
    <section id={name} className='section type0 inicio'>
      <div className='grid'>
        <div className='gridElement animacion delay1'>
          <p>{frase1.texto}</p>
          <img src={frase1.fotoUrl} alt={frase1.altFoto} />
        </div>
        <div className='gridElement animacion delay2'>
          <img src={frase2.fotoUrl} alt={frase2.altFoto} />
          <p>{frase2.texto}</p>
        </div>
        <div className='gridElement animacion delay3'>
          <p>{frase3.texto}</p>
          <img src={frase3.fotoUrl} alt={frase3.altFoto} />
        </div>
        <div className='gridElement animacion delay4'>
          <img src={frase4.fotoUrl} alt={frase4.alt} />
          <p>{frase4.texto}</p>
        </div>
      </div>
    </section>
  )
}

export default Inicio
