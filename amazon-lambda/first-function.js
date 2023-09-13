export const handler = async (event) => {
    const queryParams = event.queryStringParameters;
    
    // Check if a "text" query parameter is provided
    if (!queryParams || !queryParams.text) {
        const response = {
            statusCode: 400,
            body: JSON.stringify({ error: "Missing 'text' query parameter" }),
        };
        return response;
    }

    const text = queryParams.text;
    const uppercaseText = text.toUpperCase();
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(uppercaseText),
    };
    
    return response;
};