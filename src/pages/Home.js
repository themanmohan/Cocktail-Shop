import React from "react";
import CocktailList from '../components/CocktailList'
import Hero from '../components/Hero'
import Img from '../logo.png'
import SearchForm from '../components/SearchForm'
export default function Home() {
  const [loading,setLoading]=React.useState(false)
  const [searchTerm, setsearchTerm] = React.useState("")
  const [cocktail,setCocktail]=React.useState([])

  React.useEffect(()=>{
    setLoading(true)

     async function getresponse() {

      try{
         const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
          
         const data=await response.json()
         const {drinks}= data
         if(drinks){
          const newcocktail= drinks.map(item=>{
             const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass}=item
             return{id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,glass:strGlass}
           })
            setCocktail(newcocktail)
         }else{
           setCocktail([])
         }


      }catch(e){
        console.log('not')
      }
      setLoading(false)
        
    }
    getresponse()
  }, [searchTerm])
  return(
    <>
    <Hero img={Img} />
    <SearchForm setsearchTerm={setsearchTerm}  />
    <CocktailList cocktail={cocktail} loading={loading} />
    </>
  )
}
