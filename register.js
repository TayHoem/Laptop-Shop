var userArray=[];
var passwordArray=[];



function register(){
   

    var username = document.getElementById("ruName").value;
    var password = document.getElementById("rp").value;
    var passwordconfirm = document.getElementById("rcp").value;

    if (username == ""){
        alert("Username required.");
        return ;
    }
    else if(userArray.indexOf(username) >= 0){
        alert("Username is used. Please text again.")
        return;

    }
    else if (password == ""){
        alert("Password required.");
        return ;
    }
    else if (passwordconfirm == ""){
        alert("Password required.");
        return ;
    }
    else if ( password != passwordconfirm ){
        alert("Password don't match confirm your Password again.");
        return;
    }
    else if(userArray.indexOf(username) == -1){
        userArray.push(username);
        passwordArray.push(password);

        alert(username + "  is added. Try to login.");

        document.getElementById("ruName").value ="";
        document.getElementById("rp").value="";
        document.getElementById("rcp").value="";
    }
    else{
       
        alert(username + " is already register.");
        

        return ;
    }
}



function login(){
    

    var username = document.getElementById("suName").value;
    var password = document.getElementById("sp").value;

    var i = userArray.indexOf(username);

    if(userArray.indexOf(username) == -1){
        if (username == ""){
            alert("Username required.");
            return ;
        }
        alert("Username does not exist.");
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Password required.");
            return ;
        }
        alert("Password does not match.");
        return ;
    }
    else {
        window.location = "index.html";
        alert(username + " yor are login. Welcome to BITS !!");

        document.getElementById("suName").value="";
        document.getElementById("sp").value="";
        return ;
    }

}