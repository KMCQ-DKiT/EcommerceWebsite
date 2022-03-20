import React, {Component} from "react"
import {Redirect} from "react-router-dom"
import axios from "axios"

import {SERVER_HOST} from "../config/global_constants"
import jwt from "jsonwebtoken";


export default class DeleteFromCart extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            redirectToCheckout:false
        }
    }


    componentDidMount()
    {
        const token = jwt.decode(localStorage.token,{algorithim:'HS256'})


        //       /users/:id/cart/:_id

        axios.delete(`${SERVER_HOST}/users/${token.id}/cart/${this.props.match.params._id}`, {headers:{"authorization":localStorage.token}})
            .then(res =>
            {
                this.setState({redirectToCheckout:true})
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
                {this.state.redirectToCheckout ? <Redirect to="/Checkout"/> : null}
            </div>
        )
    }
}