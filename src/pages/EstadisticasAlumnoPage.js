import React from 'react';
import GraficoRadar from '../components/GraficoRadar';
import Estadisticas from './Estadisticas';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

class EstadisticasAlumnoPage extends Estadisticas {


  state = {
    carrera: '',
    alumno: '',
    plan: '',
    fecha_inicio: '',
    fecha_fin: '',
    data_set: false
  }

  submit = e => {
    e.preventDefault();
    const { carrera, alumno, plan, fecha_inicio, fecha_fin } = e.currentTarget.elements;
    this.setState({ carrera: carrera.value, alumno: alumno.value, plan: plan.value, fecha_inicio: fecha_inicio.value, fecha_fin: fecha_fin.value });
  }

  renderForm = () => {
    return (
      <form onSubmit={e => this.submit(e)}>
        <FormControl fullWidth>
          <TextField id="carrera"
            label="Carrera"
            variant="outlined"
            placeholder="Codigo de carrera"
            InputLabelProps={{
              shrink: true,
            }} />
        </FormControl>
        <FormControl fullWidth>
          <TextField id="alumno"
            label="Alumno"
            variant="outlined"
            placeholder="Legajo de alumno"
            InputLabelProps={{
              shrink: true,
            }} />
        </FormControl>
        <FormControl fullWidth>
          <TextField id="plan"
            label="Plan"
            variant="outlined"
            placeholder="Plan"
            InputLabelProps={{
              shrink: true,
            }} />
        </FormControl>
        <FormControl fullWidth>
          <TextField id="fecha_inicio"
            label="Fecha Inicio"
            type="date"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }} />
        </FormControl>
        <FormControl fullWidth>
          <TextField id="fecha_fin"
            label="Fecha Fin"
            type="date"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }} />
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary">
          Calcular Estadisticas
              </Button>
      </form>
    )

  }

  renderEstadisticas = () => {
    return (
      <>
        <GraficoRadar titulo={'Porcentajes de aprobacion por area'}
          url={`${process.env.REACT_APP_ESTADISTICAS_URL}/alumnos/${this.state.alumno}/porcentajes-areas?carrera=${this.state.carrera}&plan=${this.state.plan}&inicio=${this.state.fecha_inicio}&fin=${this.state.fecha_fin}`} />
        <GraficoRadar titulo={'Porcentajes de aprobacion por nucleo'}
          url={`${process.env.REACT_APP_ESTADISTICAS_URL}/alumnos/${this.state.alumno}/porcentajes-nucleos?carrera=${this.state.carrera}&plan=${this.state.plan}&inicio=${this.state.fecha_inicio}&fin=${this.state.fecha_fin}`} />
      </>
    )
  }

}

export default EstadisticasAlumnoPage;