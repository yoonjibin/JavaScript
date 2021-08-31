//함수 작성(매개변수 X)
function showError(){
     alert('에러가 발생했습니다. 다시 시도해주세요');
}
 showError();

 //함수 (매개변수 O)
 let msg=`Hello`;

 console.log(msg);
 function  sayHello(name)
 {
    if(name)
    {
         msg=`Hello, ${name}`;
        msg+=','+name;
        msg+=`, ${name}`;
    }
    console.log(msg);
}
 sayHello('Mike');
 console.log(msg);
 
 //전역변수와 지역변수
 let msg="welcome";
 console.log(msg)

 function sayHello(name)
 {
     let msg="Hello"
     console.log(msg+' '+name);
 }
 sayHello('Mike');
 console.log(msg)

 //OR
 function sayHello(name)
{
    let newName =name||'friend';
    let msg=`Hello, ${newName}`
    console.log(msg)
}
sayHello();
sayHello('Jane');

//default value
function sayHello(name='friend')
{
    let msg=`Hello, ${name}`
    console.log(msg)
}
sayHello()
sayHello('Jane')


