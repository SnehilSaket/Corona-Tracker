import {Grid, CardContent, Typography, Box, Card, makeStyles} from "@material-ui/core";
import CountUp from "react-countup";


const useStyle = makeStyles({
    header: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        textAlign: 'center'
    }
})

const CardComponent = ({CardTitle, value, desc, lastUpdate}) => {
    const classes = useStyle();
    return (
        <Grid component = {Card} style = {{margin: 20, borderBottom: '10px solid yellow'}}>
            <Box className = {classes.header}>
                <Typography variant = 'h5' color = 'textSecondary'>{CardTitle}</Typography>
            </Box>
            <CardContent>
                <Typography variant = 'h5'>
                    <CountUp start ={0} end = {value} duration = {3} separator = ','/>    
                </Typography>
                <Typography color = "textSecondary">{desc}</Typography>
                <Typography>{new Date(lastUpdate).toDateString()}</Typography>    
            </CardContent>
        </Grid>
    )
}

export default CardComponent;