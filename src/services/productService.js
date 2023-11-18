
export async function getAllProducts() {

    try {
        const response = await fetch('https://jewelry-app-550f2-default-rtdb.firebaseio.com/products.json')

        if (!response.ok) {
            throw new Error()
        }

        const result = await response.json();

        return result;
    } catch (error) {

    }
}

export async function getProductById(id) {

    const response = await fetch(`https://jewelry-app-550f2-default-rtdb.firebaseio.com/products/${id}.json`);

    if(response.ok){
        const result = await response.json();
        console.log(result)
        return result;
    }
}

export async function createProduct(productData) {

    const requestOptions = {
        method: 'POST',
        headers:
        {
            'Content-Type': 'application.json'
        },
        body: JSON.stringify(productData)

    }

      try {
        const response = await fetch('https://jewelry-app-550f2-default-rtdb.firebaseio.com/products.json', requestOptions)

        if (!response.ok) {
            throw new Error()
        }

        const result = await response.json();

        return result;
    } catch (error) {

    }



}

export async function editProduct(id, productData) {
    const requestOptions = {
        method: 'PUT',
        headers:
        {
            'Content-Type': 'application.json'
        },
        body: JSON.stringify(productData)

    }

      try {
        const response = await fetch(`https://jewelry-app-550f2-default-rtdb.firebaseio.com/products/${id}.json`, requestOptions)

        if (!response.ok) {
            throw new Error()
        }

        const result = await response.json();

        return result;
    } catch (error) {

    }
}

export async function deleteProduct(id) {

    const requestOptions = {
        method: 'DELETE',
    }
   await fetch(`https://jewelry-app-550f2-default-rtdb.firebaseio.com/products/${id}.json`, requestOptions)
}