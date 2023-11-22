
//todo  Q1

function inputAct (){
      
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  

      const displayDiv = document.getElementById('displayData');
      displayDiv.innerHTML = `
        <h3>Submitted Data:</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
      `;

}

//todo ===   Q2


function readMore () {
    a = document.getElementById('para');
    a.innerHTML = "Lorem ipsum, dolor  illo maxime laudantium sunt eos consequuntur laboriosam minus quasi at velit minima facere eligendi optio eaque labore fuga! Sed, sapiente odio."
    
}

//todo  Q3  

function Deletea(){
  let a =  document.getElementById('tr1')
  a.innerHTML = '';
}
function Deleteb(){
  let b =  document.getElementById('tr2')
  b.innerHTML = "";

}
function Deletec(){
  let c =  document.getElementById('tr3')
  c.innerHTML = "";

}
function Deleted(){
  let d =  document.getElementById('tr4')
  d.innerHTML = "";

}



function edit() {
  let editName = prompt("Edit name")
  let score = prompt("Edit Score")
//  let update =   document.getElementById('name')
 let Name =   document.getElementById('name')
 let Score =   document.getElementById('score')
 Name.innerHTML = editName ;
 Score.innerHTML = score ;
 
}

function edit2() {
  
  let editName = prompt("Edit name")
  let score = prompt("Edit Score")


  let Name2 =   document.getElementById('name2')
  let Score2 =   document.getElementById('score2')
  Name2.innerHTML = editName ;
  Score2.innerHTML = score ;

}

function edit3() {
  
  let editName = prompt("Edit name")
  let score = prompt("Edit Score")


  let Name3 =   document.getElementById('name3')
  let Score3 =   document.getElementById('score3')
  Name3.innerHTML = editName ;
  Score3.innerHTML = score ;

}

function edit4() {
  
  let editName = prompt("Edit name")
  let score = prompt("Edit Score")


  let Name4 =   document.getElementById('name4')
  let Score4 =   document.getElementById('score4')
  Name4.innerHTML = editName ;
  Score4.innerHTML = score ;

}