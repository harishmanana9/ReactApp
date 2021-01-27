import React from 'react'
import ProductList from '../Product/ProductList';
import AddItem from '../AddItem/AddItem';

function clickHandler () {
    alert('You clicked');
}


export default function Main() {

    const changeHandler = (data) => { 
        alert(data.target.value);
    }

    return (
            <main>Main Contents
                <ProductList />
                <input type="text" onChange={(data)=> changeHandler(data) } />
            <btn class="btn btn-success" onClick={clickHandler} >Click Me</btn>
            <AddItem />
            </main>
    )
}
