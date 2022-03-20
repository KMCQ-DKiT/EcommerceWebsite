import React, {Component} from "react"
import {Redirect, Link} from "react-router-dom"
import axios from "axios"

import LinkInClass from "../components/LinkInClass"

import {SERVER_HOST} from "../config/global_constants"


export default class Register extends Component
{
    constructor(props)
    {
        super(props)
        
        this.state = {
            name:"",
            email:"",
            password:"",
            confirmPassword:"", 
            selectedFile:null,
            isRegistered:false,
            wasSubmittedAtLeastOnce:false
        } 
    }
    
    
    handleChange = (e) => 
    {
        this.setState({[e.target.name]: e.target.value})
    }
    

    handleFileChange = (e) => 
    {
        this.setState({selectedFile: e.target.files[0]})
    }
    
    
    handleSubmit = (e) => 
    {
        e.preventDefault()

        let formData = new FormData()  
        if(this.state.selectedFile)
        {
            formData.append("profilePhoto", this.state.selectedFile, this.state.selectedFile.name)
        }    
        axios.post(`${SERVER_HOST}/users/register/${this.state.name}/${this.state.email}/${this.state.password}`, formData,
            {headers: {"Content-type": "multipart/form-data"}})
        .then(res => 
        {     
            localStorage.name = res.data.name
            localStorage.accessLevel = res.data.accessLevel
            localStorage.profilePhoto = res.data.profilePhoto                    
            localStorage.token = res.data.token
                    
            this.setState({isRegistered:true})               
        })   
        .catch(err =>
        {
            this.setState({wasSubmittedAtLeastOnce: true})            
        })
    }


