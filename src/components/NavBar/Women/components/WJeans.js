import React from 'react';
import {useState, useEffect} from "react";

const url = `https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list?categoryName=bottom_jeans&pageSize=48&pageNumber=1&sortby=0`

function WJeans(props) {
    const [jean, setJeans] = useState([])

    useEffect(() => {
    fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-forever21-v1.p.rapidapi.com",
		"x-rapidapi-key": process.env.REACT_APP_WOM_API_KEY
    }
        })
        .then((res) => res.json())
        .then((res) => setJeans(res.CatalogProducts))
        .catch(console.err);
        // console.log(makeup);
    }, [])

    return (
        <>
        { <section className="theSectionW">
            {jean.map(brandChild => {
            return (
                    <div className="productContainerW">
                    <h3 className="productW">
                <img src = {brandChild.DefaultProductImage} alt="jean" />
                <div className="infoW">
                <div className="brandW">
                </div>
                <div className="nameW">
                {brandChild.DisplayName}
                </div>
                <div className="priceW">
                $ {brandChild.ListPrice}
                </div>
                <button className="buttonW">Add to Cart</button>
                </div>
            </h3>
            </div>
                    )
                })}
    
         {console.log(jean)}
                
            </section> }
            </>
    );
}

export default WJeans;