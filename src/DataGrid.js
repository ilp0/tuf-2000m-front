import React, { Component } from 'react'
import { Row, Col} from 'react-bootstrap'
import './App.css';

export default class DataGrid extends Component {

    constructor() {
        super()
        this.state={
            isLoaded: false,
            data: []
        }
        this.getData = this.getData.bind(this)
    }
    componentDidMount() {
        this.getData();
    }
    render() {
        if(this.state.isLoaded){
        console.log(this.state.data)
        return (
            <div>
                
                <Row className="legendRow">
                    <Col>Legend and unit</Col><Col>Value</Col>
                </Row>
                <Row><Col>Timestamp</Col><Col>{this.state.data[0]}</Col></Row>
                {this.state.data.map((d, i) => {
                    if(i !== 0){
                   return <Row key={i}><Col>{d[3]}</Col><Col className="dataCol">{d[2]}</Col></Row>
                    }
                })}
            </div>
        )
        } else return "Loading..."
        
    }
    //simple api fetch
    getData(){
        let curDomain = window.location.hostname;
        fetch("http://"+curDomain+":5000")
        .then(res => res.json())
        .then(async (res) => {
            this.setState({
              data: res,
              isLoaded: true
            })
      
          },
          (err) => this.setState({data: err})
        )
    }
}


