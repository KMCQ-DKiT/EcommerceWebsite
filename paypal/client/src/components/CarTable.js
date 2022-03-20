import React, {Component,useState} from "react"
import CarTableRow from "./CarTableRow"




export default class CarTable extends Component
{
    handleNameClick = e =>
    {
        let CarTable = this.props.cars.sort((a, b) => a.model > b.model ? 1 : -1)
        this.setState({CarTable})
    }

    handlePriceClick = e =>
    {
        let CarTable = this.props.cars.sort((a, b) => a.year > b.year ? 1 : -1)
        this.setState({CarTable: CarTable})
    }

    handlePriceClickHigh = e =>
    {
        let CarTable = this.props.cars.sort((a, b) => a.year > b.year ? -1 : 1)
        this.setState({CarTable: CarTable})
    }



    // handleSearch(searchTag)
    // {
    //     console.log(searchTag)
    //
    //     this.setState({selectedProducts: this.state.cars.filter(a => a.model.toLowerCase().includes(searchTag.toLowerCase()))})
    // }






    render()
    {
        return (
            <div>
            <h5>Sort By</h5>
        <ul className="sorts">
            <p>Price Low to High</p>
            <input className="sortItems" type={"checkbox"} onClick={this.handlePriceClick}/>
            <p>Price High to Low</p>
            <input className="sortItems" type={"checkbox"} onClick={this.handlePriceClickHigh}/>
            <p>Name</p>
            <input className="sortItems" type={"checkbox"} onClick={this.handleNameClick}/>

        </ul>
            {/*<div>*/}
            {/*    <input className="searchBar"*/}
            {/*           type="text" placeholder="Search..." id="search" onChange={() => this.handleSearch(document.getElementById("search").value)}/>*/}
            {/*</div>*/}




            <div  className="Products">
            {this.props.cars.map((car) => <CarTableRow key={car._id} car={car}/>)}
                </div>


            </div>

        )
    }
}