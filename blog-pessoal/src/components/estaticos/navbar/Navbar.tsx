import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
import useLocalStorage from "react-use-localstorage";

function Navbar() {

    const [token, setToken] = useLocalStorage('token')
    let navigate = useNavigate()

    function goLogout() {
        setToken('')
        alert("Usuário deslogado!")
        navigate('/login')
    }

    return (
        <>
            <AppBar position="static" className="back">
                <Toolbar variant="dense" className="toolbar">
                    <Box className="cursor" >
                        <Link to='/home' className='text-decorator-none'>
                            <Typography variant="h5" color="inherit" className="fonte">
                                Blog Pessoal
                            </Typography>
                        </Link>
                    </Box>

                    <Box display="flex" justifyContent="start">

                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit" className="fonte">
                                    Home
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/posts' className='text-decorator-none'>
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit" className="fonte">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/tema' className='text-decorator-none'>
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit" className="fonte">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/formularioTema' className='text-decorator-none'>
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit" className="fonte">
                                    Cadastrar tema
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className="cursor" onClick={goLogout}>
                            <Typography variant="h6" color="inherit" className="fonte">
                                Logout
                            </Typography>
                        </Box>

                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;