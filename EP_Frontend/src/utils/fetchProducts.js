//'http://localhost:3000/api/productslist'
export async function fetchProducts() {
    const url = 'http://localhost:3000/api/productslist';

    const res = await fetch (url);
    const data = await res.json();

    //console.log(data);

    return data;
}

export async function updateStock(newStock) {
    const options = {
        method: 'POST',
        body: JSON.stringify(newStock),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    const res = await fetch (url, options);
    const data = await res.json();

    return data;
}