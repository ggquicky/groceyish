import {GroceriesStock} from "./GroceriesStock";


function Items() {
    return (
        <div>
            { GroceriesStock.map(function(element,index){
                return (
                    <div key={index} className={element.class }>
                        <img  src={  element.path} alt={element.description}/>
                        <span>{element.cName}</span>
                        <span>{element.quantity}</span>
                    </div>
                )

            })


            }

        </div>

    )
}

export default Items