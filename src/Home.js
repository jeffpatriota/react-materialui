import React from "react";
import {
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    Button,
} from '@material-ui/core';

import {
    Drawer,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider
} from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MoreVert from '@mui/icons-material/MoreVert';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer +1,
    },
    logo: {
        height: 25,
    },
    grow: {
        flexGrow: 1,
    },
    icons: {
        padding: theme.spacing(5),
    },
    space: {
        paddingRight: theme.spacing(10)
    },
    drawer: {
        width: 240,
    }

}))

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        className={classes.icons}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src="/images/preto.png" alt="logo" className={classes.logo} />
                    <div className={classes.grow} />
                    <IconButton
                        className={classes.icons}
                        color="inherit"
                    >
                        <KeyboardVoiceIcon />
                    </IconButton>
                    <div className={classes.space} />
                    <IconButton
                        className={classes.icons}
                        color="inherit"
                    >
                        <MoreVert />
                    </IconButton>
                    <Button startIcon={<AccountCircleIcon />} variant='outlined' color='secondary'>iniciar sessão</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={classes.drawer}
                // sx={{
                //     width: 240,
                //     flexShrink: 0,
                //     [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
                // }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>
    )
}

export default Home;