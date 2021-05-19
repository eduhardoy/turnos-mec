import React from 'react';
import Papers from '../../Atoms/Papers/Papers'
import TextField from '@material-ui/core/TextField';
import Text from '../../Atoms/Text/Text'

const PaperTextField = (props) => {
  const { idTextField, disabled, placeholder, children, onChange  } = props

  return (
      <Papers color="primary" style={styles.papers} >
          <Text>{children}</Text>
          <TextField disabled={disabled} id={idTextField} placeholder={placeholder} variant="outlined" onChange={onChange} style={styles.textfield} />
      </Papers>
  )
}


const styles = {
papers: {
  width: "90%", 
  marginTop: "3%", 
  borderRadius: 15, 
  textAlign: "left", 
  padding: 20
},
textfield: {
  width: "100%"
}
}

export default PaperTextField