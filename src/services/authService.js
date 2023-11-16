const baseUrl = 'https://baas.kinvey.com';

export async function signUp(usersData) {

    const requestOptions = {
        method: 'POST',
        headers:
        {
            'Content-Type': 'application/json',
            'Authorization': 'Basic a2lkX0gxQk5YNWZWNjphZGJlNWQ3YThlNTQ0ZDY1YjNhMmFlNTQ5ZDUxZmZkZA=='
        },
        body: JSON.stringify(usersData)
    }

    try {
        const response = await fetch(`${baseUrl}/user/kid_H1BNX5fV6/`, requestOptions);

        if (!response.ok) {
            throw new Error('User cannot be created')
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error.message)
    }
}

export async function signIn(usersData){
    const requestOptions = {
        method: 'POST',
        headers:
        {
            'Content-Type': 'application/json',
            'Authorization': 'Basic a2lkX0gxQk5YNWZWNjphZGJlNWQ3YThlNTQ0ZDY1YjNhMmFlNTQ5ZDUxZmZkZA=='
        },
        body: JSON.stringify(usersData)
    }

    try {
        const response = await fetch(`${baseUrl}/user/kid_H1BNX5fV6/login`, requestOptions);

        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error.message)
    }
}

export async function logout(authToken){
    const requestOptions = {
        method: 'POST',
        headers:
        {
            'Authorization': `Kinvey ${authToken}`
        },
    }

    try {
        const response = await fetch(`${baseUrl}/user/kid_H1BNX5fV6/_logout`, requestOptions);

        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error.message)
    }
}