import React from 'react'
import { useEfectGifs } from '../hooks/useEfectGifs';

import { GifsGridItem } from './GifsGridItem';

const GifsGrid = ( {categories} ) => {
  
  // const [imagenes, setImagenes] = useState([]);


  // useEffect( () => {
  //   getGifs( categories )
  //     .then( setImagenes );
  // }, [ categories ])


  const {data:images,  loading } = useEfectGifs( categories );


  

  return (
    <>
      <h3> {categories} </h3> 
      <div className='card-grid'>
              { loading && 'Cargando ...'}

              {
                images.map( gifs => (
                    <GifsGridItem 
                       key={gifs.id}
                       {...gifs}  //expresion regular para desestructurar
                    />
                ))
              }
          
      </div>
    </>
  )
}

export default GifsGrid