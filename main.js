let url = `https://jsonplaceholder.typicode.com/users`

let ourRequest = new XMLHttpRequest();

ourRequest.open('GET', `https://jsonplaceholder.typicode.com/users`)

ourRequest.onload = function(){
   let ourData = JSON.parse(ourRequest.responseText)
   console.log(ourData[2].username)
}

ourRequest.send()