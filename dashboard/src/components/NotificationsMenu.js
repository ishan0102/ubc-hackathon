import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const useStyles = makeStyles({
  list: {
    width: 400,
  },
  fullList: {
    width: 'auto',
  },
  notifsIcon: {
    marginRight: 2
  },
});

export default function NotificationsMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    right: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          {/* <ListItemIcon>{<PersonIcon />}</ListItemIcon> */}
          <ListItemText primary={'Your blood pressure is too low!'} />
        </ListItem>
        <ListItem>
          {/* <ListItemIcon>{<LocalHospitalIcon />}</ListItemIcon> */}
          <ListItemText primary={'Your weight is too low!'} />
        </ListItem>
        <ListItem>
          {/* <ListItemIcon>{<LocalHospitalIcon />}</ListItemIcon> */}
          <ListItemText primary={'Don\'t forget to check your Heart Rate.'} />
        </ListItem>
        <ListItem>
          {/* <ListItemIcon>{<LocalHospitalIcon />}</ListItemIcon> */}
          <ListItemText primary={'Your weight is too high!'} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={'right'}>
        <IconButton edge="start" className={classes.notifsIcon} color="inherit" aria-label="notifs">
          <NotificationsIcon onClick={toggleDrawer('right', true)}/>
        </IconButton>
        <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
          {list('right')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}