import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import Service from '../../Service/service';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
//import { makeStyles } from '@material-ui/core/styles';
//import MaterialTable from 'material-table'; //jwfdsjafjsajfdksjfa

class MostrarLista2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            reservas: [],
            message: null
        }
         this.listarreservas = this.listarreservas.bind(this);
         }

    componentDidMount() {
        this.listarreservas();
    }

    listarreservas() {
        Service.fetchReservas()
            .then((response) => {
                this.setState({ reservas: response.data })
            });
    }

    



    render() {
        return (           

            <div>
                
                <Typography variant="h4" style={style}>Reservas</Typography>

               

                 

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Carnet</TableCell>
                            <TableCell align="right">Nombre</TableCell>
                            <TableCell align="right">Apellido</TableCell>
                            <TableCell align="right">Dependencia</TableCell>
                            <TableCell align="right">Jubilado</TableCell>
                            <TableCell align="right">Descuento</TableCell>
                           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.reservas.map(row => (
                            <TableRow key={row.id}>

                                <TableCell align="right">{row.carnet}</TableCell>
                                <TableCell align="right">{row.nombre}</TableCell>
                                <TableCell align="right">{row.apellido}</TableCell>
                                <TableCell align="right">{row.dependencia}</TableCell>
                                <TableCell align="right">{row.jubilado}</TableCell>
                                <TableCell align="right">{row.descuento}</TableCell>

                            
                            
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        );
    }

}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

const styleadd = {
    display: 'flex',
    //flexFlow: 'row wrap',
    justifyContent: 'flex-end'
}



export default MostrarLista2;