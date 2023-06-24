function order_price(){
    var price = document.getElementById("swift").value;
    var qty = document.getElementById("switfqty").value;
    var total = qty * price;
    document.getElementsByClassName("total").value;
    console.log(total)
    return total;
}
