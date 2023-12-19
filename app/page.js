"use client"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CssBaseline from '@mui/material/CssBaseline';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '16ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <CssBaseline>
      <Box sx={{ flexGrow: 0 }}>
        <AppBar variant='outlined' position="static">
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search in EtherEly"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </AppBar>

        <Grid sx={{ mt: 2 }}
          container
          spacing={2}
          // direction="column"
          justifyContent="center"
        // sx={{ minHeight: '100vh' }}
        >
          <Grid xs={10} md={4}>
            <Item >
              <List  >
                <Typography variant="h6" align="center" sx={{ flexGrow: 1 }}>
                  Blocks
                </Typography>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ViewInArIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="68465656" secondary="7 secs ago" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ViewInArIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="26698484" secondary="19 secs ago" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ViewInArIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="684684682" secondary="31 secs ago" />
                </ListItem>
              </List>
            </Item>
          </Grid>
          <Grid xs={10} md={4} >
            <Item>
              <List >
                <Typography variant="h6" align="center" sx={{ flexGrow: 1 }}>
                  Transactions
                </Typography>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <InventoryRoundedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="68465656" secondary="7 secs ago" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <InventoryRoundedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="26698484" secondary="19 secs ago" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <InventoryRoundedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="684684682" secondary="31 secs ago" />
                </ListItem>
              </List>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </CssBaseline >

  );
}
