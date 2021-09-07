const addItem=()=>{
    //get inut name
    const input=document.getElementById('input');
    const name=input.value;
    //empty value error
    if(!name){
        return;
    }
    //display  input name func
    displayName(name);
    //set item in local storage
    setItem(name);
    //clear inpir field
    input.value="";
}
//input value set in ui
const displayName=name=>{
 const ui=document.getElementById('display');
 const li= document.createElement("li");
 li.innerText=name;
 ui.appendChild(li)
}
//find local storage value
const getItem=()=>{
    const cart = localStorage.getItem("cart");
    let cartObj;
    if(cart){
         cartObj=JSON.parse(cart);
    }else{
         cartObj={};
    }
    return cartObj;
}
//set local storage value
const setItem=name=>{
    const cart = getItem();
    //***cart[name]=1; //object has 2 value , key and property
    //value handler
    if(cart[name]){
        cart[name]+=1;
    }else{
        cart[name]=1;
    }
    const cartStringify= JSON.stringify(cart);
    localStorage.setItem("cart",cartStringify);
}
//local storage to display in ui
const displayUi=()=>{
    const cartItem=getItem();
    //object ar jonno for in loop best
    for(const product in cartItem){
        //pass the result display name fun
        displayName(product);
    }
}
//window load hole dekhano lagbe tai agei call
displayUi();

//empty of local storage
const removeItem=()=>{
    document.getElementById("display").innerText="";
    localStorage.removeItem("cart")
}