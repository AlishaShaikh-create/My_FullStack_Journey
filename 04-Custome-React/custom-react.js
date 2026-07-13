
function customRender(reactElement , container){
    /*
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   domElement.setAttribute('href',reactElement.props.href)
   domElement.setAttribute('target',reactElement.props.target)
   container.appendChild(domElement)

   */
   
   // A more clear version of the code 

   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
    
   // because i was repeating the setAttribute value so lets make it through the loop
   for (const prop in reactElement.props){
    if(prop == 'children'){
        continue
    }
    domElement.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(domElement) 


}




// taking an example of the single element 

const reactElement = {
    type : 'a' ,
    props :{
           href :'https://google.com',
           target :"_blank"
    },
    children : 'click me to visit google'
}

const mainContainer = document.querySelector("#root")

customRender(reactElement,mainContainer)