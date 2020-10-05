import React,{Component} from 'react';
import axios from 'axios';
class Formulario extends Component {


  constructor(props){
    super(props);
    this.state={
      products:""
    };
  }


  nombreRef=React.createRef();
  apellidosRef=React.createRef();
  bioRef=React.createRef();
  hombreRef=React.createRef();
  mujerRef=React.createRef();
  otroRef=React.createRef();
  recibirFormulario=(e)=>{
    e.preventDefault();

    axios.get("http://localhost:3900/api/article/")
    .then(res=>{
      this.props.history.push({pathname:'/ruta-prueba','products':res.data});

    });
    //this.props.history.push({pathname:'/ruta-prueba/kkjhk','param':'sdfsd'});

  }

  render(){



    return(
        <div className='principal-component'>
        <form className="mid-form" onSubmit={this.recibirFormulario}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" ref={this.nombreRef}/>
          </div>

          <div className="form-group">
            <label htmlFor="apellidos">Apellidos</label>
            <input type="text" name="apellidos" ref={this.apellidosRef}/>
          </div>

          <div className="form-group">
            <label htmlFor="bio">Biografia</label>
            <textarea name="bio" ref={this.bioRef}></textarea>
          </div>

          <div className="form-group radibuttons">
            <input type="radio" name="genero" value="hombre" ref={this.hombreRef} /> Hombre
            <input type="radio" name="genero" value="mujer"  ref={this.mujerRef}/> Mujer
            <input type="radio" name="genero" value="otro"  ref={this.otroRef}/> Otro
          </div>

          <div className="clearfix"></div>

          <input type="submit" value="Enviar" className="btn btn-success" />

        </form>
        </div>
    );
  }
}

export default Formulario;
