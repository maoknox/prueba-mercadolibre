import React,{Component} from 'react';
import logoshipp from '../assets/images/shipping.png';

class PrincipalComponent extends Component {

  render(){


    let products=this.props.location.products;
    console.log(products.filters);
    return(
      <React.Fragment>
        <div >
          <p className="migapan">
            {
              products.filters.map((carac,k)=>{
                return ( <span key={k}>
                  {carac.values[0].name}&nbsp;&nbsp; >&nbsp;&nbsp;
                </span> )

              })
            }
          </p>
        </div>
        <div className='contenido'>

          {

            products.products.map((article,j)=>{

              return (

                  <section key={j} >
                    <div className="grid-container">
                      <div className="grid-item" ><img src={article.thumbnail} className="imgprod"/></div>
                      <div className="grid-item item-desc" >
                        $ {article.price} <img src={logoshipp} className="shippingimg"/><br/>
                        {article.title}
                        {article.id}
                      </div>
                      <div className="grid-item item-loc" >{article.address.state_name}</div>
                    </div>
                    <hr />
                  </section>

              )
            })
          }
        </div>
      </React.Fragment>
    );
  }
}

export default PrincipalComponent;
