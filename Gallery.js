var setText = new Array(4);
setText[0] = "Imagine... a flat terrain abounding with grass"
setText[1] = "With a lake to the east..."
setText[2] = "And a cave waiting to be explored."
setText[3] = "On a cool and cloudy day"
setText[4] = "On a cool and cloudy day"

var setImg = new Array(4);
setImg[0] = new Image()
setImg[0].src = "Images/set1.png"
setImg[1] = new Image()
setImg[1].src = "Images/set2.png"
setImg[2] = new Image()
setImg[2].src = "Images/set3.png"
setImg[3] = new Image()
setImg[3].src = "Images/set4.png"

document.getElementById("setText").innerHTML = setText[0];
document.getElementById("setImage").appendChild(setImg[0]);

document.getElementById("setText").onmouseover = function() {refreshSet()};
document.getElementById("setImage").onmouseover = function() {refreshSet()};

 
for (i=0; i<setImg.length; i++) {
        setImg[i].style.width = '500px'
        setImg[i].style.height = '300px'
    } 

    const delay = ms => new Promise(res => setTimeout(res, ms));
    const refreshSet = async() => {     
            await delay(3000);
            document.getElementById("setImage").replaceChild(setImg[1], setImg[0]);
            document.getElementById("setText").innerHTML = setText[1];
            await delay(3000);
            document.getElementById("setImage").replaceChild(setImg[2], setImg[1]);
            document.getElementById("setText").innerHTML = setText[2];
            await delay(3000);
            document.getElementById("setImage").replaceChild(setImg[3], setImg[2]);
            document.getElementById("setText").innerHTML = setText[3];
       
    }


