Select the element in DOM

document.getElementById("id name") : return the object of that particular id or return null if not found

document.getElementsByClassName("classname"): Returs the Element as the html collection or empty collection(if not found)

document.getElementsByTagName("tagname")


// QUERY SELECTOR

allow us to use any css selector

document.querySelector('p') # selects first p element

document.querySelector('#myid') # select the first element with id = myid

document.querySelector('.myclass') # select the first element with class = myclass

document,querySelectorAll("p") select all the p elements