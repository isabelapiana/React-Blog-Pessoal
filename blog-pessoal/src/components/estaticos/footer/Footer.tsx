import React from "react";
import { Grid, Typography } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import { Box } from "@mui/material";
import './Footer.css'

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="box1">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className="textos">Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.linkedin.com/in/isabela-piana/" target="_blank">
                                <LinkedInIcon className="redes" />
                            </a>
                            <a href="https://github.com/isabelapiana" target="_blank">
                                <GitHubIcon className="redes" />
                            </a>
                        </Box>
                    </Box>
                    <Box className="box2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="textos" >© 2022 Copyright | Todos os Direitos Reservados</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="bpspring.herokuapp.com/">
                                <Typography variant="subtitle2" gutterBottom className="textos" align="center">bpspring.herokuapp.com/</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;