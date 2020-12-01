class game{

constructor(){

}

getState(){
    var db = database.ref('gameState')
    db.on("value",function(data){
        GS=data.val()
    })
}
update(ud){
    database.ref('/').update({gameState:ud})

}

start(){
    if(GS==0){
player=new player();
player.getCount();
form=new form();
form.display();

    }
}
play(){
    form.hide();
    player.getPlayerInfo();
    if(playerinfo!=undefined){
var B = 50;
        for(var A in playerinfo){
            if(A == "player"+player.index){
                fill ("red");
            }
            else{
                fill("blue");
            }
            textSize(20);
            B=B+15;
            text(playerinfo[A].name+":"+playerinfo[A].distance, 100,B)
        }
    }
    if(keyIsDown(UP_ARROW)&&player.index!=null){
        player.distance=player.distance+100;
        player.update();
    }
}




}