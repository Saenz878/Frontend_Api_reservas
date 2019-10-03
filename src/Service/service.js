import axios from 'axios';

const RESERVAS_API_URL = 'http://localhost:8080/reservas';

class Service {

    fetchReservas() {
        return axios.get(RESERVAS_API_URL);
    }
    fetchReservasById(reservasId) {
        return axios.get(RESERVAS_API_URL + '/' + reservasId);
    }

    eliminarReservas(reservasId) {
        return axios.delete(RESERVAS_API_URL + '/' + reservasId);
    }

    addReservas(reservas) {
        return axios.post("" + RESERVAS_API_URL + '/', reservas);
    }

    editarReservas(reservas) {
        return axios.put(RESERVAS_API_URL + '/' + reservas.id, reservas);
    }

}

export default new Service();