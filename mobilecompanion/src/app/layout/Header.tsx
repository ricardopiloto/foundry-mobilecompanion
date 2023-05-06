import { AppBar, IconButton, Switch, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

interface Props{
    darkMode: boolean;
    handleTheme: () => void;
}


export default function Header({darkMode, handleTheme}: Props) {
    return (
        <AppBar position='static' sx={{ mb: 4 }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Mobile Companion
                </Typography>
                <Switch checked={darkMode} onChange={handleTheme} color="default" />
            </Toolbar>
        </AppBar>
    )
} 