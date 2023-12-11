

    const Country= document.getElementById('Country');
    const year= document.getElementById('year');
    const form= document.getElementById('form');
    const errorElement = document.getElementById('error');

form.addEventListener('submit',(e)=>{
    let messages= []
    if ( Country.value === 'Country'|| Country.value==null){
        messages.push("Country is required" )
    };

    e.preventDefault()

    const paragraph= document.createElement('p');
    const node= document.createTextNode(messages[0]);
    paragraph.appendChild(node);

    form.appendChild(paragraph)


    console.log(messages)
})
