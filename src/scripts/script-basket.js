let price =999
let btnsPlus=document.getElementsByClassName('more')
let btnsMinus=document.getElementsByClassName('less')
for(let i=0; i<btnsPlus.length; i++){
    btnsPlus[i].addEventListener('click', function(event){
        let divQuantity = btnsPlus[i].parentNode.parentNode.getElementsByClassName('quantity')[0]
        let q=parseInt(divQuantity.innerHTML)+1
        divQuantity.innerHTML=q
        let newPrice=q*price
        btnsPlus[i].parentNode.getElementsByClassName('price')[0].innerHTML=newPrice + ' &#x20bd'
    })
    btnsMinus[i].addEventListener('click', function(event){
        
        let divQuantity = btnsPlus[i].parentNode.parentNode.getElementsByClassName('quantity')[0]
        let q=parseInt(divQuantity.innerHTML)-1
        if(q<0) return
        divQuantity.innerHTML=q
        let newPrice=q*price
        btnsPlus[i].parentNode.getElementsByClassName('price')[0].innerHTML=newPrice + ' &#x20bd'    })
}