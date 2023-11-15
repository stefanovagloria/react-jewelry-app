const baseUrl = 'https://baas.kinvey.com';

export function signUp(usersData) {

    const requestOptions = {
        method: 'POST',
        headers:
        {
            'Content-Type': 'application/json',
            'Authorization': 'Basic a2lkX0hrRTVSaC1WVDpkYjRiODNmNmJjZWY0ZTllYTUzNzUyNTYyMjA3MDFkMw=='
        },
        body: JSON.stringify(usersData)
    }

    try {
        const response = fetch(`${baseUrl}/user/kid_HkE5Rh-VT/`, requestOptions);

        if (!response.ok) {
            throw new Error('User cannot be created')
        }

        console.log(response.json())

        return response.json();
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
            'Authorization': 'Basic a2lkX3JrTTAtSnpOcDo4Y2UxNTRjNzNkZGY0MzcwYmY0MDQ4MWJjN2QyZWJiNA=='
        },
        body: JSON.stringify(usersData)
    }

    try {
        const response = await fetch(`${baseUrl}/user/kid_rkM0-JzNp/login`, requestOptions);

      const result = await response.json();

        return result;
    } catch (error) {
        console.log(error.message)
    }
}