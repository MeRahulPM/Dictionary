import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-grid-system';
import {TextField,Button,Grid } from '@material-ui/core';
const ud = require('urban-dictionary')

const style = {
  titleItemRight: {
    color: "white",
    backgroundColor: "blue",
    top: "50%",
    height: 30,
    float: "right",
    position: "relative",
    transform: "translateY(-50%)"
  }
};
var style1 = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}
var header ={
  padding: '40px',
  textAlign: 'center',
  background: '#1abc9c',
  color: 'white',
  fontSize: '30px'
}
class App extends Component{
  
  constructor(props){
    super(props)
    this.state={text:'',definition:'',example:'',clicked:false,error:''}
    
  }
 searchHandle(){
   
  var definition = this.state.text
  this.setState({error:''})
    ud.term(definition, (error, entries, tags, sounds) => {
      if (error) {
        this.setState({error:"Not found! , Please try something else"})
      } else {
        
     
        console.log(entries[0].word)
     
        this.setState({definition:entries[0].definition,
          example:entries[0].example
          
        })
        this.setState({clicked:true})
      }
    })
  }
 handleChange=(event) =>{
   
    this.setState({
                  text: event.target.value
                  })
  }

  render(){
    

    return (
      <div className="App">


        <Container>
        <div style={header}>
        <Row>
            <Col >
            <center><h1>Word Play English Dictionary</h1></center> <br></br>
            <center><h6>Have fun</h6></center>
            </Col>
           
          </Row>
        </div>
          
          </Container>
          <Container>
          <Row>
            <Col >
              <form  noValidate autoComplete="off">
              
              <TextField size ='small' fullWidth='true' id="outlined-basic" label="Type the word here!" variant="outlined"   onChange={this.handleChange}/>
              <Button variant="contained" color="primary" className={style.titleItemRight} onClick={this.searchHandle.bind(this)}>
              Search
              </Button>
              </form>
              
            </Col>
          </Row>
          {this.state.clicked===true?<div>
          <Container>
          <Row>
            <label><b>Definition</b></label><br></br>
            <Col>{this.state.definition}</Col> 
          </Row>
          <Row>
            <label><b>Example</b></label><br></br>
             <Col>{this.state.example}</Col>
          </Row>
          </Container>
          </div>
          
          :null}

          {this.state.error!==''?<div>
          <label>{this.state.error}</label>
          </div>:null}
        </Container>

  


      <Grid item xs={12}>
        <div style={style1}>
            <hr></hr>
              All Rights Reserved!-Tek Talk    
              <p style={{
                height: 5,
                fontSize:8
            }}>All the information are from authorized source.</p>
            
      
        </div>
        
        </Grid>
      </div>
    );

  }
  
  
}

export default App
