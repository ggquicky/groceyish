import React from 'react';
import {Menuitems} from './MenuItems'


function Navbar() {
    console.log(Menuitems);
    return(
          <nav>
                 
              { Menuitems.map((item,index) => {
                  return(
                    <a key={index} href = {item.url}>
                        {item.title}
                    </a>
                  )


              }
              
              )}
                
          </nav>  
           
       )
    


}  


export default Navbar;