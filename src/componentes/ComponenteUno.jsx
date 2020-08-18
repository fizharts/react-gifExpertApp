import React, { Fragment, useState } from 'react';
import { AddCategory } from './AddCategory';
import GifGrid from './GifGrid';

const ComponenteUno = () => {

  const [Categories, setCategories] = useState([]);
// api key 2ndi1LxbyY7O1ZyWxPM64PLZIUasrAFJ
let llave = 0

  return (
   <Fragment>

      <AddCategory setCategories={setCategories}/>
      <div>
        {
          Categories.map((res , i) =>{
            llave++
            return(
                <GifGrid key={llave} category={res} />
            )
          })
        }
      </div>
   </Fragment>
  )
}

export default ComponenteUno;
