import React, { Component, useState } from 'react'
import { Modal, Button, Col, Row } from 'react-bootstrap'

import InputNumber from 'rc-input-number';
import 'rc-input-number/assets/index.css';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import { TextField } from '@material-ui/core';
import { FaHourglassHalf } from 'react-icons/fa'

import moment from 'moment'
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
    TimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import Axios from 'axios';

const outerTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#8DC63F',
        },
    },
});


export default class listJourHeure extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            details: { 
                id:1,
                debutMatin: "08:00:00", 
                finMatin: "12:30:00", 
                debutSoir: "14:30:00", 
                finSoir: "19:00:00", 
                dureeConsultation: "15"
            }
        }
    }
    getHours = () => {
        // Axios.get(`http://localhost:8015/disponibilite`).then((dispo) => {
        //     this.setState({ details: [...dispo.data] })
        // }).catch((r) => console.error(r))
    }

   componentDidMount(){
    //    this.getHours()
   }

    annulerModification=()=>{
        this.setState({ show: false})
    }

    setShow = () =>{
        this.setState({ show: true })
    }

    sendData = (id, data)=>{
        // // Axios.put(`http://localhost:8015/disponibilite/${id}`, { id: id, label: data }).then((res) => {
        // //     this.setState({ details: data, show: false })
        // // })
        // console.log(id, data)
    }

    render() {
       
        return (
            <ThemeProvider theme={outerTheme}>
                <div >
                    <Heure setShow={this.setShow} details={this.state.details} />
                    <EditModal show={this.state.show} handleClose={this.annulerModification} details={this.state.details} sendData={this.sendData} />
                </div>
            </ThemeProvider>
        )

    }
}
function Heure(props){
    return(
        <Col lg="6">
        <div className="working-time item">
                <FaHourglassHalf color="white" size="1.5rem" />
            <h2>Working Hours</h2>
                <ul className="w-hours">
                    <li>matin - <span>{moment(props.details.debutMatin, "HH:mm:ss").format('HH:mm')} - {moment(props.details.finMatin, "HH:mm:ss").format('HH:mm')} </span></li>
                    <li>aprés midi - <span> {moment(props.details.debutSoir, "HH:mm:ss").format('HH:mm')} -  {moment(props.details.finSoir, "HH:mm:ss").format('HH:mm')}</span></li>
                    <li>duree de consultation  - <span> {props.details.dureeConsultation} min</span></li>

            </ul>
            <Row className="justify-content-center">
            <button className="btn btn-primary" onClick={props.setShow}>modifier</button>
            </Row>
        </div>
        </Col>
        
    )
}

function EditModal(props) {

    const [debutMatin, setDebutMatin] = useState(new Date("January 01 1970 "+ props.details.debutMatin));
    const [finMatin, setFinMatin] = useState(new Date("January 01 1970 " + props.details.finMatin));

    const [debutSoir, setDebutSoir] = useState(new Date("January 01 1970 " + props.details.debutSoir));
    const [finSoir, setFinSoir] = useState(new Date("January 01 1970 " + props.details.finSoir));


    const [dureeConsultation, setDureeConsultation] = useState(15);

    const saveDonne = (e) =>{
        e.preventDefault();
        props.sendData(props.details.id, { id: props.details.id, debutMatin: moment(debutMatin).format('HH:mm:ss'), finMatin: moment(finMatin).format('HH:mm:ss'), debutSoir: moment(debutSoir).format('HH:mm:ss'), finSoir: moment(finSoir).format('HH:mm:ss'), dureeConsultation: dureeConsultation })

    }
  
 

    return (
        <Modal className="modal-margin" show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>modification des heurs de travails</Modal.Title>
            </Modal.Header>
            <form onSubmit={saveDonne}>
            <Modal.Body>                
                
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Col>
                        <label>les heure du marche matin</label>
                        <Row className="justify-content-around">
                        <TimePicker
                                    value={debutMatin}
                        label="heure de début"
                        ampm={false}
                                    onChange={setDebutMatin}
                        autoOk
                         />
                    <TimePicker
                                    value={finMatin}
                        label="heure de fin"
                        ampm={false}
                                    onChange={setFinMatin}
                        autoOk
                    />
                        </Row>
                        </Col>
                        <Col>
                        <label>les heure du marche de l'aprés midi</label>

                    <Row className="justify-content-around mt-5">
                        <TimePicker
                                    value={debutSoir}
                            label="heure de début"
                            ampm={false}
                                    onChange={setDebutSoir}
                            autoOk
                        />
                        <TimePicker
                                    value={finSoir}
                            label="heure de fin"
                            ampm={false}
                                    onChange={setFinSoir}
                            autoOk
                        />
                    </Row>
                    </Col>
                    </MuiPickersUtilsProvider>
                <Row className="mt-5 justify-content-center">
                    <InputNumber
                        aria-label="Number input example that demonstrates using decimal values"
                        min={2}
                        max={60}
                        step={2}
                        value={dureeConsultation}
                        style={{ width: 100 }}
                        onChange={setDureeConsultation}
                        formatter={value => `${value} min`}
                    />
                    </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="submit">
                    enregistrer
          </Button>
          
                <Button variant="secondary" onClick={props.handleClose}>
                    annuler
          </Button>
            </Modal.Footer>
            </form>
        </Modal>
    )

}