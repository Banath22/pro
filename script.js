window.addEventListener("load", function(){
	var img_ = document.getElementById("tourimages");
	var left = document.getElementById('left');
	var right = document.getElementById('right');

	var node = ["img0.jpg", "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg", "img11.jpg"];

	var curr_img= 0;

	left.addEventListener('click',function(){
		curr_img--;
		if (curr_img < 0) {
			curr_img = 11;
		};
		img_.src="img/" + node[curr_img%4];
	});

	right.addEventListener('click',function(){
		curr_img++;
		if (curr_img > 11) {
			curr_img = 0;
		};
		img_.src="tourimg/" + node[curr_img%4];
	});