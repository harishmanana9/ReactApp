import React from 'react'
import Product from './Product';
export default function ProductList() {
    
    const products = [
        {id:1, name:'Television'},
        {id:2, name:'Oven'},
        {id:3, name:'Mobile'},
        {id:4, name:'Refrigerator'},
        {id:5, name:'Washing Machine'},
        {id:6, name:'Geyser'}
    ]
    
    return (
        <table className="table table-bordered">
            {
                products.map(item =>
                    <Product id={item.id} name={item.name} />
                )
            }
        </table>
    )
}
