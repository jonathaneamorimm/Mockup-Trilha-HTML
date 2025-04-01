const URL = 'http://localhost:3000';

export const postData = async (campos) => {
    try{
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(campos)
        };

        const response = await fetch(`${URL}/lorem`, config);

        if (!response.ok) throw new Error(`Error making request: ${response.statusText}`);

        const response_data = await response.json();

        console.log(`Inserted! \n Status: ${response.statusText}`);

    } catch (exception) {
        console.log('Error: ', exception);
    }
} 