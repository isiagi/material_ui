import { Grid } from '@mui/material';
import { styled } from '@mui/styles';
import React from 'react';
import LeftBar from './components/LeftBar';
import NavBar from './components/NavBar';
import Feed from './components/Feed';
import RightBar from './components/RightBar';

import './App.css';
import Add from './components/Add';

const ColorButton = styled(Grid)(({ theme }) => ({
  
}));

function App() {
  return (
    <div className="app">
      {/* <ColorButton startIcon={<Person />}>Heyy</ColorButton> */}
      <NavBar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <ColorButton item sm={3} xs='none'>
          <RightBar />
        </ColorButton>
      </Grid>
      <Add />
    </div>
  );
}

export default App;
