import React from 'react';
import {useState, useEffect, useContext} from "react";
import {CartContext} from '../../../../CartContext'

const url = `https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list?categoryName=activewear&pageSize=48&pageNumber=1&sortby=0`

function WActiveWear({brandChild}) {
    const [active, setActive] = useState([])

    useEffect(() => {
    fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-forever21-v1.p.rapidapi.com",
		"x-rapidapi-key": process.env.REACT_APP_WOM_API_KEY
    }
        })
        .then((res) => res.json())
        .then((res) => setActive(res.CatalogProducts))
        .catch(console.err);
        // console.log(makeup);
    }, [])

    return (
        <>
        { <section className="theSectionW">
            {active.map(brandChild => {
            return (
                <div className="productContainerW">
                    <h3 className="productW">
                <img src = {brandChild.DefaultProductImage} alt="active" />
                <div className="infoW">
                <div className="brandW">
                </div>
                <div className="nameW">
                {brandChild.DisplayName}
                </div>
                <div className="priceW">
                $ {brandChild.ListPrice}
                </div>
                <button>Add to Cart</button>
                </div>
            </h3>
            </div>
                // <WomenProduct product={brandChild} />
                    )
                })}
    
         {console.log(active)}
                
            </section> }
            </>
    );
}

export default WActiveWear;