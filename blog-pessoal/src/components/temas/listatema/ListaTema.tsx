import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";
import './ListaTema.css';
import Tema from '../../../models/Tema'
import { busca } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function ListaTema() {

  let navigate = useNavigate()
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state)=> state.tokens
  )
  const [temas, setTemas] = useState<Tema[]>([])

  useEffect(() => {
    if (token == '') {
      toast.error('Você precisa estar logado!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    });
      navigate('/login')
    }
  }, [token])

  async function getTema() {
    await busca(`/temas`, setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getTema()
  }, [temas.length])

  return (
    <>
      {
        temas.map(temas => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Tema
                </Typography>
                <Typography variant="h5" component="h2">
                  {temas.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >
                  
                  <Link to={`/formularioTema/${temas.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft, botao1" size='small' >
                        atualizar
                      </Button>
                    </Box>
                  </Link>

                  <Link to={`/deletarTema/${temas.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary" className="botao2">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                  
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  );
}


export default ListaTema;