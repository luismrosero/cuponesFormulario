/*************************************************
 * nombre:       Formulario
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/
import {React, useState, createRef} from "react";
import {Button, Grid, TextField, Typography} from "@mui/material";
import {fire} from "./fire";

const Formulario = () => {
    const [correo, setCorreo] = useState('');
    const [pass, setPass] = useState('')
    const [nombre,setNombre] = useState('');
    const [img, setImg] = useState('');
    const hiddenFileInput = createRef(null);

    const onChange = (e) => {
        e.preventDefault();
        setImg('');
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        subir(files[0])

    };

    const clickBoton = (e) => {
        e.preventDefault();

        hiddenFileInput.current.click();
    };

    const subir = (crop) => {

        let nom = new Date().getTime();
        const uploadTask = fire
          .storage()
          .ref(   `images/` + nom)
          .put(crop);
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            console.log(error);
          },
          () => {
            fire
              .storage()
              .ref("images/"+nom)
              .getDownloadURL()
              .then((url) => {
                setImg(url);
                //setCargando(false);
              });
          }
        );
    };

    const crearComercio = () =>{
        if (correo !== '' && pass !== '' && nombre !== '' && img !== ''){

            fire.auth().createUserWithEmailAndPassword(correo, pass).then((dox) =>{

                let id = correo.replaceAll("@","_");
                id = id.replaceAll(".","-");

                let com = {
                    id: id,
                    correo: correo,
                    img: img,
                    nombre: nombre,
                }

                fire.firestore().collection("comercios").doc(com.id).set(com).then((dox) =>{
                    alert("Comercio creado con exito")
                }).catch((err) =>{
                    alert(err)
                })


            }).catch((err) =>{
                alert(err)
            })




        }else{
            alert("Todos los campos son obligatorios")
        }
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
        >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                sx={{ padding: 16}}
            >
                <Grid item container>
                    <Typography>Formulario Ingreso Comercio</Typography>
                </Grid>


                <Grid item container sx={{marginTop: 2}} >
                    <TextField
                        label={"Correo"}
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        sx={{width: 350}}
                    />
                </Grid>


                <Grid item container sx={{marginTop: 2}}  >
                    <TextField
                        label={"Constraseña"}
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        sx={{width: 350}}
                    />
                </Grid>

                <Grid item container sx={{marginTop: 2}} >
                    <TextField
                        label={"Nombre del Local"}
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        sx={{width: 350}}
                    />
                </Grid>



                <Grid item container sx={{marginTop:4}} >
                    <input
                        type="file"
                        onChange={onChange}
                        ref={hiddenFileInput}
                        style={{ display: 'none' }}
                    />
                    <Button variant={"contained"} color={"primary"}  onClick={(e) => clickBoton(e)} >Escoger imagen</Button>
                </Grid>



                <Grid item container sx={{marginTop:6}} >
                    <img src={img} width={250}/>
                </Grid>

                <Grid item container sx={{marginLeft: 10, marginTop: 6}} >
                  <Button variant={"contained"} color={"secondary"}  onClick={() => crearComercio()} >Crear Comercio</Button>
                </Grid>


            </Grid>

        </Grid>
    );
};
export default Formulario;
