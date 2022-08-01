const url = "https://randomuser.me/api/?results=10";

fetch(url)
    .then(response => {
      return response.json();
    })
    .then(parsedData => {
     console.log(parsedData);
     localStorage.setItem("data",JSON.stringify(parsedData.results));
  })
      window.localStorage.getItem("data");
    let UserDetails = JSON.parse(window.localStorage.getItem("data"))
    console.log(UserDetails);
  

   
  
  
  
