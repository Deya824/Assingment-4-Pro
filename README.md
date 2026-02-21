1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

//getElementsByClassName('className'): It returns live HTMLCollection. We use it when we have to select a group of elements with the same class name.It updates when dom changes later  where,
//getElementById('id'):It returns a single element with the specific ID.We use it when we need specific one element,

//querySelector(selector): It returns the first matching element where,
//querySelectorAll(selector):It returns a static nodeList of all matching elements.It doesn't update when the dom changes later.

2. How do you create and insert a new element into the DOM?

//Create

let mainContainer=document.getElementById("filterd");


let div=document.createElement("div")
//insert
div.innerText="Hello World";
mainContainer.appendChild(div)

3. What is Event Bubbling? And how does it work?
//Event Bubbling:In this technique  events bubble up from the target element to its ancestors.

//Here  event first triggers on the  target element and then  triggers on the ancestors of the target in the same  hierarchy until it reaches the  object.

4. What is Event Delegation in JavaScript? Why is it useful?
//Event Delegation:A technique where a parent handles events of child elements using bubbling.

//It is useful for dynamic content .It  reduces memory usage and also reduces number of event listener.




5. What is the difference between preventDefault() and stopPropagation() methods?
//preventDefault():It tells the browser not to perform the default action  associated with a specific event.

//stopPropagation(): It prevents the event from bubbling further up the DOM tree.It usually prevents later propagation of the current event in the capturing and bubbling phases.
