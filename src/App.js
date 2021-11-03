import logo from './logo.svg';
import './App.css';
import {React, useState} from 'react'
import Login from "./Login";
import {Grid} from "@mui/material";
import Formulario from "./Formulario";

function App() {
    const  [usuario, setUsuario] = useState(null);
  return (
     <Grid
       container
       direction="row"
       justifyContent="flex-start"
       alignItems="center"
      >

         {usuario === null ? <Login setUsuario={setUsuario} /> : <Formulario/>}

      </Grid>

  );
}

export default App;
