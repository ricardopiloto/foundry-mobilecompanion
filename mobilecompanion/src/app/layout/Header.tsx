import { AppBar, Box, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
    darkMode: boolean;
    handleTheme: () => void;
}

const midLinks = [
    { title: 'worldList', path: '/worldscatalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
]

const navStyles = {
    color: 'inherit',
    typography: 'h7',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
}

// const rightLinks = [
//     {title: 'worldList', path: '/worldcatalog'},
//     {title: 'about', path: '/about'},
//     {title: 'contact', path: '/contact'},
// ]


export default function Header({ darkMode, handleTheme }: Props) {
    return (
        <AppBar position='static' sx={{ mb: 4 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display="flex" alignItems="center" >
                    <Typography variant="h6" component={NavLink} to='/' sx={{ color: 'inherit', textDecoration: 'none' }}>
                        Mobile Companion
                    </Typography>
                    <Switch checked={darkMode} onChange={handleTheme} />
                </Box>
                <Box display="flex" alignItems="center" >
                    <List sx={{ display: 'flex' }}>
                        {midLinks.map(({ title, path }) => (
                            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
} 