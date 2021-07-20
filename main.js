//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

green_car_x = 430;
green_car_y = 130;

//Give specific height and width to the car image
green_car_width = 80;
green_car_height = 160;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	background_image_Tag = new Image();
	background_image_Tag.onload = uploadBackground;
	background_image_Tag.src = background_image;

	greencar_image_Tag = new Image();
	greencar_image_Tag.onload = uploadgreencar;
	greencar_image_Tag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_image_Tag ,0 ,0 , canvas.width, canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_image_Tag,green_car_x ,green_car_y, green_car_width, green_car_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(green_car_y >= 0)
	{
		green_car_y = green_car_y - 10;
		uploadBackground();
		uploadgreencar();
		
	}
}

function down()
{
	//Define function to move the car downward
	if(green_car_y <= 800)
	{
		green_car_y = green_car_y + 10;
		uploadBackground();
		uploadgreencar();
		
	}
}

function left()
{
	//Define function to move the car left side
	if(green_car_x >= 0)
	{
		green_car_x = green_car_x - 10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if(green_car_x <= 599)
	{
		green_car_x = green_car_x + 10;
		uploadBackground();
		uploadgreencar();
		
	}
}
