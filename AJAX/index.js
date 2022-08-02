//AJAX
//Asynchronous  javascript and xml

/*const object={
    name:"Some name",
    age:10,

};*/

{/*<object>
    <name>Some name</name>
    <age>10</age>
</object>;*/}

//old---> XML parser...

//JSON --->Javascript Object Notation

//string
//number
//object
//aray
//404-not found

//XMLHttpRequest

const xhr=new XMLHttpRequest();
console.log(xhr);

xhr.onreadystatechange=function(){
    if(xhr.readyState===4){
        const photosArray=JSON.parse( xhr.response);
        console.log(photosArray);



   // console.log(xhr.response);
    //console.log(xhr.response.length);
    //console.log(typeof xhr.response);
    //console.log(xhr.response)
    //console.log(JSON.parse( xhr.response));
}
};

//url
//https://jsonplaceholder.typicode.com/photos

//crud
//get
//post
//patch/put
//delete
const url="https://jsonplaceholder.typicode.com/photos";

xhr.open("GET",url);
xhr.send();

//0- unsend
//1-open-method calling
//2-send method calling-->headers
//--error--//using ajax phots db

//3-loading
//4-done response complete
