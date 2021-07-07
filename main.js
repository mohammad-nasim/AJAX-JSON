const btn = document.getElementById('btn')
const URL = `https://jsonplaceholder.typicode.com/users`

let user  = document.getElementById('user-info')

btn.addEventListener('click' , function(e){
   let ourRequest = new XMLHttpRequest();

   ourRequest.open('GET', URL)

   ourRequest.onload = function(){
      let ourData = JSON.parse(ourRequest.responseText)
      console.log(ourData)

      renderHTML(ourData)
   }

   
   ourRequest.send()
})

//function
function renderHTML(data){

   let recivedData = " "

   for(i = 0; i < data.length ; i++){
      recivedData += "<p>" + 
                        "User Name is : " + "<strong>" + data[i].name + "</strong>" + " <br>" +
                        "Email is : "+ "<strong>" + data[i].email + "</strong>"                 
                     + " </p>" 
   }

   user.insertAdjacentHTML('beforeend' , recivedData)

   
}