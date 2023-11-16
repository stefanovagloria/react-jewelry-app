const baseUrl = 'https://baas.kinvey.com';

export async function getAllProducts(authToken){

    const requestOptions = {
        method: 'GET',
        headers:
        {
            'Authorization': `Kinvey ${authToken}`,
        },
        
    }

    const response = await fetch(`${baseUrl}/appdata/kid_H1BNX5fV6/products`, requestOptions);

    const result = await response.json();

    return result;
}

export async function getProductById(id){

}

export async function createProduct(productData, authToken){

    console.log(productData,authToken)
    const requestOptions = {
        method: 'POST',
        headers:
        {
            'Authorization': `Kinvey ${authToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData)
    }

    try {
        const response = await fetch(`${baseUrl}/appdata/kid_H1BNX5fV6/products`,requestOptions);

        if(!response.ok){
            throw new Error('Product cannot be created..')
        }

        const result = await response.json();

        return result;
    } catch (error) {
        
    }

    


}

export async function editProduct(id){

}

export async function deleteProduct(id){
    
}