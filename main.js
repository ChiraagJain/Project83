var mouse_event = "Empty";


canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color ="Empty";
width_of_line = "Empty";
radius = "Empty";
width = screen.width;
    new_width = screen.width - 70;
    new_height = screen.height - 300;

    if (width<992) {
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    }

canvas.addEventListener("touchstart",my_touch_start);
function my_touch_start(e) {
    console.log("my touch start");
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width").value;
        radius = document.getElementById("radius").value;
}

    
canvas.addEventListener("touchmove",my_touch_move);
function my_touch_move(e) {
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
   
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_touch_x,current_position_of_touch_y,radius,0,2*Math.PI);
        ctx.stroke();

        console.log("current position of x and y cordinate =");
        console.log("x ="+ current_position_of_touch_x +"y ="+ current_position_of_touch_y);   
        
        }
 
 function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}