import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

function Blocks(blocksNumber) {
const timeDifference = Math.floor((Date.now()/1000 - blocksNumber.blockTime)) + " secs ago"
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <ViewInArIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={blocksNumber.blocksNumber} secondary={timeDifference} />
        </ListItem>
    )
}

export default Blocks