class Quiestion{
    constructor(){
        this.input1 = createInput("Enter your name");
        this.button = createButton('Submit');
        this.input2 = createInput("enter correct option"); 
        this.line1=createElement("h3")
        this.line2=createElement("h3")
        this.line3=createElement("h3")
       
    }
    hide(){
        this.input1.hide();
        this.button.hide();
        this.input2.hide()
         
    }
    display(){
        var title = createElement('h2')
        title.html("My Quiz Game");
        title.position(130, 0);
    
         this.line1 = createElement('h3')
        this.line1.html("who is the father of the nation?");
        this.line1.position(130, 100);

        this.line2= createElement('h3')
        this.line2.html("1: Netaji subash chandrabose");
        this.line2.position(130, 150);
        
        this. line3 = createElement('h3')
       this. line3.html("2:mahatma gandhi");
       this. line3.position(130, 200);

        this.input1.position(130, 260);
        this.button.position(250, 350);
        this.input2.position(350,260)

        this.button.mousePressed(()=>{
            this.input1.hide();
            this.button.hide();
            this.input2.hide()

            contestent.name = this.input1.value();
            contestentCount+=1;
            contestent.answer=this.input2.value()
            contestent.index = contestentCount;
            contestent.update();
            contestent.updateCount(contestentCount);
            
          });
    }
}