function login()
{
user_name=document.getElementById("user_name").value;
user_gmail=document.getElementById("user_gmail").value;
user_number=document.getElementById("user_number").value;
localStorage.setItem("user_name",user_name);
localStorage.setItem("user_gmail",user_gmail);
localStorage.setItem("user_number",user_number);
window.location="food odering.html";

}