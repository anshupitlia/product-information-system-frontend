import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class Product extends Component {

    emptyProduct = {
        title: '',
        price: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            product: this.emptyProduct
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
            const product = await (await fetch(`/api/v1/products/${this.props.match.params.sku}`)).json();
            this.setState({product: product});
        }
        handleChange(event) {
            const target = event.target;
            const value = target.value;
            const name = target.name;
            let product = {...this.state.product};
            product[name] = value;
            this.setState({product});
        }
        async handleSubmit(event) {
            event.preventDefault();
            const {product} = this.state;

            await fetch('/api/v1/products/' + product.sku , {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product),
            });
            this.props.history.push('/api/v1/products');
        }

        render() {
            const {product} = this.state;
            const title = <h2>Product Details</h2>;

            return <div>
                <AppNavbar/>
                <Container>
                    {title}
                    <Form onSubmit={this.handleSubmit}>

                        <FormGroup>
                        <img src={product.imageUrl}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="sku">SKU</Label>
                            <Label> {product.sku || ''} </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Label> {product.title || ''} </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label for="price">Price</Label>
                            <Input type="text" name="price" id="price" value={product.price || ''}
                                   onChange={this.handleChange} autoComplete="price"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="country">Country</Label>
                            <Input type="text" name="country" id="country" value={product.country || ''}
                                   onChange={this.handleChange} autoComplete="country"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="name">Discount Percentage</Label>
                            <Input type="text" name="discountPercentage" id="discountPercentage" value={product.discountPercentage || ''}
                                   onChange={this.handleChange} autoComplete="discountPercentage"/>
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary" type="submit">Update</Button>{' '}
                            <Button color="secondary" tag={Link} to="/api/v1/products">Cancel</Button>
                        </FormGroup>
                    </Form>
                </Container>
            </div>
        }
    }

export default withRouter(Product);