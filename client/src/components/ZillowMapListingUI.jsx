import { useState } from "react";

import { Card, CardContent } from "@mui/material"

import { Select, MenuItem } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import MapComponent from "./map"
import {data} from '../data/data'
function DropDown(props) {

    const { options } = props;

    const [age, setAge] = useState((options[0]).value);

    const handleChange = (event) => {

        setAge(event.target.value);
    };


    return (

        <Select
            value={age}
            onChange={handleChange}
            label="Age"
            inputProps={{ 'aria-label': 'Without label' }}
        >

            {options.map(item => <MenuItem value={item.value}>{item.label}</MenuItem>)}

        </Select>
    )
}


function CardItem(props) {
    const { details } = props
    const { image, price, address, beds, baths, size } = details;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>

                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent style={{ textAlign: 'left' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {price}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <strong>{beds}</strong> bds | <strong>{baths}</strong>ba | <strong>{size}</strong> sq feet| Active
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {address}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>)
}

export default function ZillowMapListingUI() {
    // const [filters, setFilters] = useState({ price: "", beds: "", type: "" });

    const filters = [
        {
            type: "sale",
            options: [
                { label: "For Sale", value: "forSale" },
                { label: "For Rent", value: "forRent" },
                { label: "Sold", value: "sold" }]

        },
        {
            type: "homes",
            options: [
                { label: "houses", value: "Houses" },
                { label: "townhomes", value: "Townhomes" },
                { label: "condos", value: "Condos/Co-ops" }]
        }
    ]

    const listings = data.splice(0,5);


    return (
        <div className="mainContainer" style={{ display: "flex", flexDirection: "column", alignContent: "center", margin: '1rem' }}>
            {/* filter Section */}
            <div className="filters" style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
                {filters.map(item => <DropDown options={item.options} />)}
            </div>
            <div className="dataContainer" style={{ display: "flex", gap: '1rem' }}>
                {/* Map Section */}
                <div style={{ width: '70%' }}>

                    <MapComponent listings={listings} />

                </div>

                {/* Listings Section */}
                <div className="listings" style={{ display: "flex", gap: '1rem', flexDirection: "column" , overflowY:"scroll" , height:'100%'}}>
                    {listings.map((listing) => <CardItem details={listing} />)}
                </div>
            </div>

        </div>
    );
}
