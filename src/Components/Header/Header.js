import React from 'react'
//import './Header.css'
import Logo from '../../logo-transp.png'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {
    Link
  } from "react-router-dom"
import styled from 'styled-components';

const StyledHeader = styled.header`
height: 80px;
width: 100%;
margin: 0;
background-color: #7fb850;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px 0px 15px 0px #515151;
`

const StyledLogo = styled.div`
width: calc(100% - 60px);
height: 80px;
display: flex;
justify-content: center;
align-items: center;
margin: 0;
a{
  img{
    margin-left: 40px;
    height: 70px;
    max-height: 100px;
    width: auto;
    @media (max-width: 450px) {
      height: auto;
      width: 90%;
        }
}
}
@media (max-width: 1000px) {
  width: 100%;
    }
`

const StyledLink = styled.div`
width: 60px;
height: 60px;
margin: 0;
margin-right: 30px;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 1000px) {
  position: fixed;
  bottom: 20px;
  right: 10px;
  z-index: 999999;
}
a{
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background-color: black;
}
  svg{
          font-size: 40px;
          color: white;
          @media (max-width: 1000px) {
            font-size: 30px;
}
  }
}
`


export default function Header() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
      <StyledHeader>
            <StyledLogo>
              <a href="/">
              <img src={Logo} />
              </a>
            </StyledLogo>
            <StyledLink>
            <Link to="/login">
                <AccountCircle fontSize= 'large' />
            </Link>
          </StyledLink>
      </StyledHeader>
    );
}
