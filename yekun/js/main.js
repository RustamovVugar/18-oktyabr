let inputName=document.querySelector("#name");
let inputSurname=document.querySelector("#surname");
let inputAge=document.querySelector("#age");
let table=document.querySelector(".table");
let addButton=document.querySelector("#button");

let number=1;
addButton.addEventListener("click",addition);



function addition (event){
    if (inputName.value.length>3) {
      
        let enteredName=inputName.value;
        let enteredSurname=inputSurname.value;
        let enteredAge=inputAge.value;
        number=number+1;
        let template=`<tr> 
                       <td> ${number}</td>
                      <td> ${enteredName} </td>
                      <td> ${enteredSurname} </td>
                      <td> ${enteredAge}</td>
                      </tr>
                      `  
                    table.innerHTML+=template;

    }
   else alert("Daxil edəcəyiniz ədə ən az 4 simvoldan ibaret olmalıdır")
                
               inputName.value="";
               inputSurname.value="";
               inputAge.value="";
};






