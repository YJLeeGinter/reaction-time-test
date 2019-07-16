var screen = document.querySelector('#screen');

var startTime;
var endTime;

var record = [];

var timeOut;
 //performance.now() can be used, too for precision
//console.time('time');
screen.addEventListener('click', function(){

   //console.timeEnd('time');
   if(screen.classList.contains('waiting')) {
    screen.classList.remove('waiting');
    screen.classList.add('ready');
    screen.textContent = 'when green, click';
     timeOut = setTimeout(function(){
        startTime = new Date(); // new Date()를 하는 순간 그 시각이 저장된다. 
        screen.click();
    }, (Math.random() * 1000)+ 2000); // 0 ~ 1000 사이 수

    } else if(screen.classList.contains('ready')){ // ready state
        if (!startTime) { // 부정 출발 undefined , 0, null, false, '', NaN
            clearTimeout(timeOut );

            screen.classList.remove('ready');
            screen.classList.add('waiting');
            screen.textContent = 'click and wait till the sreen turns into green';
        } else{
            screen.classList.remove('ready');
            screen.classList.add('now');
            screen.textContent = 'Click now!';
        }
   } else if(screen.classList.contains('now')){
    
     endTime = new Date();
    console.log('반응속도',  (endTime-startTime)/1000); // 밀리초 단위 1 sec = 1000 millisec 
    record.push(endTime - startTime);
    startTime = null;
    endTime = null;
    screen.classList.remove('now');
    screen.classList.add('waiting');
    screen.textContent = 'Click here to start!';
   }
})