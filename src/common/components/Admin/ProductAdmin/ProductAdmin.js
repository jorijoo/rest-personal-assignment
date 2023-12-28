import React, { useEffect } from 'react'
import { LOCALIZATION } from '../../../constants/fi'
import ListAdminProducts from './ListAdminProducts'

export default function ProductAdmin() {

    return (
        <div>
            <h3>{`${LOCALIZATION.ADD} ${LOCALIZATION.PRODUCT}`}</h3>
            <h2>TBD</h2>
            <ListAdminProducts />
        </div>
    )
}
