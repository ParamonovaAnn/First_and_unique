const request = require('request');

function runGet(num) {

    request.get(
        'http://cat-fact.herokuapp.com/facts/random?animal_type&amount=3',
        (data, err, body) => {

            let arr = [];

            JSON.parse(body).forEach(elem => {
                arr.push(elem.text)
            });

            console.log(arr)
        }
    )
}

runGet(1)