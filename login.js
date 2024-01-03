let login_Users = [
    {
    username: "user1", pass: "pass123", age: 25, gender: "male", phone: "123-456-7890"
    },
    {
    username: "user2", pass: "abc456", age: 30, gender: "female", phone: "987-654-3210"
    }
    ];
function signup()
{
    var phone=document.getElementById("phone_").value;
    var age=document.getElementById("age_").value;
    var password=document.getElementById("password_").value;
    var smallchar=false;
    var capitalchar=false;
    var num=false;
    var lock=false;
    var regex=/[@#$%^&*()!]/
    if(phone.lengh!=11)
    {
        alert("please enter your phone=11");

    }
    else
    {
        if(age.lengh<18||age.lengh>60)
        {
            alert("please enter your age between 18 and 60");
        }
        else
        {
            for(var i=0;i<password.value.lengh;i++)
            {
                if(regex.test(password[i]))
                {
                    regex=true;

                }
                else if(password[i]>'a'&&password[i]<'z')
                {
                    smallchar=true
                }
                else if(password[i]>'A'&&password[i]<'Z')
                {
                    capitalchar=true;

                }
                else if(password[i]>'0'&&password[i]<'9')
                {

                    num=true;
                }

            }
            if(regex==true||num==true||smallchar==true||capitalchar==true)
            {
                login_User.push({username:username,pass:password})

                alert("the password srtong")

            }
            else
            {
                alert("the password not srtong")
            }
        } 
        console.log(login_Users);
    }


}
function login()
{
    var username=document.getElementById("username__");
    var password=document.getElementById("pasword__");
    for(var i=0;i<login_Users.length;i++)
    {
        if(login_Users.length[i].username==username&&login_Users.length[i].pass==password)
        {
           
            alert("log in succsesfuly");
        }
        else
        {
            alert("not user");
            location.href="review..html";
        }
    
    }
   console.log(login_Users);
}
function forgetpassword()
{
    var usernamee=document.getElementById("username___");
    var passwordd=document.getElementById("password___");
    var lock=false;
    for(var i=0;i<login_Users.length;i++)
    {
        if(login_Users.length[i].username==usernamee)
        {
            login_Users.length[i].pass==passwordd;
            lock=true;
            alert("succses");
            location.href="review..html"
        }
        else
        {
            alert("not user");
    
        }
    }
   
}
function buynow()
{
    location.href="login.html";

}