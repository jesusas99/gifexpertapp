import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

// 3iPDbfDrTIiJlQbhx1Ps1LsOEmSGxqYz
export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);
  
  const onAddCategory = (newCategory) => {
    if( categories.includes(newCategory )) return ;

    setCategories([newCategory, ...categories ])
  }
  return (
    <>
    {/* titulo */}
        <h1>GifExpertApp</h1>
    {/* input */}
    {/* <AddCategory setCategories = {setCategories}/> */}
    <AddCategory 
        onNewCategory = {event => onAddCategory(event)}
    />
    {/* Listado de Items */}
    {/* <button onClick={ onAddCategory }>Add</button> */}

    {categories.map(
            category => 
                 (
                   <GifGrid key = {category} category={category} />
                )
        )
    }
    
        {/* Item */}
    </>
  )
}
