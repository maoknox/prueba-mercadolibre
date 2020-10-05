import React,{Component} from 'react';
import logo from '../assets/images/logoml.png';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
class Header extends Component {
  textSearch=React.createRef();


  buscarProducto=(e)=>{
    e.preventDefault();

    axios.get("https://api.mercadolibre.com/sites/MLA/search?q="+this.textSearch.current.value)
    .then(res=>{
      //this.props.history.push({pathname:'/ruta-prueba/kkjhk','products':res.data});

      var infop={'filters':res.data.filters,'products':res.data.results.slice(0,4)}
      this.props.history.push({pathname:'/ruta-prueba','products':infop});
    });
    console.log('buscar');

  }


  render(){


    return(
      <header id="header">
          <div className="nav-header center">
              <div id="logo">
                  <img src={logo} alt="Logotipo" />
              </div>

              <form className="nav-search"  role="search" onSubmit={this.buscarProducto}>
                <input type="text" className="nav-search-input"  name="as_word"  autoCapitalize="on" ref={this.textSearch} />
                <button type="submit" className="nav-search-btn" tabIndex="4" >
                  <div role="img" aria-label="Buscar" className="nav-icon-search"></div>
                </button>
              </form>




              <div className="clearfix"></div>
          </div>
      </header>
    );
  }
}

export default withRouter(Header);
