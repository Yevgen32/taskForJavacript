function promiseNew(url) {
    return new Promise((resolve, reject)=>{
        axios.post(url, {
            "method": "searchArticle",
            "params": {
                "articleNumber": "07200",
                "searchExact": true,
                "brandId": null,
                "numberType": "0",
                "needInfo": true
            }
        }, {  headers: {
                "Content-Type": "application/json"
            }
        })
            .then(result => {
                if(result.status == 200){
                    console.log('status server', result.status);
                    return resolve(result);
                }
                reject(result.status);
            })
            .catch(result =>{
                reject('error')
            })
    })
}


function test(){
    Promise
        .all([promiseNew('http://193.243.158.230:3001/api'),promiseNew('http://193.243.158.230:3001/api'),promiseNew('http://193.243.158.230:3001/api')])
        .then((res)=>{
            console.log(res)
        })
        .catch((err, err2)=>{console.log(err, err2)
        })
}

test();
promiseNew();

function callbackFunction(callback) {
    axios.delete('http://193.243.158.230:3001/api', {
            "method": "searchArticle",
            "params": {
                "articleNumber": "07200",
                "searchExact": true,
                "brandId": null,
                "numberType": "0",
                "needInfo": true
            }
        },
        {  headers: {
                "Content-Type": "application/json"
            }

        })
        .then(function (result) {
            if (result.status != 200){
                console.error('ERROR')
                return callback('not 200');
            }
            else {
                return callback(null, result)
            }

    })
        .catch(function (err) {
            callback(err);
        })


}

callbackFunction((err, result)=>{
    if(err){
        return console.error(err);
    }
    console.log(result);

});
