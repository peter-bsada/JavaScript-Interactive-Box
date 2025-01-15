(function () {
    'use strict';

    var bodyElement = document.getElementsByTagName("body")[0];

    var box1 = document.getElementById("box1");

    box1.addEventListener("click", function(event) {
        event.target.classList.toggle("selected");
    });


    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var boxHeight = box1.offsetHeight;
    var boxWidth = box1.offsetWidth;


    function centerBox() {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        boxHeight = box1.offsetHeight;
        boxWidth = box1.offsetWidth;
        box1.style.top = (windowHeight / 2) - (boxHeight / 2) + "px";
        box1.style.left = (windowWidth / 2) - (boxWidth / 2) + "px";
    }

    function copyElements() {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var temp = all[i].cloneNode();

            // temp.removeAttribute("id");
            temp.addEventListener("click", function() {
                event.target.classList.toggle("selected");
            });
            bodyElement.appendChild(temp);

            temp.style.top = Math.floor(Math.random() *
            (window.innerHeight - temp.offsetHeight)) + "px";
            temp.style.left = Math.floor(Math.random() *
            (window.innerWidth - temp.offsetWidth)) + "px";
        }
        console.log(i);
    }

    function circleElements() {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var allcircle = all[i];

            allcircle.classList.toggle("circle");
        }
        console.log(allcircle);
    }


    function bigboxElements() {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var allBig = all[i];

            allBig.style.width= allBig.offsetWidth + 10 + "px";
            allBig.style.height= allBig.offsetHeight+ 10 + "px";
            allBig.style.top= allBig.offsetTop - 10 + "px";
            allBig.style.left= allBig.offsetLeft - 10 + "px";
            console.log(allBig);
        }
    }

    function smallboxElements() {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var allsmall = all[i];

            allsmall.style.width = allsmall.offsetWidth - 30 + "px";
            allsmall.style.height = allsmall.offsetHeight - 30 + "px";
            allsmall.style.top = allsmall.offsetTop + 10 + "px";
            allsmall.style.left = allsmall.offsetLeft + 10 + "px";
            console.log(allsmall);
        }
    }

    function colorElements() {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var allColor = all[i];

            allColor.classList.toggle("yellow");
            console.log(allColor);
        }
    }

    function removeElements() {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var allremove = all[i];

            allremove.parentNode.removeChild(allremove);
        }
    }

    function arrowUpElement() {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var allUp = all[i];

            var top = allUp.offsetTop;

            allUp.style.top = (top - 10) + "px";
        }
    }

    function arrowLeftElement() {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var allLeft = all[i];
            var left = allLeft.offsetLeft;

            allLeft.style.left = (left - 10) + "px";
        }
    }
    function arrowDownElement() {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var allUp = all[i];
            var top = allUp.offsetTop;

            allUp.style.top = (top + 10) + "px";
        }
    }

    function arrowRightElement() {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var allLeft = all[i];

            var left = allLeft.offsetLeft;

            allLeft.style.left = (left + 10) + "px";
        }
    }

    function unselectedElement() {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var allremove = all[i];

            allremove.classList.remove("selected");
        }
    }

    function selectedElement() {
        var all = document.querySelectorAll(".box");

        for (var i = 0; i < all.length; i++) {
            var allAdd = all[i];

            allAdd.classList.add("selected");
        }
    }

    function downElement() {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var allDown = all[i];

            allDown.style.zIndex = "-1";
        }
    }

    function upElement() {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var allDown = all[i];

            allDown.style.zIndex = "+1";
        }
    }


    document.ondblclick = function(event) {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var allClick = all[i];

            event.target.classList.add("animateSize");
            event.target.style.transitionDuration="2s";
            event.target.style.width="2px";
            event.target.style.height="2px";
            var bodyElement = document.getElementsByTagName("body")[0];

            window.setTimeout(function() {
                bodyElement.removeChild(event.target.remove());
            }, 2000);
        }
    };

    function copieElement() {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var temp = all[i].cloneNode();

            temp.removeAttribute("id");
            temp.addEventListener("click", function() {
                event.target.classList.toggle("selected");
            });
            bodyElement.appendChild(temp);
            temp.classList.toggle("circle");
            temp.classList.toggle("red");
            temp.style.top = Math.floor(Math.random() *
            (window.innerHeight - temp.offsetHeight)) + "px";
            temp.style.left = Math.floor(Math.random() *
            (window.innerWidth - temp.offsetWidth)) + "px";
        }
        console.log(i);
    }

    window.addEventListener("resize", centerBox);

    document.addEventListener("keydown", function(event) {
        var key = event.key;

        if (key === "t") {
            copyElements();
        }
        if (key === "e") {
            circleElements();
        }
        if (key === "q") {
            bigboxElements();
        }
        if (key === "w") {
            smallboxElements();
        }
        if (key === "r") {
            colorElements();
        }
        if (key === "y") {
            removeElements();
        }
        if (key == "ArrowUp") {
            arrowUpElement();
        }
        if (key == "ArrowLeft") {
            arrowLeftElement();
        }
        if (key == "ArrowDown") {
            arrowDownElement();
        }
        if (key == "ArrowRight") {
            arrowRightElement();
        }
        if (key == "u") {
            unselectedElement();
        }
        if (key == "i") {
            selectedElement();
        }
        if (key == "a") {
            downElement();
        }
        if (key == "s") {
            upElement();
        }
        if (key == "p") {
            copieElement();
        }
    });
    centerBox();
})();
