import React, { Component } from 'react'
import Service from "../../Service/service";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
//import './AgregarAlumno.css';
//import ListItem from '@material-ui/core/ListItem';


class AgregarReservas extends Component {




    constructor(props) {
        super(props);
        this.state = {
            carnet: '',
            nombre: '',
            apellido: '',
            dependencia: '',
            jubilado: '',
            descuento: '',
            message: null
        }
        this.saveReservas = this.saveReservas.bind(this);
    }

    saveReservas = (e) => {
        e.preventDefault();
        let reservas = {
            carnet: this.state.carnet,
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            dependencia: this.state.dependencia,
            jubilado: this.state.jubilado,
            descuento: this.state.descuento
        };
        Service.addReservas(reservas)
            .then(res => {
                this.setState({ message: 'Reservasadded successfully.' });
                this.props.history.push('/reservas');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {

        return (
            <div>
                <Typography variant="h4" style={style}>Agregar Reservas</Typography>
                
                <Container maxWidth="sm">
                    <form style={formContainer}>

                        <TextField variant="outlined" margin="normal" required id="carnet" label="Carnet"
                            fullWidth margin="normal" name="carnet" value={this.state.carnet} onChange={this.onChange} autoFocus />

                        <TextField variant="outlined" margin="normal"  id="nombre" label="Nombre"
                            fullWidth margin="normal" name="nombre" value={this.state.nombre} onChange={this.onChange} />

                        <TextField variant="outlined" margin="normal"  id="apellido" label="Apellido"
                            fullWidth margin="normal" name="apellido" value={this.state.apellido} onChange={this.onChange} />

                        <TextField variant="outlined" margin="dependencia"  id="dependencia" label="Dependencia"
                            fullWidth margin="normal" name="dependencia" value={this.state.dependencia} onChange={this.onChange} />

                        <TextField variant="outlined" margin="jubilado"  id="jubilado" label="Jubilado"
                            fullWidth margin="normal" name="jubilado" value={this.state.jubilado} onChange={this.onChange} />

                        <TextField variant="outlined" margin="descuento"  id="descuento" label="Descuento"
                            fullWidth margin="normal" name="descuento" value={this.state.descuento} onChange={this.onChange} />

                        <Button variant="contained" size="large" color="primary" onClick={this.saveReservas}>Guardar</Button>
                    </form>
                </Container>
                
            </div>
        );
    }
}
const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'

};

const style = {
    display: 'flex',
    justifyContent: 'center'

}

export default AgregarReservas;