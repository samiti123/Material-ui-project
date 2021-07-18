import React from 'react';
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from '@material-ui/core';

import PhotoCamera from '@material-ui/icons/';
import useStyles from './styles';
const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <PhotoCamera />
          <Typography variant='h6'>Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          {/* </div><Container maxWidth='sm' style={{marginTop:'100px'}}> */}
          {/* instead of using this style better to make in a makeStyle in other files */}
          <Container maxWidth='sm'>
            <Typography
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              Hello everyone this is a photo album and I'm trying to make this
              sentence as long as possible so we can see how does it look like
              on the screen
            </Typography>
            <div>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See my Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outline' color='primary'>
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
