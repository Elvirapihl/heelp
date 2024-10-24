import fs from 'fs/promises';
// Kanske inte behövs, kolla på det längre fram
async function getAllProducts() {
    const rawdata = await fs.readFile('./products.json');
    return JSON.parse(rawdata);
}
async function updateStock(newStock) {
    let data = await getAllProducts();
    data.push(newStock);
    await fs.writeFile('./src/products.json', JSON.stringify(data, null, 2));
}
export{getAllProducts, updateStock};