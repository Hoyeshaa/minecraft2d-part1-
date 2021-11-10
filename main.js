var canvas = new fabric.Canvas("myCanvas");
player_height = 100;
player_width = 100;
block_height = 30;
block_width = 30;
player_x = 10;
player_y = 10;
player_object = "";
block_object = "";

function playerupdate(){
    fabric.img.fromURL("player.png", function(img){
        player_object = img;
        player_object.scaleToWidth(140);
        player_object.scaleToHeight(140);
player_object.set({
    left:player_x,
    top:player_y,
});
canvas.add(player_object);
    })
}

function objectupdate(image){
    fabric.img.fromURL(image, function(img){
        block_object = img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
block_object.set({
    left:player_x,
    top:player_y,
});
canvas.add(block_object);
    })
}