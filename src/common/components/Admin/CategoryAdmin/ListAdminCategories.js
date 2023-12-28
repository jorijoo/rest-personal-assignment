import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ENV } from '../../../constants/public_env'
import TitleLoop from '../TitleLoop'

export default function ListAdminCategories() {
    const [categories, setCategories] = useState([''])

    /**
     * Get a list of category data
     */

    useEffect(() => {
        axios.get(`${ENV.BACKEND}/categories`)
            .then(res => setCategories(res.data))
            .catch(err => console.log(err.message))

    }, [])

    return (
        <div>
            <table className='table table-sm'>
                <thead>
                    <TitleLoop lines={categories[0]} isHeader={true} id='catHeader' />
                </thead>
                <tbody>
                    {categories.map(cate => <TitleLoop lines={cate} id={cate.categoryName} />)}
                </tbody>
            </table>
        </div>
    )
}
