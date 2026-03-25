Select the element in DOM

document.getElementById("id name") : return the object of that particular id or return null if not found

document.getElementsByClassName("classname"): Returs the Element as the html collection or empty collection(if not found)

document.getElementsByTagName("tagname")


// QUERY SELECTOR

allow us to use any css selector

document.querySelector('p') # selects first p element

document.querySelector('#myid') # select the first element with id = myid

document.querySelector('.myclass') # select the first element with class = myclass

document.querySelectorAll("p") select all the p elements

// MANIPULATING THE ELEMENT 

innerText : we can only the text of the element not any hidden content

innerHTML : give all the html markup

textContent: give us the hidden text as well

// getters and setters method
document.getAttribute('id')
document.setAttribute('id','value to set)

