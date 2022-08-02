const url = "https://randomuser.me/api/?results=10";

fetch(url)
  .then(response => {
    return response.json();
  })
  .then(parsedData => {
    //console.log(parsedData);
   localStorage.setItem("data", JSON.stringify(parsedData.results));


    let UserDetails = JSON.parse(localStorage.getItem("data"))
    //console.log(UserDetails);
    let details = " ";
    UserDetails.map(info => {
      //console.log(info);
      details += `
            <div class="user">
            <p>${info.name.title}.${info.name.first} ${info.name.last}</p>
            <p>${info.dob.age}</p>
            <p>${info.location.country}</p>
            <img src=${info.picture.medium}>
           
            </div>`
    })
    document.getElementById("root").innerHTML = details;
  })
const searchname = () => {
  details = "";
  let searchdata = JSON.parse(localStorage.getItem("data"));
  let val = document.querySelector('.search-box').value;
  let userdata = searchdata.filter((item) => item.name.first === val);
  console.log(userdata);
  userdata.map(info => {
    //console.log(info);
    details += `
              <div class="user">
              <p>${info.name.title}.${info.name.first} ${info.name.last}</p>
              <p>${info.dob.age}</p>
              <p>${info.location.country}</p>
              <img src=${info.picture.medium}>
             
              </div>`
  })
  document.getElementById("root").innerHTML = details;

}

/*function gotonext(event) { 
    event.preventDefault(); 
    window.history.pushState({}, '', event.target.href); 
    constructPage(); 
} 
const routes = { 
    '/home':'./home.html'  
} 
function constructPage() { 
    let path = window.location.pathname; 
    fetch("./home.html") 
    .then(function(htmlContent) { 
        htmlContent.text() 
        .then(function(content) { 
            document.querySelector('.salary').innerHTML = content; 
        })
    })
}
