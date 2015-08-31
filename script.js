window.addEventListener("load", function(){
	var img1 = document.getElementById("gallery1");
	var img2 = document.getElementById("gallery2");
	var img3 = document.getElementById("gallery3");
	var left1 = document.getElementById('left1');
	var right1 = document.getElementById('right1');
	var left2 = document.getElementById('left2');
	var right2 = document.getElementById('right2');
	var left3 = document.getElementById('left3');
	var right3 = document.getElementById('right3');
    var digiClock = document.getElementById("text1");
    var digiClock = document.getElementById("text2");
    var digiClock = document.getElementById("text3");

	var node = ["img0.jpg", "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg", "img11.jpg"];

	var curr_img1= 0;
	var curr_img2= 0;
	var curr_img3= 0;

	left1.addEventListener('click',function(){
		curr_img1--;
		if (curr_img1 < 0) {
			curr_img1 = 11;
		};
		img1.src="img/" + node[curr_img1%12];
        text1.innerHTML = curr_img1 + 1 + "/12";
	});

	right1.addEventListener('click',function(){
		curr_img1++;
		if (curr_img1 > 11) {
			curr_img1 = 0;
		};
		img1.src="img/" + node[curr_img1%12];
        text1.innerHTML = curr_img1 + 1 + "/12";
	});
	left2.addEventListener('click',function(){
		curr_img2--;
		if (curr_img2 < 0) {
			curr_img2 = 11;
		};
		img2.src="img/" + node[curr_img2%12];
        text2.innerHTML = curr_img2 + 1 + "/12";
	});

	right2.addEventListener('click',function(){
		curr_img2++;
		if (curr_img2 > 11) {
			curr_img2 = 0;
		};
		img2.src="img/" + node[curr_img2%12];
        text2.innerHTML = curr_img2 + 1 + "/12";
	});
	left3.addEventListener('click',function(){
		curr_img3--;
		if (curr_img3 < 0) {
			curr_img3 = 11;
		};
		img3.src="img/" + node[curr_img3%12];
        text3.innerHTML = curr_img3 + 1 + "/12";
	});

	right3.addEventListener('click',function(){
		curr_img3++;
		if (curr_img3 > 11) {
			curr_img3 = 0;
		};
		img3.src="img/" + node[curr_img3%12];
        text3.innerHTML = curr_img3 + 1 + "/12";
	});
});