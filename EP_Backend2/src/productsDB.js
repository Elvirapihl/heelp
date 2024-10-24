import fs from 'fs/promises';

async function getAllProducts() {
    const rawdata = await fs.readFile('./src/products.json');
    return JSON.parse(rawdata);
}
async function updateStock(newStock) {
    let data = await getAllProducts();
    data.push(newStock);
    await fs.writeFile('./src/products.json', JSON.stringify(data, null, 2));
}
export{getAllProducts, updateStock};