const content = document.querySelector("#product-list")


// ==================  ADD
const addButton = document.querySelector(".addButton");

//POST API
addButton?.addEventListener('click', ()=> {
    let itemName = document.querySelector('#itemName').value;
    let unitPrice = document.querySelector('#unitPrice').value;
    let quantity = document.querySelector('#quantity').value;
    let supplier = document.querySelector('#supplier').value;
    let formData = {itemName, unitPrice, quantity, supplier};

    fetch('https://drill-product-bscs3.onrender.com/api/add', {
        method: 'POST',
        body:JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => {
    if (response.ok) {
        alert("Product Added Successfully!");
        location.reload();
    }
}).catch((error) => {
        console.log(error)
    })
})


window.addEventListener('load',() => {
    getProducts();
})

function getProducts(){
    let html = ""

    //FETCH API

    fetch('https://drill-product-bscs3.onrender.com/api/products', {mode:'cors'})

    .then(response=>{
        console.log(response);
        return response.json()
    })

    .then(data=>{
        console.log(data);
        data.forEach(element => {
            // html+=`<li> ${element.itemName} </li>` 
            // html+=`<li> ${element.unitPrice} </li>`
            // html+=`<li> ${element.quantity} </li>`
            // html+=`<li> ${element.supplier} </li>`

            html += `
                <tr>
                    <td>${element.itemName}</td>
                    <td>₱${element.unitPrice}</td>
                    <td>${element.quantity}</td>
                    <td>${element.supplier}</td>
                </tr>
            `;
        })

        content.innerHTML = html;
    })
    .catch(error=>{
        console.log(error)
    })
}



