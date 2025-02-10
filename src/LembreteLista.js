import React from 'react'

const LembreteLista = ({lista}) => {
    return(
        <ul className='list-group shadow'>
                {lista.map((lembrete, index) => (
                    <li key={index} className='list-group-item list-group-item-action
                    d-flex justify-content-between align-items-center' style={{wordBreak:'break-word'}}>
                        {lembrete}
                    </li>
                ))}
        </ul>
    )
}

export default LembreteLista