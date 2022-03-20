import React, {Component} from "react"
import axios from "axios"
import jwt from "jsonwebtoken";
import Link from "react-router-dom/es/Link";
import CheckoutBasketTable from "./CheckoutBasketTable";
import {ACCESS_LEVEL_GUEST, ACCESS_LEVEL_ADMIN, SERVER_HOST} from "../config/global_constants"



export default class ShoppingCart extends Component
{

    constructor(props)     {
        super(props);
        this.state =
            {
                cart: [],
                cars:[]

            }
    }

    componentDidMount() {
        const token2 = jwt.decode(localStorage.token,{algorithim:'HS256'})
        console.log(token2.email)
        console.log(token2.id)
        if (localStorage.accessLevel>ACCESS_LEVEL_GUEST){

            axios.get(`${SERVER_HOST}/users/${token2.id}`, {headers:{"authorisation": localStorage.token}})
                .then(res => {
                    console.log(token2.id)
                    if (res.data){
                        if (res.data.errorMessage){
                            console.log(res.data.errorMessage)
                        }
                        else{
                            console.log(res.data)
                            if (res.data.cart != null){
                                this.setState({
                                    cart:res.data.cart

                                })
                                console.log(res.data.cart)
                            }
                        }
                    }else{
                        console.log("User Data Not Returned")
                    }
                })
        }
    }

    render()
    {

        return (
            <div className="container">
                <Link  to={"/ProductsPage"} ><h1>Basket</h1></Link>
                <div className="table-container">
                    <CheckoutBasketTable cars={this.state.cart} />

                    {
                        localStorage.accessLevel >= ACCESS_LEVEL_ADMIN
                            ? <div className="add-new-car">
                                <Link className="blue-button" to={"/AddCar"}>Add New Car</Link>
                            </div>
                            : null
                    }
                </div>
            </div>

        )
    }
}