const shoes = [
    {
        name: "Nike Air Force 1",
        price: "$110.00",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f4ac1242-7ef5-4761-b897-91ef0fa2ed89/air-force-1-07-shoes-rWtqPn.png",
        link: "https://www.nike.com/t/air-force-1-07-shoes-rWtqPn"
    },
    {
        name: "Air Jordan 1 Low SE",
        price: "$125.00",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9a9b18f4-c8b2-43aa-bb92-c9bb00d4ea15/air-jordan-1-low-se-shoes-6n13pj.png",
        link: "https://www.nike.com/t/air-jordan-1-low-se-shoes-6n13pj"
    },
    {
        name: "Nike Dunk Low",
        price: "$115.00",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/22d227dc-e361-45e3-8bc1-d88745d3d830/dunk-low-shoes-Wn3xHc.png",
        link: "https://www.nike.com/t/dunk-low-shoes-Wn3xHc"
    },
    {
        name: "Nike Air Max Plus",
        price: "$180.00",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e6ed09bb-e2b4-4384-8b1f-222fd04ff0b8/air-max-plus-shoes-Wh2zqF.png",
        link: "https://www.nike.com/t/air-max-plus-shoes-Wh2zqF"
    },
    {
        name: "Nike Pegasus Trail 4 GORE-TEX",
        price: "$160.00",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5b6e728f-62d8-41d3-8e45-6e95a857d607/pegasus-trail-4-gore-tex-trail-running-shoes-N2DGvB.png",
        link: "https://www.nike.com/t/pegasus-trail-4-gore-tex-trail-running-shoes-N2DGvB"
    }
];

// Function to dynamically add shoes to the page
function loadShoes() {
    const shoeList = document.getElementById("shoe-list");

    shoes.forEach(shoe => {
        const shoeDiv = document.createElement("div");
        shoeDiv.classList.add("shoe");
        shoeDiv.onclick = () => window.open(shoe.link, "_blank");

        shoeDiv.innerHTML = `
            <img src="${shoe.image}" alt="${shoe.name}">
            <p>${shoe.name}</p>
            <span>${shoe.price}</span>
        `;

        shoeList.appendChild(shoeDiv);
    });
}

// Load shoes when page is ready
window.onload = loadShoes;
