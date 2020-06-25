import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Papers from '../../Atoms/Papers/Papers'

const RadioButtonsGroup = (props) => {
  const { radioGroup, formLabel, name, value, onChange } = props

  return (
    <Papers style={styles.papers} >
    <FormControl component="fieldset">
      <FormLabel style={styles.formLabel} component="legend">{formLabel}</FormLabel>
      <RadioGroup name={name} value={value} onChange={onChange}>
        {
          radioGroup.map(radio => <FormControlLabel value={radio.value} control={<Radio />} label={radio.label} />)
        }
      </RadioGroup>
    </FormControl>
    </Papers>

  )
}


const styles = {
  papers: {
    width: "100%", 
    marginTop: "3%", 
    borderRadius: 15, 
    textAlign: "left", 
    paddingLeft: "1%"
  },
  formLabel: {
    fontSize: 22, 
    color: "black", 
    paddingTop: "7%",
    paddingBottom: "5%"
  }
}

export default RadioButtonsGroup