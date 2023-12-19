"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from '@/components/Appbar';
import Blocks from '@/components/Blocks';
import Transactions from '@/components/Transactions';
import { useEffect, useState } from 'react';
import { getLatestBlocks } from './getLatestBlocks';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import { styled, alpha } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const MyComponent = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const fetchBlocks = async () => {
      const latestBlocks = await getLatestBlocks();
      setBlocks(latestBlocks);
    };

    fetchBlocks();
  }, []);
  return (
    <CssBaseline>
      <Box >
        <Appbar></Appbar>

        <Grid sx={{ pt: 1 }}
          container
          spacing={0}
          justifyContent="center">
          <Grid xs={10} md={4}>
            <Item sx={{ width: '95%' }} >
              <List  >
                <Typography variant="h6" align="center" sx={{ flexGrow: 1 }}>
                  Latest Blocks
                </Typography>
                {blocks.map((block) => (
                  <Blocks key={block.number} blocksNumber={block.number} blockTime={block.timestamp} ></Blocks>
                ))}
              </List>
            </Item>
          </Grid>
          <Grid xs={10} md={4} >
            <Transactions></Transactions>
          </Grid>
        </Grid>
      </Box>
    </CssBaseline >

  );
}
export default MyComponent;

