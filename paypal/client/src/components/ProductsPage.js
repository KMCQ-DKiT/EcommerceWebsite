import React, {Component} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

import CarTable from "./CarTable"

import {ACCESS_LEVEL_ADMIN, ACCESS_LEVEL_GUEST, SERVER_HOST} from "../config/global_constants"
import Logout from "./Logout";



export default class ProductsPage extends Component
{
    errorMessage;


    constructor(props)
    {
        super(props)

        this.state = {
            users:[],
            cars:[],
            sales:[]
        }
    }

    componentDidMount()
    {
        axios.get(`${SERVER_HOST}/cars`)
            .then(res =>
            {
                if(res.data)
                {
                    if (res.data.errorMessage)
                    {
                        console.log(res.data.errorMessage)
                    }
                    else
                    {
                        console.log("Records read")
                        this.setState({cars: res.data})
                    }
                }
                else
                {
                    console.log("Record not found")
                }
            })
    }



    render()
    {
        return (
   <div>
            <div className="container-fluid">
                <div className="row bg-secondary py-2 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">


                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">

                        </div>
                    </div>
                </div>
                <div className="row align-items-center py-3 px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <div href="" className="text-decoration-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span
                                className="text-primary font-weight-bold border px-3 mr-1"><Link to={"/HomePage"}>Heaven</Link></span>Skate</h1>
                        </div>
                    </div>
                    <div className="col-lg-6 col-6 text-left">

                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for products"/>
                                <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary">
                                <i className="fa fa-search"/>
                            </span>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="col-lg-3 col-6 text-right">
                        <div className="btn border">
                            <i className="fas fa-heart text-primary"/>
                            <span className="badge">0</span>
                            {
                                localStorage.accessLevel >= ACCESS_LEVEL_ADMIN
                                    ?  <Link  to={"/Checkout"}>asd</Link>

                                    : null
                            }


                        </div>
                        <div>
                           <div href="" className="btn border">
                            <i className="fas fa-shopping-cart text-primary"/>

                            <span className="badge">0</span>
                        </div>
                   </div>
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
                   <span className="navbar-toggler-icon"/>
               </button>
               <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                   <div className="navbar-nav mr-auto py-0">
                       {
                           localStorage.accessLevel >= ACCESS_LEVEL_ADMIN
                               ? <div className="add-new-car">
                                   <Link className="blue-button" to={"/AddCar"}>Add New Product</Link>
                                   <Link className="blue-button" to={"/ResetDatabase"}>Reset Database</Link>
                               </div>
                               : null
                       }
                       <div  className="nav-item nav-link active">Home</div>
                       <div className="nav-item nav-link"><Link  to={"/ProductsPage"}>Products</Link></div>
                       <div  className="nav-item nav-link">Location</div>
                       <div className="nav-item dropdown">
                           <a href="#" className="nav-link dropdown-toggle"
                              data-toggle="dropdown">Pages</a>
                           <div className="dropdown-menu rounded-0 m-0">
                               <a  className="dropdown-item">Shopping Cart</a>
                               <a  className="dropdown-item">Checkout</a>
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
       </div>
        <div className="container-fluid pt-5">
            <div className="text-center mb-4">
                <h2 className="section-title px-5"><span className="px-2">Our Products</span></h2>
            </div>
        </div>



    <div className="ProductsFlex">
       <CarTable cars={this.state.cars} />

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

                   <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"/>info@example.com</p>
                   <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"/>+012 345 67890</p>
               </div>
               <div className="col-lg-8 col-md-12">
                   <div className="row">
                       <div className="col-md-4 mb-5">
                           <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                           <div className="d-flex flex-column justify-content-start">
                               <a className="text-dark mb-2" ><i
    className="fa fa-angle-right mr-2"/>Home</a>
                               <a className="text-dark mb-2" ><i
    className="fa fa-angle-right mr-2"/>Our Shop</a>
                               <a className="text-dark mb-2" ><i
    className="fa fa-angle-right mr-2"/>Shop Detail</a>
                               <a className="text-dark mb-2" ><i
    className="fa fa-angle-right mr-2"/>Shopping Cart</a>
                               <a className="text-dark mb-2" ><i
    className="fa fa-angle-right mr-2"/>Checkout</a>
                               <a className="text-dark" ><i
    className="fa fa-angle-right mr-2"/>Contact Us</a>
                           </div>
                       </div>

                       <div className="col-md-4 mb-5">
                           <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                           <div className="d-flex flex-column justify-content-start">
                               <a className="text-dark mb-2" ><i
    className="fa fa-angle-right mr-2"/>Home</a>
                               <a className="text-dark mb-2" ><i
    className="fa fa-angle-right mr-2"/>Our Shop</a>
                               <a className="text-dark mb-2"><i
    className="fa fa-angle-right mr-2"/>Shop Detail</a>
                               <a className="text-dark mb-2" ><i
    className="fa fa-angle-right mr-2"/>Shopping Cart</a>
                               <a className="text-dark mb-2" ><i
    className="fa fa-angle-right mr-2"/>Checkout</a>
                               <a className="text-dark" ><i
    className="fa fa-angle-right mr-2"/>Contact Us</a>

                           </div>  </div>
                       <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9379.893513595802!2d-6.4008157!3d54.0032481!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5376e34efae7ec49!2sWilliamsons%20Mall!5e0!3m2!1sen!2sie!4v1645112454561!5m2!1sen!2sie"
    allowFullScreen="" loading="lazy"/>
                   </div>
               </div>

           </div>

           <div className="row border-top border-light mx-xl-5 py-4">

               <div className="col-md-6 px-xl-0 text-center text-md-right">
                   <img className="img-fluid" src="../../public/img/payments.png" alt=""/>
               </div>


           </div>
       </div>
   </div>



        )
    }
}