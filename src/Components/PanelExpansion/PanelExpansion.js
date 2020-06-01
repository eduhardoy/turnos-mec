import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function PanelExpansion(props) {
  const {title, changeSubTipoTramite, selectedSubTipoTramite, panelForm, children} = props
  const [ stateChecked, setStateChecked ] = React.useState(false)
  const classes = useStyles();
  React.useEffect(() => {
    if(selectedSubTipoTramite !== title){
      setStateChecked(false)
    }else{
      setStateChecked(true)
    }

  }, [selectedSubTipoTramite])

  const elegirSubTipoTramite = (event) => {
    setStateChecked(!stateChecked)  
    changeSubTipoTramite(event.target.name)
  }

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {!panelForm ? title : null}
          {panelForm ? (
            <FormControlLabel
              aria-label="Acknowledge"
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={
                <Checkbox
                  name={title}
                  onChange={elegirSubTipoTramite}
                  value={title}
                  checked={stateChecked}
                />
              }
              label={title}
            />
          ) : null}

          <Typography className={classes.heading}></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{children}</Typography>       
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));