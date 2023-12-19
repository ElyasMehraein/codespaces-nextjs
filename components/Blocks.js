import React from 'react'
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { styled, alpha } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Blocks({ number }) {

    return (
        <Item sx={{ width: '95%' }} >
            <List  >
                <Typography variant="h6" align="center" sx={{ flexGrow: 1 }}>
                    Latest Blocks
                </Typography>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ViewInArIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={number} secondary="7 secs ago" />
                </ListItem>



            </List>
        </Item>
    )
}

export default Blocks