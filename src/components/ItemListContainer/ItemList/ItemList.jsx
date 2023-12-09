import React, { memo } from 'react'
import './ItemList.css'
import { Item } from '../Item/Item';

export const ItemList = memo(({ productos }) => {

    return (
      <>
        {productos.map((product) => <Item key={product.id} product={product} />)}
      </>
    )
})
  
