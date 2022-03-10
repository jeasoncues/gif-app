import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import GifsGrid from './components/GifsGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball'])

  // const addHandle = () => {
  //    setCategories( [...categories,'Digimon'] ); // traemos todo lo que contiene el arreglo, y agregamos un nuevo elemento
  //    // TODO: Otra mannera de hacerlo
  //    // setCategories( cats => ['Digimon', ...cats]); //lo agregamos al princiòp
  // }


  return (
    <>
       <h2>Gif Expert App</h2>

       {/* Componente para agregar categoria - input */}
       <AddCategory setCategories={ setCategories } />
       <hr />
     
       <ol>
           {
               categories.map( categories => (
                   <GifsGrid 
                      key={categories} 
                      categories={categories} 
                   />
               ))
           }
       </ol>
    </>
  )
}

export default GifExpertApp