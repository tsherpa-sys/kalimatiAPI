import { useContext, useState } from 'react';
import { Box ,  Button ,Popover , FormControlLabel, RadioGroup, Radio } from '@mui/material';


import { FilterContext } from '../../context/filterContext';


function SaleTypeDetails() {

    const allSaleTypes =["Sale", "Rent", "Sold"]
    const [selectedSaleType,setSelectedSaleType] = useState(allSaleTypes[0])

    const {updateFilter} = useContext(FilterContext)
    const applyButtonHandler = () => {
        updateFilter('saleType', selectedSaleType)
    }

    const onDataChange = (event, value)=>{
        setSelectedSaleType(value)
        updateFilter('saleType', value)
    }
    return (
        <Box> 
            <RadioGroup sx={{ display:'flex' ,flexDirection:'column' ,padding:'1rem'}} onChange={onDataChange}>
            {
                allSaleTypes.map(item =>  <FormControlLabel key={item} value={item} control={<Radio />} label={item}/>)
            }
            </RadioGroup>
            {/* <Button variant="contained" onClick={applyButtonHandler} sx={{ margin: '1rem 5%', width: '90%' }}>
                Apply
            </Button> */}
        </Box>
    )
}

export function SaleTypeFilter(){
     const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            {/* This looks like a Select dropdown but just a trigger */}
            <Button
                onClick={handleOpen}
                variant="outlined"
                sx={{ width: 200, justifyContent: "space-between" }}
            >
                Sale Type
            </Button>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                PaperProps={{
                    sx: { mt: 1 },
                }}
            >
                <SaleTypeDetails/>
            </Popover>
        </>
    );
}
