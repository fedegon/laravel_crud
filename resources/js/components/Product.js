import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            detail: '',
            price: '',
            productos: []
        };
        // bind
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);

        // bind
        this.handleSubmit = this.handleSubmit.bind(this);

        //bind

        this.renderProducts = this.renderProducts.bind(this);

    }


   // handle change
   handleChange(e) {
    this.setState({
        name: e.target.value,
    });
    }

    // handle change
   handleChange2(e) {
    this.setState({
        price: e.target.value,
    });
    }

    // handle change
   handleChange3(e) {
    this.setState({
        detail: e.target.value
    });


    }

    handleSubmit(e) {
        // stop browser's default behaviour of reloading on form submit
        e.preventDefault();
        axios
            .post('/productsReact', {
                name: this.state.name,
                price: this.state.price,
                detail: this.state.detail
            })
            .then(response => {
                console.log('from handle submit', response);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Crear Producto</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                    <input
                                        onChange={this.handleChange}
                                        value={this.state.name}
                                        className="form-control"
                                        rows="5"
                                        maxLength="255"
                                        placeholder="nombre producto"
                                        required
                                        />
                                    <br></br>
                                    <input
                                        onChange={this.handleChange2}
                                        value={this.state.price}
                                        className="form-control"
                                        rows="5"
                                        maxLength="255"
                                        placeholder="precio producto"
                                        required
                                        />
                                    
                                    <input
                                        onChange={this.handleChange3}
                                        value={this.state.detail}
                                        className="form-control"
                                        rows="5"
                                        maxLength="255"
                                        placeholder="detalle producto"
                                        required
                                        />

                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Crear Producto
                                    </button>
                                </form>
                                <hr />
                                {this.renderProducts()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getProductos() {
        axios.get('/productsReact')
            .then(response => {
                this.setState({
                    productos: response.data.products
                })
            })
    }
    // lifecycle method
    componentDidMount() {
        this.getProductos();
    }
    
    renderProducts() {
        return this.state.productos.map(products => (
            <div key={products.id} className="media">
                <div className="media-body">
                    <p>
                    <span> {products.name} - </span>
                    <span>{products.price} - </span>
                    <span>{products.detail}</span>  
                    </p>               
                </div>
            </div>
        ));
    }
}

if (document.getElementById('productReact')) {
    ReactDOM.render(<Product />, document.getElementById('productReact'));
}