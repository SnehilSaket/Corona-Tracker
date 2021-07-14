import { Typography, makeStyles, Box, CircularProgress, Grid } from "@material-ui/core";
import Card from './card.jsx';


const useStyles = makeStyles({
    component: {
        margin: '50px 0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    container: {
        color: '#8cba8c',
        marginBottom: 40
    }
})


const Cards = ({data: {confirmed, deaths, recovered, lastUpdate}}) => {
    const classes = useStyles();

    if(!confirmed){
        return <CircularProgress /> 
    }



    return (
        <Box className = {classes.component}>
            <Typography className = {classes.container} variant = 'h4' gutterBottom> Coronavirus Cases Globally </Typography>
            <Grid container spacing = {3} justifyContent = 'center'>
                <Card 
                    CardTitle = "Infected"
                    value = {confirmed.value}
                    desc = 'Number of infected cases of COVID-19'
                    lastUpdate = {lastUpdate}
                />
                <Card 
                    CardTitle = "Recovered"
                    value = {recovered.value}
                    desc = 'Number of recovered cases of COVID-19'
                    lastUpdate = {lastUpdate}
                />
                <Card 
                    CardTitle = "Deaths"
                    value = {deaths.value}
                    desc = 'Number of deaths causes by COVID-19'
                    lastUpdate = {lastUpdate}
                />
            </Grid>
        </Box>
    )
}


export default Cards;   