let element1 =document.querySelector('.mpbile');
let element2 =document.querySelector('.desktop');
let element3 =document.querySelector('.navbar');
let element4 =document.querySelector('br');
window.onload=function(){
    element1.style.cssText=" background-color: #3e4581;color: white; transform: scale(1.05);"
}
element1.onclick = function (e){
    element1.style.cssText=" background-color: #3e4581;color: white; transform: scale(1.05);"
    element2.style.cssText="   padding: 8px 40px;outline: none;border-radius: 5px;border: none;margin: 0px 0px 8px 15px;background-color: white;color: #3e4581;font-weight: 500;transition: 0.3s;"
}
element2.onclick = function (e){
    element2.style.cssText=" background-color: #3e4581;color: white; transform: scale(1.05);"
    element1.style.cssText="   padding: 8px 40px;outline: none;border-radius: 5px;border: none;margin: 0px 0px 8px 15px;background-color: white;color: #3e4581;font-weight: 500;transition: 0.3s;"
}
window.onresize=function(){
   if(element3.offsetWidth<999){
    element4.remove();
   }
}
