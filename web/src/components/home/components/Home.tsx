import { Typography } from '@material-ui/core';
import React from 'react';
import { useVisibility } from '../../../context/useBank';

function Home() {

  const { visibility } = useVisibility()
  return (
    <div>
      <div>
        <Typography>Balance: </Typography>
      </div>
    </div>
  );
}

export default Home;
