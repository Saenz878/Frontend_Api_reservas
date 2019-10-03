import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const style = {
    flexGrow: 1
}
const NavBar = () => {
    return (
        <div>
            <AppBar position="static" color="secondary">
                <Toolbar>
                <Button href="http://localhost:3000/reservas2" variant="contained" color="primary" align="center" >
                    LISTAR_RESERVAS
                </Button>
                                       
                    <IconButton edge="start" color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={style} align="center"> 
                        REACT JS
                    </Typography>


                    <Button href="http://localhost:3000/reservas" variant="contained" color="primary" align="left" >
                    INICIO
                </Button>
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;