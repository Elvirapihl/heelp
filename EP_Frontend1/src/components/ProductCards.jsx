export function ProductCards({image, productname, price,stock,cart,setCart, onHandleStock}){


    function handleCart(){
        const numberOfProductNamesInCart = cart.filter(item => item.productname === productname).length;
        

        // Jämför sort med så många produkter i cart som heter productname
        // Har en array med objekt och vill räkna ut hur många av de objekten som innehåller egenskapen productname där värdet är lika med variabeln productname

// && stock < numberOfProductNamesInCart
        if (numberOfProductNamesInCart < stock){
            setCart([...cart, { productname, price, stock, image }]);
            onHandleStock({image, productname, price, stock});
        } else{
            alert("Produkten är slut i lager");
        }
        //console.log(handleCart);
    };
    return(
        <div className="productBox">
            <img src={image} alt=""/>
            <h2>{productname}</h2>
            <p>Pris: {price} kr</p>
            <p>Lagersaldo: {stock} st</p>
            <button className="buyButton" onClick={handleCart} disabled={stock === 0}>Lägg i kundvagn</button>
        </div>
    )
    
}