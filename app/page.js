"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from '@/components/Appbar';
import Blocks from '@/components/Blocks';
import Transactions from '@/components/Transactions';

export default function SearchAppBar() {
  return (
    <CssBaseline>
      <Box >
        <Appbar></Appbar>

        <Grid sx={{ pt: 1 }}
          container
          spacing={0}
          justifyContent="center">
          <Grid xs={10} md={4}>
            <Blocks           ></Blocks>
          </Grid>
          <Grid xs={10} md={4} >
            <Transactions></Transactions>
          </Grid>
        </Grid>
      </Box>
    </CssBaseline >

  );
}
