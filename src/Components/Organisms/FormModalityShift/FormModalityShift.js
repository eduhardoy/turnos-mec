import React, { useState } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';


const FormModalityShift = (props) => {
    const { shift, addModality, addClarifications } = props
    const [ modality, setModality ] = useState('Presencial')

    const handleChange = (event) => {
        if(event.target.name === "modalidad"){
          setModality(event.target.value)
          addModality({key: "modalidad", value: event.target.value})          
        }else{
          addClarifications({key: "aclaraciones", value: event.target.value})
        }
    }

    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">
          Cómo querés que sea la atención?
        </FormLabel>
        <RadioGroup
          aria-label="gender"
          name="modalidad"
          value={modality}
          onChange={handleChange}
        >
          <FormControlLabel
            value="Presencial"
            control={<Radio />}
            label="En persona"
          />
          <FormControlLabel
            disabled={shift.direccion === "OficinaCentral" || shift.direccion === "CertificacionesDeServicio" ? false : true}
            value="Telefono"
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