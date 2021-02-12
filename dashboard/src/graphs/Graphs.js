import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Snackbar,
} from '@material-ui/core';
import { createMuiTheme, makeStyles} from '@material-ui/core/styles';

import WeightGraph from '../graphs/WeightGraph';
import BPGraph from '../graphs/BPGraph';
import HeartBPMGraph from '../graphs/HeartBPMGraph';
import NutritionGraph from '../graphs/NutritionGraph';

const useStyles = makeStyles({
  root: {
    margin: '0.4rem',
    borderRadius: '18px',
    border: '4px solid white',
    '&:hover': {
      transition: 'all 0.2s ease-out',
      border: '4px solid #00838d',
    },
  },
  content: {
    maxHeight: '50%',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column'
  },
});

export default function Graphs(props) {
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const cardSize = {
    "xs": 12,
    "sm": 6,
    "md": 6
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={cardSize["xs"]} sm={cardSize["sm"]} md={cardSize["md"]}>
          <Card className={classes.root}>
            <CardContent>
              <WeightGraph />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={cardSize["xs"]} sm={cardSize["sm"]} md={cardSize["md"]}>
          <Card className={classes.root}>
            <CardContent>
              <BPGraph setOpen={setOpen} setMessage={setMessage} notifications={props.notifications} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={cardSize["xs"]} sm={cardSize["sm"]} md={cardSize["md"]}>
          <Card className={classes.root}>
            <CardContent>
              <HeartBPMGraph setOpen={setOpen} setMessage={setMessage} notifications={props.notifications} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={cardSize["xs"]} sm={cardSize["sm"]} md={cardSize["md"]}>
          <Card className={classes.root}>
            <CardContent>
              <NutritionGraph />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Snackbar
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={open}
        onClose={handleClose}
        message={message}
      />
    </div>
  );
}