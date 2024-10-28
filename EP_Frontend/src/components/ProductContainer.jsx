import { ProductCards } from "./ProductCards";



export function ProductContainer({products, setCart, cart, onPurchase}){
    //console.log(cart);
    //console.log(onHandleStock);

    return(
        <div className="productsList">
            {products.map(
                ({ image, productname, price, stock}, id ) => <ProductCards key={id} 
                image={image} 
                productname={productname} 
                price={price} 
                stock={stock} 
                setCart={setCart}
                cart={cart}
                onPurchase={onPurchase} />)}

        </div>
        
    
    )
    
}