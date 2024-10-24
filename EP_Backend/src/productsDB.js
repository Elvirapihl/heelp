import fs from 'fs/promises';

// Kanske inte behövs, kolla på det längre fram
async function getAllProducts() {
    const rawdata = await fs.readFile('./src/products.json');
    return JSON.parse(rawdata);
}
async function updateStock(products){

    const rawdata = await fs.readFile('./src/products.json');
    let dbItems= JSON.parse(rawdata);
    
    
    for (let i = 0; i < products.length; i++) {
        dbItems[i].stock = dbItems[i].stock - products[i].stock;
    } 

    await fs.writeFile('./src/products.json', JSON.stringify(dbItems, null, 2));
}
export{getAllProducts, updateStock};