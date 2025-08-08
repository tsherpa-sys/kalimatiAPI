import { useContext, useState } from 'react';
import { Box , Checkbox , Button ,Popover , FormControlLabel ,Typography , FormGroup} from '@mui/material';

import { styled } from '@mui/material/styles';
import { FilterContext } from '../../context/filterContext';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}))

function HouseTypeDetails() {
  const { filterValues, setFilterValues } = useContext(FilterContext);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilterValues((prev) => {
      const updatedTypes = checked
        ? [...prev.houseType, name]
        : prev.houseType.filter((type) => type !== name);
      return { ...prev, houseType: updatedTypes };
    });
  };

  // Example checkboxes
  const allHouseTypes = ['Condos', 'Apartments', 'Family Homes'];
  const allHouseTypesTemp = [
    {
        label:"Condos",
        value:"condos"
    },
    {
        label:"Apartments",
        value:"apartments"
    },
    {
        label:"Family Homes",
        value:"family_homes"
    },
    {
        label:"All",
        value:"*"
    },
]

  return (
       <Box sx={{ padding: '1rem' }}>
      <Typography variant="subtitle1" sx={{ marginBottom: '0.5rem' }}>
        House Types
      </Typography>
      <FormGroup>
        {allHouseTypes.map((type) => (
          <FormControlLabel
            key={type}
            control={
              <Checkbox
                name={type}
                checked={filterValues.houseType.includes(type)}
                onChange={handleCheckboxChange}
              />
            }
            label={type}
          />
        ))}
      </FormGroup>
    </Box>
  );
}

export function HouseTypeFilter(){
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
                House Type
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
                <HouseTypeDetails />
            </Popover>
        </>
    );
}
