var getUser = localStorage.getItem('arrUser');
var arrUser = JSON.parse(getUser);

function chk_user(){
    var txtMail = document.getElementById("email").value;
    var txtPass = document.getElementById("password").value;

    var user1 = txtMail;
    localStorage.setItem('user1', JSON.stringify(user1));
    
    if(txtMail == "" || txtPass == ""){
        alert("Please fill in the information !");
    }else if(txtMail=='admin@gmail.com'&&txtPass=='12345678'){
        alert("Login success");
        window.location.href = "http://127.0.0.1:5500/Admin_page/index.html";
    }
    else{
        for(var i = 0; i < arrUser.length; i++){
            if(arrUser[i].tk == txtMail && arrUser[i].pass == txtPass){
                alert("Login success");
                window.location.href = "http://127.0.0.1:5500/Main_Page/webMain.html";
                return;
            }
        }
        alert("Login failed! Please check your email and password");
    }
    
}