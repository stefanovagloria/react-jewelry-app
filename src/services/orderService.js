const baseUrl = 'https://jewelry-app-550f2-default-rtdb.firebaseio.com';

export async function addProduct(orderedProduct){
    const requestOptions = {
        method: 'POST',
        headers:
        {
            'Content-Type': 'application.json'
        },
        body: JSON.stringify(orderedProduct)
    }

    const response = await fetch(`${baseUrl}/orderedProducts.json`, requestOptions);
}

export async function getOrderedProducts(){
    const response = await fetch(`${baseUrl}/orderedProducts.json`);

    const result = await response.json();

    return result;
}

export async function deleteOrderedProduct(id){

    const requestOptions = {
        method: 'DELETE',
      
    }
   const response = await fetch(`${baseUrl}/orderedProducts/${id}.json`, requestOptions)
}


export async function updateOrderedProduct(id){

    const requestOptions = {
        method: 'PATCH',
        headers:
        {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({isCompleted: true})
    }
    const response = await fetch(`${baseUrl}/orderedProducts/${id}.json`, requestOptions);

    const result = await response.json();

    return result;
}