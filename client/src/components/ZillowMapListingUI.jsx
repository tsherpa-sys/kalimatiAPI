import { useContext, useState } from "react";

import { Card, CardContent } from "@mui/material"

import { Select, MenuItem } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import MapComponent from "./map"
import { data } from '../data/data'

import {ListingContext, ListingsProvider} from '../context/listingsContext'
function DropDown({options, onChange}) {

    const { listings, setListings, fetchListings, allListings } = useContext(ListingContext);


    const [listingType, setListingType] = useState((options[0]).value);

    const handleChange = (event) => {
        onChange(event)
        setListingType(event.target.value);
        const filteredData = allListings.filter(item=> item.listingType.toLowerCase() == event.target.value.toLowerCase())
        setListings(filteredData)
    };

    return (

        <Select
            value={listingType}
            onChange={handleChange}
            label="Age"
            name={listingType}
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
        <Card sx={{ maxWidth: 345, marginBottom: '1rem' }}>
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
    
 const {listings} = useContext(ListingContext)


    const filters = [
        {
            type: "listingType",
            options: [
                { label: "For Sale", value: "sale" },
                { label: "For Rent", value: "rent" },
                { label: "Sold", value: "sold" }]

        },
        {
            type: "propertyType",
            options: [
                { label: "House", value: "house" },
                { label: "Room", value: "room" },
                { label: "Condos", value: "condo" },
                { label: "Apartment", value: "apartment" },
            ]
        }
    ]

    const filterChangedHandler =(event)=>{
        console.log("filter changed event, target:",event.target.value)
    }

    return (
        <div className="mainContainer" style={{ display: "flex", flexDirection: "column", alignContent: "center", margin: '1rem' }}>
            {/* filter Section */}
          
            <div className="filters" style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
                {filters.map(item => <DropDown options={item.options} onChange={filterChangedHandler}/>)}
            </div>
           
            <div
                className="dataContainer"
                style={{
                    display: "flex",
                    gap: "1rem",
                    height: "100vh", // This is key so the child knows how tall to be
                    overflow: "hidden", // Optional to prevent unwanted scrollbars
                }}
            >
                {/* Map Section */}
                <div style={{ width: "70%" }}>
                    <MapComponent />
                </div>

                {/* Listings Section */}
                <div
                    className="listings"
                    style={{
                        display: "block",
                        flexDirection: "column",
                        gap: "1rem",
                        overflowY: "auto",
                        height: "100%", // Fill the full height of parent
                        width: "30%", // Optional if needed
                    }}
                >
                    <p>{listings.length}</p>
                    {listings.map((listing, idx) => (
                        <CardItem key={idx} details={listing} />
                    ))}
                </div>
            </div>
    
        </div>
    );
}
