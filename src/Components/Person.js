import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({

  media: {
    height: 300,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Person = (props) => {
  const classes = useStyles();

  return (

    <Grid item xs={4}>
        <Card >  
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={props.person.img_url}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.person.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="span">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                        <Paper className={classes.paper}>Gender: {props.person.gender}</Paper>
                        </Grid>
                        <Grid item xs={12}>
                        <Paper className={classes.paper}>Status: {props.person.status}</Paper>
                        </Grid>
                        <Grid item xs={12}>
                        <Paper className={classes.paper}>Origin: {props.person.origin}</Paper>
                        </Grid>
                        <Grid item xs={12}>
                        <Paper className={classes.paper}>Species: {props.person.species}</Paper>
                        </Grid>
                    </Grid>
                </Typography>
                </CardContent>
            </CardActionArea>
            
        </Card>
    </Grid>

  );
}
export default Person;