import { useEffect, useState } from "react";
import "./App.css";
import MyRecipesComponent from"./MyRecipesComponent"


function App(){
  
  const MY_ID ="df2e148f";
  const MY_KEY = "3de89ae9f65b0a08f2eb5c3d8e520b4f";

  const [mySearch,setMySearch] = useState('');
  const[myRecipes, setMyRecipes] = useState([]);
  const [myWord, setMyWord] = useState('avocado');

  useEffect(() =>{
    const getRecipe =async() =>{
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${myWord}&app_id=${MY_ID}&app_key=${MY_KEY}`)
    const data = await response.json();
    console.log(data.hits);
    setMyRecipes(data.hits) }
    getRecipe(); 
  }, [myWord]);


  const myRecipeSearch = (e) =>{
    console.log(e.target.value);
    setMySearch(e.target.value)
 }

    const finalSearch =(e) =>{
      e.preventDefault();
      setMyWord(mySearch)
    }

  return(
    <div className="parent">
      <div className ="container">
        <div className="container">
          <div >
            <h1>Find a Recipe</h1>
          </div>
          <div className="search">
            <form   onSubmit={finalSearch} >
              <input className="search-text"  placeholder="Search ..." onChange={myRecipeSearch}  value={mySearch}>
              </input>
            </form>
              <button onClick={finalSearch} className ="btn">Button</button>
          </div>
        </div>

      <div className="one" >
        {myRecipes.map(element =>(
          <MyRecipesComponent
          label ={element.recipe.label}
          image = {element.recipe.image}
          calories = {element.recipe.calories}
          ingredients ={element.recipe.ingredientLines} 
          readmore = {element.recipe.url}

          />
        ))  }
      </div>

   </div>
    </div>
  )
}

 export default App;