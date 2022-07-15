import React, {useState} from 'react';
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';

function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered className="back1" onChange={handleChange}>
            <Tab className='fonte' label="Todas as postagens" value="1"/>
            <Tab className='fonte' label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom className='textoSobre' align="center">
            Olá! Meu nome é Isabela, participante da turma 52 do Bootcamp da Generation Brasil, no qual foi possível desenvolver este projeto.
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;