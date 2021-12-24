

const box = document.querySelector('.box');

devs.map(data => {

    box.innerHTML  += `

    <div class="box-stacture">
            <img src="${data.pic}" alt="">

            <h3>${data.name}</h3>
            <span>${data.skill}</span>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>${data.loction}</p>
           
        </div>
    
    `;

});




// studetn stacture............................


const child = document.querySelector('.child');

student.map(data  =>  {

    child.innerHTML += `
    
    
    <div class="childreen">
    <img src="${data.picture}" alt="">

    <h3>${data.name}</h3>
    <span>${data.class}</span>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>${data.age}</p>
</div>
    
    `;
});


// phonebook list all................................

const phone = document.querySelector('.phone');

phonebook.map(data  => {

    phone.innerHTML  +=  `
    
    <div class="phone-book">
                <img src="${data.photo}" alt="">
                <h3>${data.name}</h3>
                <span>${data.relashon}</span>
                <p>${data.age}</p>
                <p>${data.number}</p>
                
            </div>

    
    `;
})