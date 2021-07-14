import { useEffect, useState } from "react";
import { fetchCountries } from "../sevice/api";
import { Typography } from "@material-ui/core";
import NativeSelect from '@material-ui/core/NativeSelect';


const Countries = ({ handleCountryChange }) => {

    const [countries, setCountries] = useState([])    

    useEffect(() => {
        const fetchApi = async() =>{
            setCountries(await fetchCountries());
        }
        fetchApi();
    }, [])

    return(
        <>
            <Typography style={{marginBottom: 20}} variant="h5" color="textSecondary">Reported Cases or Deaths by Country or Territory </Typography>
            <NativeSelect onChange = {(e) => handleCountryChange(e.target.value)}>
                <option value = "">Select a Country</option>
                {countries.map((country,i) => {
                    return(
                        <option key={i} value={country} >{country}</option>
                    )
                })}
            </NativeSelect>
        </>
    )
} 

export default Countries;