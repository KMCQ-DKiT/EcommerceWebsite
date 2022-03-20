import React, {Component} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

import {ACCESS_LEVEL_GUEST, ACCESS_LEVEL_ADMIN, SERVER_HOST, ACCESS_LEVEL_NORMAL_USER} from "../config/global_constants"
import BuyCar from "./BuyCar"


export default class CarTableRow extends Component 
{    
    componentDidMount() 
    {
        this.props.car.photos.map(photo => 
        {
            return axios.get(`${SERVER_HOST}/cars/photo/${photo.filename}`)
            .then(res => 
            {         
                document.getElementById(photo._id).src = `data:;base64,${res.data.image}`                                                         
            })
            .catch(err =>
            {
                // do nothing
            })
        })
    }
    handleChange = (e) =>
    {
        this.setState({[e.target.name]: e.target.value})
    }

    render() 
    {
        let soldOrForSale = null
        if(localStorage.accessLevel <= ACCESS_LEVEL_GUEST    )
        {
            if(this.props.car.sold !== true)
            {
                soldOrForSale = <BuyCar carID={this.props.car._id} price={this.props.car.price} />
            }
            else
            {
                soldOrForSale = "SOLD"
            }
        }
        if(localStorage.accessLevel <= ACCESS_LEVEL_NORMAL_USER    )
        {
            if(this.props.car.sold !== true)
            {
                soldOrForSale = <BuyCar carID={this.props.car._id} price={this.props.car.price} />
            }
            else
            {
                soldOrForSale = "SOLD"
            }
        }



        return (
            <div >

            <div >
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div
                            className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                             <Link to={"/Product/" + this.props.car._id}>
                                {this.props.car.photos.map(photo => <img key={photo._id} id={photo._id} alt=""/>)}
                            </Link>


                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">
                                <Link to={"/Product/" + this.props.car._id}>

                                {this.props.car.model}
                                </Link></h6>
                            <div className="d-flex justify-content-center">
                                <h6>Price : </h6>
                                <h6 className="text-muted ml-2">
                                    <p>€{this.props.car.year}</p>
                                </h6>


                            </div>
                        </div>

                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <p className="btn btn-sm text-dark p-0"><i
    className="fas fa-eye text-primary mr-1"/>StockLvL: {this.props.car.year}</p>
                            <p href="" className="btn btn-sm text-dark p-0"><i
    className="fas fa-shopping-cart text-primary mr-1"/>{this.props.car.price}
                                </p>

                            {soldOrForSale}




                        </div>

                    </div>
                </div>
            </div>
                <Link className={"green-button"} to={"/addToCart/" + this.props.car._id}>to Cart</Link>


                    <div>
                    {localStorage.accessLevel >= ACCESS_LEVEL_ADMIN ? <Link className="green-button" to={"/EditCar/" + this.props.car._id}>Edit</Link> : null}
            </div>
            <div>
                    {localStorage.accessLevel >= ACCESS_LEVEL_ADMIN ? <Link className="red-button" to={"/DeleteCar/" + this.props.car._id}>Delete</Link> : null}
            </div>
            </div>
        )
    }
}