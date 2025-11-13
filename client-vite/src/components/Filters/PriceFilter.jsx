import {
    Box,
    Button,
    Popover,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Tab,
} from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { FilterContext } from "../../context/filterContext";
import { useState, useContext} from "react";


const MinMaxPayment = ({ value }) => {

  const { updateFilter} = useContext(FilterContext);
  const minData = [
    { label: "No Min", value: 0 },
    { label: "40 Lakh", value: 4000000 },
    { label: "80 Lakh", value: 8000000 },
    { label: "1 Crore", value: 10000000 }
  ];

  const maxData = [
    { label: "2 Crore", value: 20000000 },
    { label: "5 Crore", value: 50000000 },
    { label: "10 Crore", value: 10000000 },
    { label: "15 Crore", value: 15000000 }
  ];

  const handleMinChange = (event) => {
    //onChange({ change: 'min', value: Number(event.target.value) });
    updateFilter('priceMin',  Number(event.target.value))
  };

  const handleMaxChange = (event) => {
    // onChange({ change: 'max', value: Number(event.target.value) });
    updateFilter('priceMax',  Number(event.target.value))
  };

  return (
    <Box sx={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
      <FormControl sx={{ width: '45%' }}>
        <InputLabel id="min-dropdown">Min</InputLabel>
        <Select
          labelId="min-dropdown"
          value={value.min}
          label="Min"
          onChange={handleMinChange}
        >
          {minData.map(({ value, label }) => (
            <MenuItem key={value} value={value}>{label}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ width: '45%' }}>
        <InputLabel id="max-dropdown">Max</InputLabel>
        <Select
          labelId="max-dropdown"
          value={value.max}
          label="Max"
          onChange={handleMaxChange}
        >
          {maxData.map(({ value, label }) => (
            <MenuItem key={value} value={value}>{label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};


function CustomTabs() {
  const [value, setValue] = useState("1");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 20000000 }); // default values

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onMinMaxChange = (data) => {
    console.log(data);
    setPriceRange((prev) => ({
      ...prev,
      [data.change]: data.value,
    }));
  };

  const applyButtonHandler = () => {
    console.log("Apply clicked");
    console.log("Selected Min:", priceRange.min);
    console.log("Selected Max:", priceRange.max);
  };

  return (
    <TabContext value={value}>
      <Typography variant="subtitle1" sx={{ backgroundColor: "lightgrey", padding: '1rem' }}>
        <strong>Price Range</strong>
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', padding: '1rem' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="List Price" value="1" />
          <Tab label="Kista Price" value="2" />
        </TabList>
      </Box>

      <MinMaxPayment value={priceRange} onChange={onMinMaxChange} />

      {/* <Button
        variant="contained"
        onClick={applyButtonHandler}
        sx={{ margin: '1rem 5%', width: '90%' }}
      >
        Apply
      </Button> */}
    </TabContext>
  );
}

export function PriceFilterDropdown() {
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
                Price Range
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
                <CustomTabs />
            </Popover>
        </>
    );
}




