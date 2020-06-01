import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { connect } from 'react-redux';
import {activeStep} from '../../../Actions/StepActive'
import { dataSubTipoTramite } from '../../../Actions/SubTipoTramiteData'
import './UnitCard.css'


const UnitCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const {backgroundImage, title, subtitle, children, subTramiteData, changueSubTipoTramiteData} = props

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const clickSiguiente = () => {
    if(title === "Registro de títulos"){
      console.log(title)
      window.location="https://turnostitulos.mec.gob.ar/"
    }else{
      changueSubTipoTramiteData(subTramiteData)
    }
  }

  return (
    <Grid className={classes.grid} item xs={12} sm={12} lg={5} xl={5} md={12}>
      <Card>
        <CardHeader title={title} onClick={clickSiguiente} />
        <CardMedia
          className={classes.media}
          image={backgroundImage}
          title="Registrar Títulos"
          onClick={clickSiguiente}
        />
        <CardContent onClick={clickSiguiente}>
          <Typography variant="body2" color="textSecondary" component="p">
            {subtitle}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            Ver mas
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>{children}</CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}


const useStyles = makeStyles((theme) => ({
    grid:{
      margin: "auto",
      marginTop: "6%"
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      fontSize: 14,
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(360deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));


  const mapStateToProps = state => {
    return {
        stepActive: state.stepActive,
        subTipoTramiteData: state.subTipoTramiteData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        siguienteStep: step => dispatch(activeStep(step)),
        changueSubTipoTramiteData: data => dispatch(dataSubTipoTramite(data))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UnitCard);