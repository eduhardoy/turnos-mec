import React, { useState } from 'react'
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import './Cards.css'
/*import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";*/

const Cards = (props) => {
    //const [expanded, setExpanded] = useState(false);
    const { title, subtitle, onClick, backgroundImage, path, /*children*/ } = props
    const classes = useStyles();

   /* const handleExpandClick = () => {
        setExpanded(!expanded);
    };*/
    
    return (
      <Card>
        <CardHeader title={title} onClick={onClick} />
        <Link to={path + "/" + title}>
          <CardMedia
            className={classes.media}
            image={backgroundImage}
            title={title}
            onClick={onClick}
          />
          <CardContent onClick={onClick}>
            <Typography variant="body2" color="textSecondary" component="p">
              {subtitle}
            </Typography>
          </CardContent>
        </Link>
      {  /*<CardActions disableSpacing>
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
          </Collapse>*/}
      </Card>
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
    }
   /* expand: {
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
    },*/
  }));


export default Cards