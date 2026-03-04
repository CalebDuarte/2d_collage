let images = [
    ["img1.png","img2.png","img3.png"],
    ["img4.png","img5.png","img6.png"],
    ["img7.png","img8.png","img9.png"]
]

let display = document.getElementById("display")
let html = "<table border = 1>";

for(let i = 0; i<images.length; i++){
    //nested loop
    //tabel rows
    html+=`<tr>`;
    for(let j = 0; j<images[i].length; j++){
        html+=`<td><img src = "/images/${images[i][j]}"></td>`;
        //console.log(alphabets[i][j])
    }
    html+="</tr>"
}
html+="</table>"
display.innerHTML = html
//display alpha array on page using template literals
