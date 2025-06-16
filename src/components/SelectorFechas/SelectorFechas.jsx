import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const SelectorFechas = ({
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
}) => {
  const styles = {
    contenedor: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      margin: '8px',
    },
    elemento: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '8px',
    },
  }

  return (
    <div style={styles.contenedor}>
      <div style={styles.elemento}>
        <label>Fecha de Entrada</label>
        <DatePicker
          selected={checkInDate}
          onChange={date => setCheckInDate(date)}
          selectsStart
          startDate={checkInDate}
          endDate={checkOutDate}
          minDate={new Date()}
          placeholderText='Selecciona fecha de entrada'
        />
      </div>

      <div style={styles.elemento}>
        <label>Fecha de Salida</label>
        <DatePicker
          selected={checkOutDate}
          onChange={date => setCheckOutDate(date)}
          selectsEnd
          startDate={checkInDate}
          endDate={checkOutDate}
          minDate={checkInDate || new Date()}
          placeholderText='Selecciona fecha de salida'
        />
      </div>
    </div>
  )
}

export default SelectorFechas
