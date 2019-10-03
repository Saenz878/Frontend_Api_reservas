import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Carné', field: 'carne' },
      { title: 'Nombre', field: 'nombre' },
      { title: 'Dirección', field: 'direccion' },
      { title: 'Facultad', field: 'facultad' },
      { title: 'Fecha de Nacimiento', field: 'fechanacimiento'},
      { title: 'Edad', field: 'edad'},
      { title: 'Departamento', field: 'departamento'},
      { title: 'Pais', field: 'paisd'},
    ],
    data: [],
  });

  return (
    <MaterialTable
      title="Tabla Deportes"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
          props.nombredelmetodo(newData)
          resolve()
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}