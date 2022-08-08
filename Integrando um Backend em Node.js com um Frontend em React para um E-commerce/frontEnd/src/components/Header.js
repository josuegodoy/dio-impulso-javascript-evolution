import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12} className="cabecalho">
            <Typography variant='h3'>
                <a href="http://contoso.info" target="_blank">
                <img className="avatar" src="https://www.logolynx.com/images/logolynx/f3/f30b301e873ba6a1ab25d7b69288fb38.jpeg"/>Contoso Shopping</a>
            </Typography>
            <Link to="/">
                <Button color="primary">Home</Button>
            </Link>
            <Link to="/contato">
                <Button color="primary">Contato</Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