    render() 
    {     
        let errorMessage = "";
        if(this.state.wasSubmittedAtLeastOnce)
        {
            errorMessage = <div className="error">Error: All fields must be filled in<br/></div>;
        }          
    
        return (
            <div>

        <div>

            <div className="container-fluid">
                <div className="row bg-secondary py-2 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">

                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="text-dark pl-2" href="">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center py-3 px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <a href="" className="text-decoration-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span
                                className="text-primary font-weight-bold border px-3 mr-1"><Link to={"/HomePage"}>Heaven</Link></span>Skate</h1>
                        </a>
                    </div>
                    <div className="col-lg-6 col-6 text-left">

                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for products"></input>
                                <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary">
                                <i className="fa fa-search"></i>
                            </span>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="col-lg-3 col-6 text-right">
                        <a href="" className="btn border">
                            <i className="fas fa-heart text-primary"></i>
                            <span className="badge">0</span>
                        </a>
                        <a href="" className="btn border">
                            <i className="fas fa-shopping-cart text-primary"></i>
                            <span className="badge">0</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    <a href="" className="text-decoration-none d-block d-lg-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span
                            className="text-primary font-weight-bold border px-3 mr-1">H</span>Skate</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse"
                            data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a className="nav-item nav-link"><Link  to={"/ProductsPage"}>Products</Link></a>
                            <a href="detail.html" className="nav-item nav-link">Location</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle"
                                   data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="cart.html" className="dropdown-item">Shopping Cart</a>
                                    <a href="checkout.html" className="dropdown-item">Checkout</a>
                                </div>
                            </div>

                        </div>
                        <div className="navbar-nav ml-auto py-0">

                        </div>
                    </div>
                </nav>
            </div>
            <div className="image-background-login">

                {this.state.isRegistered ? <Redirect to="/DisplayAllCars"/> : null}
                {errorMessage}
                <div className="container login-container" >
                    <div className="row">
                        <div className="col-md-6 login-form-1" style={{background: `white`}}>
                            <h3>Register for Heavn SkateShop</h3>
                            <form   noValidate = {true} id = "loginOrRegistrationForm">
                                <div className="form-group">
                                    <input
                                        name = "name"
                                        type = "text"
                                        placeholder = "Name"
                                        autoComplete="name"
                                        value = {this.state.name}
                                        onChange = {this.handleChange}
                                        ref = {(input) => { this.inputToFocus = input }}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        name = "email"
                                        type = "email"
                                        placeholder = "Email"
                                        autoComplete="email"
                                        value = {this.state.email}
                                        onChange = {this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        name = "password"
                                        type = "password"
                                        placeholder = "Password"
                                        autoComplete="password"
                                        title = "Password must be at least ten-digits long and contains at least one lowercase letter, one uppercase letter, one digit and one of the following characters (£!#€$%^&*)"
                                        value = {this.state.password}
                                        onChange = {this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        name = "confirmPassword"
                                        type = "password"
                                        placeholder = "Confirm password"
                                        autoComplete="confirmPassword"
                                        value = {this.state.confirmPassword}
                                        onChange = {this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        name = "profilePhoto"
                                        type = "file"
                                        onChange = {this.handleFileChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <LinkInClass value="Register New User" className="green-button" onClick={this.handleSubmit} />
                                </div>
                                <div className="form-group">
                                    <Link className="red-button" to={"/DisplayAllCars"}>Cancel</Link>
                                </div>
                                <div className="form-group">
                                    <Link  to={"/Login"}>Back to login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
                <div className="row px-xl-5 pt-5">
                    <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                        <a href="" className="text-decoration-none">
                            <h1 className="mb-4 display-5 font-weight-semi-bold"><span
                                className="text-primary font-weight-bold border border-white px-3 mr-1">Heaven</span>SkateShop
                            </h1>
                        </a>
                        <p>Dundalk first skateshop located in St William's Mall</p>

                        <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                        <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-md-4 mb-5">
                                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className="text-dark mb-2" href="index.html"><i
                                        className="fa fa-angle-right mr-2"></i>Home</a>
                                    <a className="text-dark mb-2" href="shop.html"><i
                                        className="fa fa-angle-right mr-2"></i>Our Shop</a>
                                    <a className="text-dark mb-2" href="detail.html"><i
                                        className="fa fa-angle-right mr-2"></i>Shop Detail</a>
                                    <a className="text-dark mb-2" href="cart.html"><i
                                        className="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                                    <a className="text-dark mb-2" href="checkout.html"><i
                                        className="fa fa-angle-right mr-2"></i>Checkout</a>
                                    <a className="text-dark" href="contact.html"><i
                                        className="fa fa-angle-right mr-2"></i>Contact Us</a>
                                </div>
                            </div>

                            <div className="col-md-4 mb-5">
                                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className="text-dark mb-2" href="index.html"><i
                                        className="fa fa-angle-right mr-2"></i>Home</a>
                                    <a className="text-dark mb-2" href="shop.html"><i
                                        className="fa fa-angle-right mr-2"></i>Our Shop</a>
                                    <a className="text-dark mb-2" href="detail.html"><i
                                        className="fa fa-angle-right mr-2"></i>Shop Detail</a>
                                    <a className="text-dark mb-2" href="cart.html"><i
                                        className="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                                    <a className="text-dark mb-2" href="checkout.html"><i
                                        className="fa fa-angle-right mr-2"></i>Checkout</a>
                                    <a className="text-dark" href="contact.html"><i
                                        className="fa fa-angle-right mr-2"></i>Contact Us</a>

                                </div>  </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9379.893513595802!2d-6.4008157!3d54.0032481!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5376e34efae7ec49!2sWilliamsons%20Mall!5e0!3m2!1sen!2sie!4v1645112454561!5m2!1sen!2sie"
                                allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </div>

                </div>

                <div className="row border-top border-light mx-xl-5 py-4">

                    <div className="col-md-6 px-xl-0 text-center text-md-right">
                        <img className="img-fluid" src="img/payments.png" alt=""></img>
                    </div>


                </div>
            </div>
        </div>
            </div>
        )
    }
}