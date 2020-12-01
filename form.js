class form{
    constructor(){
        this.title= createElement('h2');
        this. input=createInput('Enter Your Name');
        this.button = createButton('Done');
        this. greeting = createElement('h4');
    }

    display(){
       
        this.title.position(250, 200);
        this.title.html("4 Player Car Racing Game");
        
        this.input.position(200, 300);
        
        this.button.position( 200, 400);
        this.button.mousePressed(function(){
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount++;
        player.index=playerCount;
        player.update();
        player.updateCount(PC);
        this.greeting.html("Hello"+ name );
        this.greeting.position(400, 300);

        })
    }
    
    hide(){
        this.greeting.hide();
this.button.hide();
this.input.hide();
    }
}
