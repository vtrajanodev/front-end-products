import React , {Component} from 'react'
import './styles.css'
import api from '../../services/api'



export default class Register extends Component {
    state = {
        infoProduct: {}
    }

    componentDidMount(){
        document.title = 'Cadastro de produtos';
    }
    
    async getIndex(){

       let tit = document.querySelector('input[name=title]')
       let desc = document.querySelector('input[name=description]')
       let ur = document.querySelector('input[name=url]')
        
        const info = {
            title: tit.value,
            description: desc.value,
            url: ur.value
        } 
        
        if(info.title.length === 0 || info.description.length === 0 || info.url.length === 0){
            alert('Insira dados para continuar com o cadastro')
            return
        }else{
            var res = await api.post(`/products` , info) 
            
        }

        if(res.status === 200){
            alert('Produto cadastrado com sucesso!')
            console.log(res.data)
        }else{
            alert("[ERRO]Dados incorretos")
            console.log(res.status)
        }       
    }

    
      
    
    render(){


        return(
           
           <form action="/api/products" method="POST"> 
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
                    
                    <button type="button"  className="register" onClick={this.getIndex}> Register Product</button>    
                    <a href="/products">Acess Products</a>
                </fieldset>
            </form> 
        )
   
    }



}

