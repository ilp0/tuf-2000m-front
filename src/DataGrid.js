import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

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
                <Row><Col>{this.state.data[0]}</Col></Row>
                {this.state.data.map((d, i) => {
                    if(i != 0){
                   return <Row><Col>{d[3]}</Col><Col>{d[2]}</Col></Row>
                    }
                })};
            </div>
        )
        } else return "Loading..."
        
    }

    getData(){
        let curDomain = window.location.hostname;
        fetch("http://192.168.1.13:5000")
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


