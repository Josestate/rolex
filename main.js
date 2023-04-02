function hideWelcome(){
    $(".welcome").fadeOut(500, function (){
        $(".afterContainer").delay(300).fadeIn(500);
        $(".headerCls").delay(300).fadeIn(500);
        $(".videoContainer").delay(300).fadeIn(500);
    });
}
function golden(e){
    $(".relojesImgs").fadeOut(500).promise().done(function (){
        $(".golden").fadeIn(500);
    });
    document.querySelector(".selectGolden").style.color = `#c08801b8`;
    document.querySelector(".selectSilver").style.color = `#fff`;
    document.querySelector(".selectWoman").style.color = ` #fff`;
    document.querySelector(".selectExclusive").style.color = ` #fff`;
}
function silver(){
    $(".relojesImgs").fadeOut(500).promise().done(function (){
        $(".silver").fadeIn(500);
    });
    document.querySelector(".selectSilver").style.color = `#d6cfbdb8`;
    document.querySelector(".selectGolden").style.color = `#fff`;
    document.querySelector(".selectWoman").style.color = ` #fff`;
    document.querySelector(".selectExclusive").style.color = ` #fff`;
}
function woman(){
    $(".relojesImgs").fadeOut(500).promise().done(function (){
        $(".woman").fadeIn(500);
    });
    document.querySelector(".selectWoman").style.color = ` #b0057ab8`;
    document.querySelector(".selectGolden").style.color = `#fff`;
    document.querySelector(".selectSilver").style.color = `#fff`;
    document.querySelector(".selectExclusive").style.color = ` #fff`;
}
function exclusive(){
    $(".relojesImgs").fadeOut(500).promise().done(function (){
        $(".exclusive").fadeIn(500);
    });
    document.querySelector(".selectExclusive").style.color = ` #c00101b8`;
    document.querySelector(".selectGolden").style.color = `#fff`;
    document.querySelector(".selectSilver").style.color = `#fff`;
    document.querySelector(".selectWoman").style.color = ` #fff`;
}
function displayMenu(e){
    if(screen.width < 700){
        document.querySelector(".headerCls").style.marginBottom = '200px';
    }
    if(document.querySelector(".navSelector").style.display !== "block"){
        $(".navSelector").fadeIn(500);
        document.querySelector(".menuImg").style.rotate = '180deg';
    }
    else{
        document.querySelector(".menuImg").style.rotate = '360deg';
        if(screen.width < 700){
            document.querySelector(".headerCls").style.marginBottom = '0';
        }
        $(".navSelector").fadeOut(500);
    }
} 
function hideMenu(){
    $(".navSelector").fadeOut(500);
}
function displayWatchesBox(){
    $(".relojesImgs").css({
        'opacity': '0',
        'display': 'flex'
    }).animate({'opacity': '1'}, 2000);
    $(".selectType").css({
        'opacity': '0',
        'display': 'flex'
    }).animate({'opacity': '1'}, 2000);

    if(screen.width < 700){
        document.querySelector(".headerCls").style.marginBottom = '0';
        $(".relojesImgs").css({
            'opacity': '0',
            'display': 'grid'
        }).animate({'opacity': '1'}, 2000);
        $(".selectType").css({
            'opacity': '0',
            'display': 'grid'
        }).animate({'opacity': '1'}, 2000);
    }

    hideMenu();
    document.querySelector(".menuImg").style.rotate = '360deg';
    $(".boxSecondHour").fadeOut(500, function (){
        $(".time").fadeOut(500);
        $(".videoContainer").fadeOut(500);
        $(".boxOfWatches").delay(500).fadeIn(500);
    });
   
       
}
function displayHour(){
    $(".navSelector").fadeOut(500);
    document.querySelector(".menuImg").style.rotate = '360deg';
    if(screen.width < 700){
        document.querySelector(".headerCls").style.marginBottom = '0';
    }
    $(".boxSecondHour").fadeOut(500, function (){
        $(".selectType").fadeOut(500);
        $(".relojesImgs").fadeOut(500);
        $(".videoContainer").fadeOut(500);
        $(".time").delay(500).fadeIn(500);
    });
}
function showPrincipal(){
    hideMenu();
    document.querySelector(".menuImg").style.rotate = '360deg';
    displayHome()
    $(".afterContainer").fadeOut(500, function (){
        $(".welcome").delay(500).fadeIn(500);
    });
}
function displayHome(){
    $(".navSelector").fadeOut(500);
    document.querySelector(".menuImg").style.rotate = '360deg';
    $(".selectType").fadeOut(500, function (){
        $(".time").fadeOut(500);
        $(".relojesImgs").fadeOut(500);
        $(".videoContainer").delay(500).fadeIn(500);
        $(".boxSecondHour").delay(500).fadeIn(500);
    });
}
(function () {
    calculateLines();
    setInterval(() => {
     calculateHourDegrees();
     calculateMinuteDegrees();
     calculateSeconds();
    }, 1000);
  })();
  
  function linearMap(value, min, max, newMin, newMax) {
      return newMin + (newMax - newMin) * (value - min) / (max - min);
  }
  
  function calculateHourDegrees() {
    const currentHour = new Date().getHours() - 12;
    const angle = linearMap(currentHour, 0, 12, 0, 360);
    document.querySelector(".hoursHand").style.transform = `rotate(${angle}deg)`;
  }
  function calculateMinuteDegrees() {
    const currentMinutes = new Date().getMinutes();
    const angle = linearMap(currentMinutes, 0, 60, 0, 360);
    document.querySelector(".minutesHand").style.transform = `rotate(${angle}deg)`;
  }
  
  function calculateSeconds() {
    const currentMinutes = new Date().getSeconds();
    const angle = linearMap(currentMinutes, 0, 60, 0, 360);
    document.querySelector(".secondsHand").style.transform = `rotate(${angle}deg)`;
  }
  
  function calculateLines() {
    const lines = document.querySelectorAll(".line");
    const numberLines = lines.length;
    for (let i = 0; i < numberLines; i++) {
      const line = lines[i];
      const angle = linearMap(i, 0, numberLines, 0, 360);
      line.style.transform = `rotate(${angle}deg)`;
    }
  }
setInterval (function timeBox(){
    let dater = new Date();
    let hoursTaker = dater.getHours();
    let minsTaker = dater.getMinutes();
    let secTaker = dater.getSeconds();
    document.querySelector(".numHour").textContent = hoursTaker + " :";
    document.querySelector(".numMinute").textContent = minsTaker + " :";
    document.querySelector(".numSeconds").textContent = secTaker;
},1000);
   
 