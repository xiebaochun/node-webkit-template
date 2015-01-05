$(function () {
   ///////////////////////////////////////////////////////////window bar click
                                                                      //窗口栏
   if(typeof require!="undefined"){
                                                            
   
    
      var nw = require('nw.gui');

      var win = nw.Window.get();

      win.isMaximized = false;

      win.setMinimumSize(950, 550);

      $("#min").click(function(){
          win.minimize();
      });                                                        
      
      $("#max").click(function(){
          if (win.isMaximized){
              win.unmaximize();
          }else{
              win.maximize();
          }
      });
      
      $("#close").click(function(){
          win.close();
      });

      
      win.on('maximize',function(){
          win.isMaximized = true;
      });

      win.on('unmaximize',function(){
          win.isMaximized = false;
      })

      win.on('loaded', function() {
         
          
      });
    }
    ////////////////////////////////////////////////////////////your code
    setTimeout(function(){
                  $("#loader").fadeOut();  
                },3000);
   
    
});