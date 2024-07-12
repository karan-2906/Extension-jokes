fetch('https://jokes-always.p.rapidapi.com/common',
    {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '7584c1fd4dmsh32c9520b874ef7dp1c3489jsn0a0a4a02e670',
            'x-rapidapi-host': 'jokes-always.p.rapidapi.com'
        }
    }

)
    .then(data => data.json())
    .then(data => {
        // console.log(data.data)
        document.getElementById('JokeHere').innerHTML = data.data
    }
    )