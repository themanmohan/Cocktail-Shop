import React from "react";
import Img from '../manmohan.jpeg'
export default function About() {
  return(
    <section className="section ">
        
        <div className="drink">
           <img src={Img} alt="g" height="450px"></img>
            <div className="drink-info">
               <h1>Name:- Manmohan Kumar</h1>
               <h3>Education:- B.Tech</h3>
               <p>Professional Full Stack Developer with primarly foucus on React and Node</p>
            </div>
            
        </div>
    </section>
  )
}
