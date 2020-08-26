import React, { useState,useEffect } from "react";
import Hero from '../components/Hero'
import { useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
export default function SingleCocktail() {
  const {id}=useParams()
  const [loading,setLoadig]=useState(false)
   const [cocktail,setCocktail]=useState('')


    
        console.log(cocktail)
   useEffect(()=>{
     setLoadig(true)
         const  getApi=async()=>{
          try{
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)

            const data=await response.json()
       
            if(data.drinks){
              const {strDrink:name,strDrinkThumb:image,strAlcoholic:info,strCategory:Category,strGlass:glass,strInstructions:instructions,
              strIngredient1, strIngredient2, strIngredient3, strIngredient5, strIngredient4
              }=data.drinks[0]
   

              const ingredients=[strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5]
                       
                       
              const newcocktail={
                name,
                image,
                info,
                Category,
                glass,
                instructions,
                ingredients
              }
              setCocktail(newcocktail)
             
            }else(
              setCocktail([])
            )

          }catch(e){

          }
          setLoadig(false)
         }
         getApi()
   },[id])

   if(loading){
     return <h2 className="section-title">Loading....</h2>
   }
   if(!cocktail){
     return  <h2 className="section-title">no cocktail to display</h2>
   }else{
     const {name,image,info,Category,glass,instructions,ingredients}=cocktail
   

   
  return (
    <>
    <Hero img={image} />
    <section className="section cocktail-section">
        <h2 className="section-title">Name :-{name}</h2>
        <div className="drink">
           <img src={image} alt={name}></img>
           <div className="drink-info">
             <p>name: {name}</p>
             <p>category: {Category}</p>
             <p>info: {info}</p>
             <p>glass:{glass}</p>
             <p>instructions: {instructions}</p>
             <p>
               ingredients:{""}
               {ingredients.map(item=>{
                 return item ?<span key={item.id}>{item}</span>:null
               })}
             </p>
            
             <p><Link to="/" className="btn btn-primary">Back Home</Link></p>
           </div>
            
        </div>
    </section>
    </>
  );
}
}