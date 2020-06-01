import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Titulo from '../../titulos.jpg'
import Odontologia from '../../odontologia.jpg'
import UnitCard from './UnitCard/UnitCard'


export default function RecipeReviewCard() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <UnitCard
          title="Dirección de recursos humanos"
          subtitle="Podés reservar turnos para la oficina central, para el área de certificaciones de servicios y para el departamento de personal central"
          backgroundImage={Titulo}
          subTramiteData={[{title: "Oficina central", content: ""}, {title: "Certificaciones de servicios", content: ""}, {title: "Departamento de pesonal central", content: ""}]}
        >
          <Typography paragraph></Typography>
          <Typography paragraph>
          </Typography>
        </UnitCard>
        <UnitCard
          title="Registro de títulos"
          subtitle="Sacá turno para registrar títulos de nivel secundario, nivel superior, universitarios, diplomaturas, especializaciones y títulos emitidos en el exterior"
          backgroundImage={Odontologia}
        >
          <Typography paragraph></Typography>
          <Typography paragraph>   
          </Typography>
        </UnitCard>
      </Grid>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
  }));
