import React, {Component} from "react"
import {Link} from "react-router-dom"
import LinkInClass from "../components/LinkInClass"

import axios from "axios"

import CarTable from "./CarTable"
import Logout from "./Logout"

import {ACCESS_LEVEL_GUEST, ACCESS_LEVEL_ADMIN, SERVER_HOST} from "../config/global_constants"


export default class DisplayAllCars extends Component 
{

    constructor(props) 
    {
        super(props)
        
        this.state = {
            cars:[]
        }
    }
    
    
    componentDidMount() 
    {
        axios.get(`${SERVER_HOST}/cars`)
        .then(res => 
        { 
            this.setState({cars: res.data})                                         
        })
        .catch(err =>
        {
            // do nothing
        })
    }

  
    render() 
    {   
        return (

            
<div>
            <div>
            <div>
                <div className="container-fluid">
                    <div className="row bg-secondary py-2 px-xl-5">
                        <div className="col-lg-6 d-none d-lg-block">

                        </div>
                        <divLink className="col-lg-6 text-center text-lg-right">
                            <div className="d-inline-flex align-items-center">


                            </div>
                        </divLink>
                    </div>
                    <div className="row align-items-center py-3 px-xl-5">
                        <div className="col-lg-3 d-none d-lg-block">
                            <a href="" className="text-decoration-none">
                                <h1 className="m-0 display-5 font-weight-semi-bold"><span
                                    className="text-primary font-weight-bold border px-3 mr-1">Heaven</span>Skate</h1>
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


                <div className="container-fluid mb-5">
                    <div className="row border-top px-xl-5">
                        <div className="col-lg-3 d-none d-lg-block">
                            <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
                               data-toggle="collapse" href="#navbar-vertical"

                               style={{height: 65 +`px`,margintop: -1 + `px` , padding: 0 + 30 + `px` }}>
                                <h6 className="m-0">Categories</h6>
                                <i className="fa fa-angle-down text-dark"></i>
                            </a>
                            <nav
                                className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
                                id="navbar-vertical">

                                <div className="navbar-nav w-100 overflow-hidden"  style={{height: 410 +`px`}}>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link" data-toggle="dropdown">Skateboard's <i
                                            className="fa fa-angle-down float-right mt-1"></i></a>
                                        <div
                                            className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                            <a href="" className="dropdown-item">Complete's</a>
                                            <a href="" className="dropdown-item">Deck's</a>
                                            <a href="" className="dropdown-item">Truck's</a>
                                            <a href="" className="dropdown-item">Wheel's</a>
                                            <a href="" className="dropdown-item">Bearing's</a>
                                            <a href="" className="dropdown-item">Truck's</a>

                                        </div>
                                    </div>

                                    <div className="navbar-nav w-100 overflow-hidden"  style={{height: 410 +`px`}}>
                                        <div className="nav-item dropdown">
                                            <a href="#" className="nav-link" data-toggle="dropdown">T-Shirts <i
                                                className="fa fa-angle-down float-right mt-1"></i></a>
                                            <div
                                                className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                                <a href="" className="dropdown-item">Male</a>
                                                <a href="" className="dropdown-item">Female</a>

                                            </div>
                                        </div>

                                        <a href="" className="nav-item nav-link">Hoodies</a>
                                        <a href="" className="nav-item nav-link">Jackets</a>
                                        <a href="" className="nav-item nav-link">Long Sleeves</a>
                                        <a href="" className="nav-item nav-link">Shirts</a>
                                        <a href="" className="nav-item nav-link">Pants</a>
                                        <a href="" className="nav-item nav-link">Shorts</a>
                                        <a href="" className="nav-item nav-link">Sweatshirts</a>
                                        <a href="" className="nav-item nav-link">Shoes</a>
                                    </div></div>
                            </nav>
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


                                        {
                                            localStorage.accessLevel > ACCESS_LEVEL_GUEST
                                                ? <div className="logout">
                                                    {

                                                        localStorage.profilePhoto !== "null"
                                                            ? <img id="profilePhoto" src={`data:;base64,${localStorage.profilePhoto}`} alt=""/>
                                                            : null

                                                    }
                                                    <Logout/>
                                                </div>
                                                : <div>
                                                    <Link className="green-button" to={"/Login"}>Login</Link>
                                                    <Link className="blue-button" to={"/Register"}>Register</Link>  <br/><br/><br/></div>
                                        }

                                    </div>
                                </div>
                            </nav>
                            <div id="header-carousel" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" style={{height: 410 +`px`}}>
                                        <img className="img-fluid" src="img/HeavenSkatshopLogo.jpg" alt="Image"></img>
                                        <div

                                            className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                            <div className="p-3" style={{maxwidth: 700 +`px`}}>
                                                <h3 className="display-4 text-white font-weight-semi-bold mb-4">Weclome
                                                    To Dundalks First SkateShop</h3>
                                                <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" style={{height: 410 +`px`}}>
                                        <img className="img-fluid" src="img/Pachin.jpg" alt="Image"></img>
                                        <div
                                            className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                            <div className="p-3" style={{maxwidth: 700 +`px`}}>
                                                <h4 className="text-light text-uppercase font-weight-medium mb-3">10%
                                                    Off Your First Order</h4>
                                                <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable
                                                    Price</h3>
                                                <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                                    <div className="btn btn-dark" style={{width: 45 +`px`, height: 45 + `px`}}>
                                        <span className="carousel-control-prev-icon mb-n2"></span>
                                    </div>
                                </a>
                                <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                                    <div className="btn btn-dark" style={{width: 45 +`px`, height: 45 + `px`}}>
                                        <span className="carousel-control-next-icon mb-n2"></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid pt-5">
                    <div className="row px-xl-5 pb-3">
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                            <div className="d-flex align-items-center border mb-4">
                                <h1 className="fa fa-check text-primary m-0 mr-3" style={{padding: 30 + 'px'}}></h1>
                                <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                            <div className="d-flex align-items-center border mb-4" >
                                <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" style={{padding: 30 + 'px'}}></h1>
                                <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                            <div className="d-flex align-items-center border mb-4">
                                <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" style={{padding: 30 + 'px'}}></h1>
                                <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                            <div className="d-flex align-items-center border mb-4" style={{padding: 30 + 'px'}}>
                                <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
                                <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid pt-5">
                    <div className="row px-xl-5 pb-3">
                        <div className="col-lg-4 col-md-6 pb-1">
                            <div className="cat-item d-flex flex-column border mb-4" style={{padding: 30 + 'px'}}>
                                <p className="text-right">15 Products</p>
                                <a  href="" className="cat-img position-relative overflow-hidden mb-3">
                                    <Link  to={"/ProductsPage"}><img className="img-fluid" src="img/Skateboard.jpg" alt=""></img></Link>

                                </a>
                                <h5 className="font-weight-semi-bold m-0">Skateboard's</h5>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pb-1">
                            <div className="cat-item d-flex flex-column border mb-4" style={{padding: 30 + 'px'}}>
                                <p className="text-right">15 Products</p>
                                <a href="" className="cat-img position-relative overflow-hidden mb-3">
                                    <Link  to={"/ProductsPage"}><img className="img-fluid" src="img/truck.jpg" alt=""></img></Link>
                                </a>
                                <h5 className="font-weight-semi-bold m-0">Truck's</h5>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pb-1">
                            <div className="cat-item d-flex flex-column border mb-4" style={{padding: 30 + 'px'}}>
                                <p className="text-right">15 Products</p>
                                <a href="" className="cat-img position-relative overflow-hidden mb-3">
                                    <Link  to={"/ProductsPage"}><img className="img-fluid" src="img/wheels.jpg" alt=""></img></Link>
                                </a>
                                <h5 className="font-weight-semi-bold m-0">Wheel's</h5>
                            </div>
                        </div>
                        <LinkInClass type="submit" className="btnSubmit" value="Login" onClick={this.handleSubmit}/>


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
           
            </div> 
        )
    }
}