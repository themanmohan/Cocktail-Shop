import React from "react";
export default function SearchForm({setsearchTerm}) {
  const searchValue=React.useRef("")

  React.useEffect(()=>{
    searchValue.current.focus()
  },[])

  // console.log(searchValue.current.value)
  const handleSubmit=(e)=>{
      e.preventDefault()
        setsearchTerm(searchValue.current.value)
  }
  const searchCocktail=()=>{
      
  }
  return(
    <section className="section">
    <h2 className="section-title">Search Cocktail</h2>
    <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <input type="text" name="name" id="name" onChange={searchCocktail} ref={searchValue}></input>
           <input type="submit" className="btn btn-primary" name="submit" ></input>
        </div>
        
    </form>

    </section>
  );
}
