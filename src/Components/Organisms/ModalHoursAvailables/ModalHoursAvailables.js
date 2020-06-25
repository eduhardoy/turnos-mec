import React from 'react'
import TransitionsModal from '../../Molecules/TransitionsModal/TransitionsModal'
import FormControl from '@material-ui/core/FormControl';
import SelectField from '../../Molecules/SelectField/SelectField'

const ModalHoursAvailables = (props) => {
    const { isVisible, hoursAvailables, handleChangeHour, selectedTime } = props

    return (
      <TransitionsModal isVisible={isVisible}>
        <h3>A que hora?</h3>
        <FormControl style={styles.formControl}>
          <SelectField
             childrenLabel="Horario" 
             idLabel="hoursAvailablesLabel"
             nameSelect="hoursAvailables" 
             idSelect="hoursAvailablesSelect" 
             valueSelect={selectedTime}
             handleChangeSelect={handleChangeHour}
             arrayMenuItemSelect={hoursAvailables}
             stylesSelect={{width: "100%"}}
          />
        </FormControl>
      </TransitionsModal>
    )
}


const styles = {
  fomrControl:{
    minWidth: 120
  }
}


export default ModalHoursAvailables 
