//QUERY_SELECTOR//
// var header=document.querySelector("#main-header");
// header.computedStyleMap.border="solid 4px black";

// var input = document.querySelector("input");
// input.value="Hello World";

// var submit=document.querySelector('input[type="submit"]');
// submit.value="Click Me !"

// var item=document.querySelector(".list-group-item");
// item.style.color="blue";

// var lastItem=document.querySelector(".list-group-item:last-child");
// lastItem.style.color="coral";

var secondItem=document.querySelector(".list-group-item:nth-child(2)");
console.log(secondItem);
secondItem.style.backgroundColor="green";

var thirdItem=document.querySelector(".list-group-item:nth-child(3)");
thirdItem.style.visibility="hidden";

//QUERY_SELECTOR_ALL//

// var titles=document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent="Hey";

// var secondItem=document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color="red";

var item=document.querySelectorAll(".list-group-item");
console.log(item);
item[1].style.color="red";

var odd=document.querySelectorAll("li:nth-child(odd)");
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="green";
}

// var even=document.querySelectorAll("li:nth-child(even)");
// for(var i=0;i<even.length;i++){
//     even[i].style.backgroundColor="yellow";
// }