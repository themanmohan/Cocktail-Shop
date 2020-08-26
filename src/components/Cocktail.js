import React from "react";
import {Link} from 'react-router-dom'
export default function Cocktail({name,id,glass,image,info}) {
  return (
    <article className="cocktail">
        <div className="img-container">
          <img src={image} alt={name}/>
        </div>
        <div className="cocktail-footer">
            <div>
              <h3>{name}</h3>
            <h4>{glass}</h4>
            </div>
            <div>
              <h5>{info}</h5>
            </div>
            <Link to={`/detailpage/${id}`} className="btn btn-primary btn-details">Detail</Link>
        </div>
    </article>
  )
}
