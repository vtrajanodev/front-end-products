import React , {Component} from 'react' 
import api from '../../services/api'
import './styles.css'


export default class Product extends Component {
   
    state = {
       product: {} ,
       products : {}

    }
    
    async componentDidMount() {

        document.title = 'Detalhes do produto';
       
        const { id } =  this.props.match.params


        const response = await api.get(`/products/${id}`)

        this.setState({product: response.data})

    }

    
  

   
    
    render ()   {


        const { product }  = this.state

        
        return (
            

            <div className = "product-info">
                <h1>{product.title}</h1>
                    <p>_id: {product._id}</p>
                <p>{product.description}</p>

                <p>
                    URL: <a href={product.url} > {product.url}</a>
                </p>

                <a href="/products" className="back">Back to products</a>
            </div>

          
        )
                 
    }
}