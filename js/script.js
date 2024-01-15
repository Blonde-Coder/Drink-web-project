

    const Country= document.getElementById('Country');
    const Coun= document.getElementById('coun');
    const year= document.getElementById('year');
    const form= document.getElementById('form');
    const errorElement = document.getElementById('error');

// form.addEventListener('submit',(e)=>{
//     let messages= []
//     if ( Country.value === 'Country'|| Country.value==null){
//         messages.push("Country is required" )
//     };

//     e.preventDefault()

//     const paragraph= document.createElement('p');
//     const node= document.createTextNode(messages[0]);
//     paragraph.appendChild(node);

//     Coun.appendChild(paragraph)


//     console.log(messages)
// })


// function yearValidation() {
//     if (year.value == 0) {
//         year.style.borderColor = "red solid 5px";
//     }
// }

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
        if (Country.value == 'Select a country'){
            Country.style.borderColor = "red"; 
        }else{
            Country.style.borderColor = "purple"; 

        }
        if (year.value == 'year'){
            year.style.borderColor = "red";
        }else{ 
            year.style.borderColor = "purple";
        }
        
        
        if(year.value == 2003){
        alert("SORRY, YOU ARE UNDER THE LEGAL AGE, WE CAN NOT WELCOME YOU ON OUR SITE. ")
        }
    //     {
    //     alert("Year should be in range 2002 ");
    //     return false;
    //     }
    // return true;

    

});


// console.log(CountryValidation())

