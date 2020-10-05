import React, {Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import PrincipalComponent from './components/PrincipalComponent';
import Contenido from './components/Contenido';
import Error from './components/Error';
import Header from './components/Header';
import Formulario from './components/Formulario';


class Router extends Component{

  render (){
    return(


        <BrowserRouter>
        <Header
          nombutton='nombreboton'
        />
          <Switch>
            <Route exact path='/' component={Contenido}/>
            <Route exact path='/ruta-prueba' component={PrincipalComponent}/>
            <Route exact path='/formulario' component={Formulario}/>
            <Route exact path="/pruebaparams/:token?" render={(props)=>{
              var tok=props.match.params.token;
              return(
                  <div>
                    Página de prueba

                    {tok &&
                      <span>  {tok}</span>
                    }


                  </div>
                )
            }}/>
            <Route component={Error}/>
          </Switch>

        </BrowserRouter>

    );
  }

}
export default Router;
