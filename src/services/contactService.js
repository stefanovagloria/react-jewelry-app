const baseUrl = 'https://jewelry-app-550f2-default-rtdb.firebaseio.com';

export async function sendMessage(message){
    const requestOptions = {
        method: 'POST',
        headers:
        {
            'Content-Type': 'application.json'
        },
        body: JSON.stringify(message)
    }

    const response = await fetch(`${baseUrl}/messages.json`, requestOptions);
}