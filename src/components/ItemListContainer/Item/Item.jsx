import { memo } from "react"
import { Link } from "react-router-dom"

export const Item = memo(({ product }) => {

    return (
      <>
        <div key={product.id} className="card-producto">
            <img src={`../src/assets/img/${product.imgUrl}`} className="img-item" alt="imagen" />
            <h6 className='card-titulo'>{product.name}</h6>
            <p className='card-precio'>${product.price}</p>

            <div className="footer-card">
              <Link to={`/detalle/${product.id}`}>
                <button className="btn-cart-add">Detalle</button>
              </Link>
            </div>
        </div>
      </>
    )
})