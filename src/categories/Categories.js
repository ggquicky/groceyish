import React from 'react'
import Items from './Items'

class Categories extends React.Component{
    Allcategories = ['All','Vegetables','Fruits','Coffe & teas','Meat']

    render() {
        return(
            <div>
                <div>
                    <span>Explore Categories</span>
                    <div>
                        {this.Allcategories.map(function (element , index) {
                            return (
                                <a key={index} href='/'>{element}</a>
                            )
                        })

                        }
                    </div>
                </div>
                <div>
                    <Items/>
                </div>
            </div>

        )
    }
}
export default Categories
