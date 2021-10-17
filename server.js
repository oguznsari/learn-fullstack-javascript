import https from "https";

https.get('https://www.google.com', res => {
    console.log('Response Status Code: ', res.statusCode);

    res.on('data', chunk => {
        console.log(chunk.toString());
    });
});