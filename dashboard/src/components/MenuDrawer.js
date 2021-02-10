import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginRight: 2
  },
});

export default function MenuDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
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
        <ListItem button key={'todo'} onClick={() => { window.location.assign('/todo') }}>
          <ListItemIcon>{<ListAltOutlinedIcon />}</ListItemIcon>
          <ListItemText primary={'To-do'} />
        </ListItem>
        <ListItem button key={'email'} onClick={() => { window.location.assign('/email') }}>
          <ListItemIcon>{<EmailOutlinedIcon />}</ListItemIcon>
          <ListItemText primary={'Email'} />
        </ListItem>
        <ListItem button key={'docs'} onClick={() => { window.location.assign('/summarizer') }}>
          <ListItemIcon>{<DescriptionOutlinedIcon />}</ListItemIcon>
          <ListItemText primary={'Summarizer'} />
        </ListItem>
        <ListItem button key={'grades'} onClick={() => { window.location.assign('/grades') }}>
          <ListItemIcon>{<SchoolOutlinedIcon />}</ListItemIcon>
          <ListItemText primary={'Grades'} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={'left'}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon onClick={toggleDrawer('left', true)}/>
        </IconButton>
        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}