import { useState, useContext} from 'react';
import { Box, Typography, Button, Popover } from '@mui/material';
import Slider from '@mui/material/Slider';
import { FilterContext } from '../../context/filterContext';

function CountSlider({ marks, value, onChange }) {
  const maxVal = marks[marks.length - 1].value;
  const minVal = marks[0].value;

  return (
    <Box sx={{ width: 300, padding: '1rem' }}>
      <Slider
        value={value}
        onChange={onChange}
        aria-label="Count Slider"
        step={1}
        min={minVal}
        max={maxVal}
        marks={marks}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}

function BedBathTab() {

  const { filterValues, setFilterValues } = useContext(FilterContext);

  const handleBedChange = (event, newValue) => setFilterValues({...filterValues, beds:newValue})
  const handleBathChange = (event, newValue) => setFilterValues({...filterValues, bath:newValue})

  const bedMarks = [
    { value: 0, label: 'Studio' },
    { value: 1, label: '1+' },
    { value: 2, label: '2+' },
    { value: 3, label: '3+' },
    { value: 4, label: '4+' },
    { value: 5, label: '5+' },
    { value: 6, label: '6+' },
  ];

  const bathMarks = [
    { value: 1, label: '1+' },
    { value: 2, label: '2+' },
    { value: 3, label: '3+' },
    { value: 4, label: '4+' },
  ];

  const applyButtonHandler = () => {
   // onApply({ bedCount, bathCount });
  };

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ backgroundColor: 'lightgrey', padding: '1rem' }}>
        <strong>Bedrooms</strong>
      </Typography>
      <CountSlider marks={bedMarks} value={filterValues.beds} onChange={handleBedChange} />
      <Typography variant="subtitle1" sx={{ backgroundColor: 'lightgrey', padding: '1rem' }}>
        <strong>Bathrooms</strong>
      </Typography>
      <CountSlider marks={bathMarks} value={filterValues.bath} onChange={handleBathChange} />
      {/* <Button variant="contained" onClick={applyButtonHandler} sx={{ margin: '1rem 5%', width: '90%' }}>
        Apply
      </Button> */}
    </Box>
  );
}

export function BedBathFilter() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleApply = ({ bedCount, bathCount }) => {
    console.log('Beds:', bedCount, 'Baths:', bathCount);
    handleClose();
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Button onClick={handleOpen} variant="outlined" sx={{ width: 200, justifyContent: 'space-between' }}>
        Beds & Baths
      </Button>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        PaperProps={{
          sx: { mt: 1 },
        }}
      >
        <BedBathTab onApply={handleApply} />
      </Popover>
    </>
  );
}
