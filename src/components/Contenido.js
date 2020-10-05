
import React,{Component} from 'react';



class Contenido extends Component {


  contador=0;

  constructor(props){
    super(props);
    this.state={
      contador:0
    };
  }

  sumar=()=>{
        this.setState({
          contador: (this.state.contador+1)
        });
  }
  restar=()=>{
    this.setState({
      contador: (this.state.contador-1)
    });
  }
  render(){


    return(
      <section className="contenido">

      </section>
    );
  }
}

export default Contenido;
