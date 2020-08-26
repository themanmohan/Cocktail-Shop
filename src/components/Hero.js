import React from 'react'

export default function Hero({img}) {
    return (
        <section className="hero">
        <img src={img} alt="image"  />
             <div className="textarea">
                   <h1>Cocktail That You Want</h1>
                   <h2>Trendy Taste, Trendy you.</h2>
             </div>
        </section>
    )
}
