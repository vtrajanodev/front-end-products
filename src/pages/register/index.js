import React , {Component} from 'react'
import './styles.css'
import api from '../../services/api'



export default class Register extends Component {

    
    async getIndex(){
        const ok = await api.get('/products')
    }

    render(){

        return(
           
           <form action="/products"> 
               <h1> Cadastro de Produtos</h1>
                <fieldset>
                    <legend>Especifique os dados do Produto:</legend>

                    <div id="field-group">
                        <div className="field">
                            <label htmlFor="title" className="title"> Title:  </label>
                            <input type="text" name="title"  placeholder="Product title..."></input>
                        </div>
                    
                        <div className="field">
                            <label htmlFor="description"> Description:  </label>
                            <input type="text" name="description" className="description"  placeholder="Product description..."></input>
                        </div>
                        
                        <div className="field">
                            <label htmlFor="url"> Url:  </label>
                            <input type="text" name="url" className="url"  placeholder="Product URL..."></input>
                        </div>

                    </div>
                    
                    <button type="button"  className="register">Register Product</button>    
                    <a href="/products">Acess Products</a>
                </fieldset>
            </form> 
        )
   
    }



}

