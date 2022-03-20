import React, {Component} from "react"
import CheckoutBasketTableRow from "./CheckoutBasketTableRow";
import BuyCar from "./BuyCar";
import {ACCESS_LEVEL_GUEST, ACCESS_LEVEL_NORMAL_USER} from "../config/global_constants";

export default class CheckoutBasketTable extends Component
{
    constructor(props)
    {
        super(props)

       this.state={
            cart:[],
           cars:[]

       }
    }







    render()
    {


        let total = 0;
        {this.state.cart.map((car) => <CheckoutBasketTableRow key={car._id} car={car}/>)}
        total += this.props.cars.price



        let soldOrForSale = null
        if(localStorage.accessLevel <= ACCESS_LEVEL_GUEST    )
        {
            if(this.props.cars.sold !== true)
            {
                soldOrForSale = <BuyCar productID={this.state.cart.map(product => product._id)} price={total} />
            }
            else
            {
                soldOrForSale = "SOLD"
            }
        }
        if(localStorage.accessLevel <= ACCESS_LEVEL_NORMAL_USER    )
        {
            if(this.props.cars.sold !== true)
            {
                soldOrForSale = <BuyCar productID={this.state.cart.map(product => product._id)} price={total} />
            }
            else
            {
                soldOrForSale = "SOLD"
            }
        }
        return (
            <table>
                <thead>
                <tr>
                    <th>Model</th>
                    <th>Colour</th>
                    <th>Year</th>
                    <th>Price</th>
                    <th>Photos</th>
                    <th> </th>
                </tr>
                </thead>

                <tbody>
                {this.props.cars.map((car) => <CheckoutBasketTableRow key={car._id} car={car}/>)}
                </tbody>
                <div onClick={this.handleNameClick}>{total
                   }{soldOrForSale}</div>
            </table>
        )
    }
}