import { useContext, useState } from "react";

import { Card, CardContent } from "@mui/material"

import { Select, MenuItem } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import MapComponent from "./map"
import { data } from '../data/data'
import { ResponsiveAppBar } from '../components/ResponsiveAppBar.jsx'
import { ButtonAppBar } from '../components/AppBar.jsx'
import { ListingContext, ListingsProvider } from '../context/listingsContext'
import { Box } from '@mui/material';
import {SearchBox} from  '../components/SearchBox'
import {PriceFilterDropdown} from './Filters/PriceFilter.jsx'
import {BedBathFilter} from './Filters/BedBathFilter.jsx'
import {HouseTypeFilter} from './Filters/HouseFilter.jsx'
import {SaleTypeFilter} from './Filters/SaleFilter.jsx'
import { FilterValueProvider } from "../context/filterContext.jsx";

function DropDown({ options, onChange }) {

    const { listings, setListings, fetchListings, allListings } = useContext(ListingContext);


    const [listingType, setListingType] = useState((options[0]).value);

    const handleChange = (event) => {
        onChange(event)
        setListingType(event.target.value);
        const filteredData = allListings.filter(item => item.listingType.toLowerCase() == event.target.value.toLowerCase())
        setListings(filteredData)
    };

    return (

        <Select
            value={listingType}
            onChange={handleChange}
            label="Age"
            name={listingType}
            inputProps={{ 'aria-label': 'Without label' }}
            size="small"
            sx={{
                fontSize: '0.8rem',
                height: '40px',
            }}
        >

            {options.map(item => <MenuItem value={item.value}>{item.label}</MenuItem>)}

        </Select>
    )
}

function CardItem(props) {
    const { details } = props
    const { image, price, address, beds, baths, size } = details;
    return (
        <Card sx={
            { 
                width:{xs:'96%', sm:'55%'},
                flex: { sm: '1 1 50%' },
                maxWidth : {
                    xs:'100%',
                    sm:'45%',
                    md:'30%',
                    lg:'48%'
                },
               border:'solid grey 1px'
            }
            }>
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

function ListingSummary({ count }) {
    return (
        <Box sx={{ textAlign: 'left', my: 1 }}>
            <Typography variant="body1" gutterBottom>
                <strong>Real Estate & Homes For Sale</strong>
            </Typography>
            <Typography variant="body2">
                {count} results
            </Typography>
        </Box>
    );
}


export default function MainContainer() {

    const { listings } = useContext(ListingContext)

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

    const filterChangedHandler = (event) => {
        console.log("filter changed event, target:", event.target.value)
    }

    return (
        <div className="mainContainer" style={{ display: "flex", flexDirection: "column", alignContent: "center", margin: '0.5rem' }}>

            <ResponsiveAppBar />
            {/* filter Section */}
            <Box sx={{ display: 'flex', gap: '1rem', padding: '0.5rem 0rem', background: 'white' , flexWrap:'wrap'}}>
                <FilterValueProvider>
                    <Box sx={{flex:{xs:'1 1 100%', md:'0 1 auto' , width:{md:'500px'}}, minWidth:0}}>
                        <SearchBox/>
                    </Box>
                    <Box sx={{display:{xs:'none' ,sm:'flex'} ,flexWrap:'wrap',gap:'1rem', flex:{xm:'1 1 100%',sm:'1 1 auto'}}}>
                        <PriceFilterDropdown/>
                        <BedBathFilter/>
                        <HouseTypeFilter/>
                        <SaleTypeFilter/>
                    </Box>
                   
                
                </FilterValueProvider>

                {/* {filters.map(item => <DropDown options={item.options} onChange={filterChangedHandler} />)} */}
            </Box>

            <div
                className="dataContainer"
                style={{
                    display: "flex",
                    gap: "1rem",
                    height: "80vh", // This is key so the child knows how tall to be
                    overflow: "hidden", // Optional to prevent unwanted scrollbars

                }}
            >
                {/* Map Section */}
                <Box component="section"
                    sx={{
                        border: '1px solid grey',
                        display: { md: 'none', lg: 'block' },
                        width: { md: '60%' },
                    }}>
                    <MapComponent />
                </Box>
                {/* Listings Section */}
                <Box component="section" sx={{
                    display: { xs: 'flex', md: 'block' },
                    flexDirection: 'column',
                    gap: '1rem',
                    overflowY: "auto",
                    height: '100%',
                    width: { md: '40%' },
                    
                    textAlign:'center',
                    
                    flexGrow: 1, // optional: to ensure layout
                }}>
                    <ListingSummary count={listings.length} />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 
                        {
                            xs:'column', sm:'row'
                        },
                        flexWrap:'wrap',
                        justifyContent:'center',
                        gap:'1rem'
                    }}>
                        {listings.map((listing, idx) => (
                            <CardItem key={idx} details={listing} />
                        ))}
                    </Box>
                </Box>
            </div>

        </div>
    );
}
