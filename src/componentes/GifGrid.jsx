import React, { Fragment } from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
const GifGrid = ({category}) => {

  const {data:images , loading} = useFetchGifs(category)
      
  return (
    <Fragment>
    <p classNAme="animate_animated animate_fadeIn"> { category }
    </p>
  
    <div className="card-grid">
     {loading && <p className="animate_animated animate_flash">Loading...</p>}
       
       { 
        images.map(img => {
           return (
               <GifGridItem
                key={img.id}
                {...img}/>
       
           )
       })
      }
    
       </div>
    </Fragment>
  );
}

export default GifGrid;
