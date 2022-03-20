import React, {Component} from "react"
import {Redirect} from "react-router-dom"
import axios from "axios"

import {SERVER_HOST} from "../config/global_constants"
import jwt from "jsonwebtoken";
import CarTableRow from "./CarTableRow";


export default class addToBasket extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            redirectToDisplayAllCars:false
        }
    }


    componentDidMount()
    {
        const token = jwt.decode(localStorage.token,{algorithim:'HS256'})
       console.log(token.id)
        console.log(this.props.match.params._id)

        //       /users/:id/cart/:_id

        axios.post(`${SERVER_HOST}/users/${token.id}/cart/${this.props.match.params._id}`, {headers:{"authorization":localStorage.token}})
            .then(res =>
            {
                this.setState({redirectToDisplayAllCars:true})
            })
            .catch(err =>
            {
                // Do nothing
            })
    }


    render()
    {


        return (
            <div>
                {this.state.redirectToDisplayAllCars ? <Redirect to="/Checkout"/> : null}
            </div>
        )
    }
}