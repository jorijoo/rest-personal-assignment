import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ENV } from '../../../constants/public_env'
import TitleLoop from '../TitleLoop'

export default function ListAdminProducts() {
    const [products, setProducts] = useState([''])

    /**
     * Get a list of product data
     */

    useEffect(() => {
        axios.get(`${ENV.BACKEND}/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err.message))

    }, [])

    /**
     * Produce a list of all data
     */

    return (
        <div>
            <table className='table table-sm'>
                <thead>
                    <TitleLoop lines={products[0]} isHeader={true} id='prodHeader' />
                </thead>
                <tbody>
                    {products.map(prod => <TitleLoop lines={prod} id={prod.id} />)}
                </tbody>
            </table>
        </div>
    )
}