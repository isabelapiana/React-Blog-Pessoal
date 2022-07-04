import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
//import {Paper} from "@material-ui/core;"
import './Home.css';
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";

/*
function Home(){
    return (
        <>
            <h1 className="titulo">Home</h1>
            <img src="https://www.mediacaonline.com/blog/wp-content/uploads/2021/05/img12.jpg" alt="Imagem Tela Inicial" className="img"/>
        </>
    );
}
*/

/*function Home(){
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                    <Paper style={{height: "100vh", background: "lightgrey"}}/>
                </Grid>
                <Grid item container direction="column" xs={12} sm={4} spacing={2}>
                    <Grid item>
                        <Paper style={{height: "49vh", background: "orange"}}/>
                    </Grid>
                    <Grid item>
                        <Paper style={{height: "49vh", background: "green"}}/>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
    */

/*
function Home(){
    return (
         <>
            <Paper>
                <Box p={2}>
                    <Box display="flex" justifyContent="center">
                        <h1>Título</h1>
                    </Box>
                    <img src="https://vumbnail.generation.org/328192920_large.jpg" alt="Logotipo com pessoas" style={{width: "100%", height: "100%"}}></img>
                    <Box display="flex" justifyContent="center" p={2}>
                        <Button variant="contained" color="primary">Texto1</Button>
                        <Button variant="contained" color="secondary">Texto2</Button>
                    </Box>
                </Box>
            </Paper>
         </>
    );
}
*/

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Bem-vinde ao meu blog pessoal!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="botao">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/IOlxpLS.png" alt="" width="500px" height="500px" className="br-50"/>
                </Grid>
                <Grid xs={12} className="postagens">
                    <TabPostagem/>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;