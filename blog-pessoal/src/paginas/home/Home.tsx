import React from "react";
import { Grid, Box, Button, Typography } from "@material-ui/core";
//import {Paper} from "@material-ui/core;"
import './Home.css';

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
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#d3777d" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#975261", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;