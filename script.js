const url = "https://randomuser.me/api/?results=10";

fetch(url)
    .then((Data) => {
        Data.json()
            .then((parsedData) => {
                console.log(parsedData);

            })
    })

