function changeShoe(shoeNumber) {
    let shoeImages = {
        1: "https://via.placeholder.com/200/FF4500/FFFFFF?text=Nike+Red+New",
        2: "https://via.placeholder.com/200/4169E1/FFFFFF?text=Nike+Blue+New",
        3: "https://via.placeholder.com/200/32CD32/FFFFFF?text=Nike+Green+New"
    };

    document.getElementById("shoe" + shoeNumber).src = shoeImages[shoeNumber];
}
