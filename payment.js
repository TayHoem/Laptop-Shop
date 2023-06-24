window.onload = init;


document.forms[0].onsubmit = function() {
    if (confirm("Confirm order?") == 1){   // 1==1 True
        //name1= document.getElementById('customerName').value;
        alert("Success !!!!")
        alert( document.getElementById('name').value + " , your order is already reveice by our server. You may receive your order items wihtin 8 days. ")
        alert("Have a nice day!")
   
             window.print();
             localStorage.clear();
             return true;
             
             //document.book.submit();
             //location.href = "success.html";
             //window.location = "success.html" public name;                                
        }
        else{
            return false;  
        }
    }

    function back(){
        if(confirm("Are you want back to order?")==1){
        window.location.href ='cart.html';
        }
    }

    function cancel(){
        if(confirm("Are you sure you want to cancel order")==1){
            window.location.href ='index.html';
            localStorage.clear();
        }
    }

    



