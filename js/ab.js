$(document).ready(function(){
  $(".circle-text").click(function(){
  //$(".message").css('display','block');
  //$('#home-body').fadeIn(100);

  $(".clo").click(function(){
   $(".message").hide();
   $('#home-body').fadeOut(100);
  })


  $(".clo1").click(function(){
	  $(".honors").css('display','none');
	  $('#home-body').fadeOut(100);
  })
  })

   var i=3;
   $(".circle-text").rotate({
    bind:{
      click:function(){ 
         var charIndex = Math.floor(Math.random()*100); //随机产生一个1到100的数
         var message="";
         if (charIndex>0 && charIndex<30 ){
			  n=4;
			  message="10万模拟金"
         }else if (charIndex>=30 && charIndex<60){
			  n=5;
			  message="30万模拟金"
         }else if  (charIndex>=60 && charIndex<90){
              n=6;
              message="50万模拟金"
         }else if (charIndex>=90&& charIndex<95){
              n=7; 
              message="10元话费"
         }else if (charIndex>=95 && charIndex<100){
              n=3; 
              message="再接再厉"
         }
      
 
      i=i-1;
    if ( i < 0 ){

       $(".honors").css('display','block');
        $("#n1").html('');
        $(".honors").css ('background','url(images/hr_j32.png) no-repeat');
        $(".honors").css ('background-size','100%');
        $(".message").css('display','none');

    }else {
       $(".circle-mid").rotate({      
            duration:3000,               //转动时间
            angle: 0,                    //起始角度
            animateTo:45*n+1440,      //结束的角度
            easing: $.easing.easeOutSine,//动画效果，需加载jquery.easing.min.js
            callback: function(){
            if (n != 3 ){
            $(".honors").css('display','block');

            $("#n1").html(message);
            $('#home-body').fadeIn(100);
            $("#n2").html('');
            $("#n2").html('您还有'+ i +'次机会！');
              //alert(a.prize+a.message);//简单的弹出获奖信息

            }else {
                 $(".honors").css('display','block');
                 $(".honors").css ('background','url(images/hr_j31.png) no-repeat');
                  $(".honors").css ('background-size','100%');
                 $("#n1").html('');
                 $('#home-body').fadeIn(100);
                 $("#n2").html('');
                $("#n2").html('您还有'+ i +'次机会！');
              }
            }
         });

    }
 }
      }   
   });
});