class Quiz{
    constructor(){

    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      async start(){
        if(gameState === 0){
          contestent = new Contestent();
          var contestentCountRef = await database.ref('contestentCount').once("value");
          if(contestentCountRef.exists()){
           contestentCount =contestentCountRef.val();
            contestent.getCount();
          }
          quiestion = new Quiestion()
          quiestion.display();
        }
    }
    play(){
      quiestion.hide();
      
      textSize(30);
     // text("Game Start", 120, 100)
      Contestent.getPlayerInfo();
  
      if(allContestents !== undefined){
        var display_position = 290;
        for(var plr in allContestents){
         var correctanswer="2"
         if(correctanswer===allContestents[plr].answer){
          textSize(15);
          fill ("green")
         
         }
         else{
           fill("red")
         }
          display_position+=20;
         
          text(allContestents[plr].name + ": " + allContestents[plr].answer, 250,display_position)
        }  
    }
}
}