import React , {Component} from 'react'
import api from '../../services/api'
import './styles.css'
import {Link} from 'react-router-dom'


export default class Main extends Component{
    state = {
        products: [],
        productInfo: {},
        page: 1

    }
    
    componentDidMount(){
        document.title = 'Listagem de produtos';
        this.loadProducts()

    }
    
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`)

        const {docs , ...productInfo} = response.data;

       
        this.setState({products: docs , productInfo, page,}) 
    }

    prevPage = () => {
        const {page} = this.state

        if (page === 1) return;

        const pageNumber = page - 1

        this.loadProducts(pageNumber)
    }
    
    nextPage = () => {
        const {page, productInfo} = this.state

        if (page === productInfo) return;

        const pageNumber = page + 1

        this.loadProducts(pageNumber)
    }

    deleteProducts = async(id) => {

        const {products} = this.state
    
        const del = await api.delete(`/del/${products[0]._id}`)

        this.componentDidMount()

    }
     
    render(){

        const {products , page, productInfo} = this.state

        

            
        return (
           
            <div className= "product-list">
            
            <div className="actions">
               
               <button disabled={page === 1} onClick={this.prevPage} >Anterior</button>
               <a href="/">Inicio</a>
               <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
               
            </div>
            
            
            
            {products.map(product => (

                
                <article key= {product._id}> 
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>
                    <Link to={`/products/${product._id}`}>Acessar</Link>
                    <button onClick={this.deleteProducts}>Deletar</button>
                </article>
            
            ))}

                <div className="actions">
               
                    <button disabled={page === 1} onClick={this.prevPage} >Anterior</button>
                    <a href="/">Inicio</a>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                
                </div>

        </div> )
        

    }
}