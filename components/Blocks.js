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


function Blocks() {
    return (
        <Item sx={{ width: '95%' }} >
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
    )
}

export default Blocks