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



// CLASSLIST  : The classList property is specifically used to manage CSS classes on an element.
-> the classList keep the existing class while setAttribute completely delete the existing class

element.classList
ele.classList.add('green')
ele.classList.remove('green')
ele.classList.toggele('green')  -> remove class if the particular element class exist or else or add the class if the class does not exist 
ele.classList.contain('green')  -> return True if exist or else return false

// navigation

element.parentElement -> gives the just above parent elemnt
element.children -> gives the child element means the element that comes inside that particular element
element.previousElementSibling / element.nextElementSibline

// Create the Element 
document.createElement('p')
body.appendChild('element')
body.append('element')
body.prepend('element')
body.inserAdjuscentElement(position,value)
position: beforebegin,beforeend,afterbegin,afterend

// Removing Element
document.remove(element)
document.removeChile(element)

// DOM EVENTS:
events are signals that something has occured.(user inputs/actions)

onclick ,onmouseeter
the main drawback is that we can execute only the single function through this cannot execute the multiple function that the reason we use addEventListener

syntax : addEventListener(event , callback)




