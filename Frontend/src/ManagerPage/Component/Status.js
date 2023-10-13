import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = [
  'Completed',
  'Remaining',
  'Delayed',
  
];



const Status = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(props.stat === "Remaining" ? 1 : 0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index,subId) => {
    setSelectedIndex(index);
    let temp =[...props.allSubTask];
    
  /*  temp[subId].status= 'COmpleted'; */
  temp[subId-1] = { ...temp[subId-1], status: options[index]};
  
  props.setAllSubTask(temp);
  console.log(props.allSubTask);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' }}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText  align="right"
            primary={options[selectedIndex]}
           /* secondary={options[selectedIndex]}*/
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === selectedIndex}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index,props.subId)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
export default Status;