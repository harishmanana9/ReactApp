import React from 'react'

export default function Product(props) {
    return (
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
            </tr>
    )
}
