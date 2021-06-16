// 2)callback functions are functions that wait for a particular task to be completed so that it can be called later
    // 
    function myCar1() {
        myDisplayer("Hello");
          }
      
          function myCar2() {
        myDisplayer("Goodbye");
          }
      
      mySCar2();
      myCar1();
          
// this keyword has been used to refer to the property of an object of lisalab
      var lisaLab = {
        name: "bar",
        func: function() {
            var self = this;
            console.log("outer func:  this.name = " + this.name);
            console.log("outer func:  self.name = " + self.name);
            (function() {
               console.log ("inner func:  this.name = " + this.name);
                console.log("inner func:  self.name = " + self.name);
            }());
        }
    };
    
    lisaLab.func();
    