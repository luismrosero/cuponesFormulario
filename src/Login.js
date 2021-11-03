/*************************************************
 * nombre:       Login
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/
import {React, useState} from "react";
import {Button, Grid, TextField} from "@mui/material";


const Login = (props) => {
    const {usuario, setUsuario} = props;
    const [usu, setUsu] = useState('');
    const [pass, setPass] = useState('');

    const entrar = () =>{
        if (usu === "Admin" && pass === "admin0110" ){
            setUsuario(true);
        }else{
            alert("Usuario y/o constraseña erradas")
        }
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{height: "100vh"}}
        >

            <Grid item sx={{boxShadow: 4, borderRadius: 1}}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    sx={{padding: 2}}
                >

                    <Grid item container sx={{marginTop: 4}} >
                        <TextField
                            label={"Usuario"}
                            fullWidth
                            value={usu}
                            onChange={(e) => setUsu(e.target.value)}
                        />
                    </Grid>


                    <Grid item container sx={{marginTop: 4}}>


                        <TextField
                            label={"Constraseña"}
                            fullWidth
                            type={"password"}
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}

                        />
                    </Grid>

                    <Grid item container sx={{justifyContent: "center", marginTop: 4}} >
                      <Button  variant={"contained"} color={"primary"}  onClick={() => entrar()} >Ingresar</Button>
                    </Grid>


                </Grid>


            </Grid>


        </Grid>
    );
};
export default Login;
