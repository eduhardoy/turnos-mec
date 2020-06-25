import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Text from '../../Atoms/Text/Text';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function PanelExpansion(props) {
    const [ checked, setChecked ] = useState({})
    const { title, children } = props;
    const classes = useStyles();

    const handleChange = () => {

    }

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary
         //   expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <FormControlLabel
                aria-label="Acknowledge"
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={
                <Checkbox
                    name={title}
                    onChange={handleChange}
                    value={title}
                    checked={handleChange}
                />
                
                }
                label={title}
            />
            <Text className={classes.heading}></Text>
            </ExpansionPanelSummary>
           {/* <ExpansionPanelDetails>
            <Text>{children}</Text>
            </ExpansionPanelDetails> */}
        </ExpansionPanel>
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