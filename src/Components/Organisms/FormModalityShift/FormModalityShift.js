import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
//import { modalidadAclaracion } from '../../Actions/ModalidadAclaracion'

const FormModalityShift = (props) => {
    const [modalidad, setModalidad] = React.useState('presencial');
    const [aclaraciones, setAclaraciones] = React.useState('')
    //const { addModalidadAclaracion, modalidadAclaracion } = props
    
    const handleChange = (event) => {
        if(event.target.name === "modalidad"){
            setModalidad(event.target.value)
            //addModalidadAclaracion({modalidad: event.target.value, aclaraciones: aclaraciones})
        }else{
            setAclaraciones(event.target.value)
            //addModalidadAclaracion({modalidad: modalidad, aclaraciones: aclaraciones})
        }
    };

    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">
          Cómo querés que sea la atención?{" "}
        </FormLabel>
        <RadioGroup
          aria-label="gender"
          name="modalidad"
          value={modalidad}
          onChange={handleChange}
        >
          <FormControlLabel
            value="presencial"
            control={<Radio />}
            label="En persona"
          />
          <FormControlLabel
            value="telefono"
            control={<Radio />}
            label="Llamada telefónica"
          />
        </RadioGroup>
        <FormLabel>Querés hacer alguna aclaración? </FormLabel>
        <TextField
          name="aclaraciones"
          id="outlined-multiline-static"
          multiline
          rows={4}
          variant="outlined"
          onChange={handleChange}
        />
      </FormControl>
    );
}


export default FormModalityShift