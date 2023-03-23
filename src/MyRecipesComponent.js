function MyRecipesComponent ({label,image,ingredients,calories,readmore}){
   return(
   <div className="one" >
      <div className = "card">
         <h2>{label.substring(0,30)}...</h2>
         <div className="info">
            <div className="info-one">
               <img src = {image}  className="card-image"  alt ="recipe"/>
               <button  className="card-btn"><a href= {readmore}>Read more ...</a></button>
               <p>{calories.toFixed()} ccal</p>
            </div>
            <ul className="info-two">
               {ingredients.map(ingredient =>(
               <li>{ingredient.substring(0,15)}..</li>
               ))}
            </ul>
         
      </div>
      </div>
    </div>
   )
}

export default MyRecipesComponent;