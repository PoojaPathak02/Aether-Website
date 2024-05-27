//CLOCK WITH THE HELP OF SET INTERVEL
setInterval(()=>{
    document.getElementById("hours").innerText=new Date().getHours()
    document.getElementById("minutes").innerText=new Date().getMinutes()
},1000)

//FETCH DATA 
let productData
function FetchData()
    {
        fetch("https://aether-backend-ynhk.onrender.com/Men's")
        .then((res)=>res.json())
        .then((data)=>{
            listOfInfo(data)
            productData=data
        })
        .catch((err)=>console.log(err))
    }
    FetchData()

    function listOfInfo(data)
    {
        // console.log(data)
        const store=data.map((el)=>singleInfo(el.images,el.title,el.price,el.description,el.color))
        document.getElementById("products").innerHTML=store.join("")
    }

    function singleInfo(images,title,price,description,color)
    {
        let card =`
        <a style="text-decoration:none;color:black" href="description.html?title=${encodeURIComponent(title)}&image=${encodeURIComponent(images)}&color=${encodeURIComponent(color)}&description=${encodeURIComponent(description)}&price=${encodeURIComponent(price)}">
        <div class="singleCart">
            <img src=${images} alt="" height="700px" width="540px">
            <h3 class="mt-3"><b>${title}</b></h3>
            <span class="me-3">${price}</span>
            <span>${description}</span>
            <p>Color: ${color}</p>
        </div></a>
      
        ` 
        return card
    }

//LOCAL STORAGE OF CREATE ACCOUNT
// const createAccount = document.getElementById("addAcc")
// let arr=JSON.parse(localStorage.getItem("form")) || []
// addAcc.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     let validation = true
//     let createAccFirstName=document.getElementById("createAcc-firstname");
//     let createAccLastname=document.getElementById("createAcc-lastname");
//     let createAccEmail=document.getElementById("createAcc-email");
//     let createAccPassword=document.getElementById("createAcc-password");

//     if(createAccFirstName.value == "")
//     {
//         validation=false;
//         document.getElementById("firstnameError").innerText="First Name is required!"
//     }else{
//         document.getElementById("firstnameError").innerText=""}
    
//      if(createAccLastname.value == "")
//      {
//         validation=false;
//         document.getElementById("lastnameError").innerText="Last Name is required!"
//      }else{
//         document.getElementById("lastnameError").innerText=""}

//      if(createAccEmail.value == "")
//     {
//         validation=false;
//         document.getElementById("createAccemailError").innerText="Email is required!"
//     }else{
//         document.getElementById("createAccemailError").innerText=""}
//     if(createAccPassword.value == "")
//     {
//          validation=false;
//          document.getElementById("createAccpasswordError").innerText="Password is required!"
//     }else{
//         document.getElementById("createAccpasswordError").innerText=""}

//     if(validation){
//         alert("Account has been Created")
//     }
//     else{
//         alert("Something went Wrong!")
//     }
                
//     let userData={
//         firstName:document.getElementById("createAcc-firstname").value,
//         lastname:document.getElementById("createAcc-lastname").value,
//         email:document.getElementById("createAcc-email").value,
//         password:document.getElementById("createAcc-password").value
//     }
    
//     // console.log(userData)
//     arr.push(userData)
//     // console.log(arr)
//     localStorage.setItem("form",JSON.stringify(arr))
// }
// )
// //SORT DATA
// let HighToLow=document.getElementById("highToLow");
// let LowToHigh=document.getElementById("lowToHigh");

// HighToLow.addEventListener("click",()=>{
//     let HighToLowData=productData.sort((a,b)=>b.price-a.price)
//     listOfInfo(HighToLowData)
//     console.log(HighToLowData)
// })
//FETCH DATA 


