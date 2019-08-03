  <style>
    #field {
      width: 450px;
      height: 600px;
      border: 10px groove black;
      background-color: #00FF00;
      position: relative;
      /* overflow: hidden; */
    }

    #ball {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -20px;
      margin-top: -20px;
      -webkit-transition: all 1s;
      -moz-transition: all 1s;
      -o-transition: all 1s;
      -ms-transition: all 1s;
      transition: all 1s;
    }
  </style>

<template>
  <div id="field" @click='mClick'>
        <img src="https://js.cx/clipart/ball.svg" id="ball" @mouseover='mOverFunc'>
      </div>
</template>

    
<script>
export default{

methods: {
  mOverFunc(){
      let ballX = Math.random()*(field.clientWidth-ball.clientHeight/2);
      let ballY = Math.random()*(field.clientHeight-ball.clientWidth/2);

      if(ballX>field.clientWidth) ballX = field.clientWidth - ball.clientWidth/2;
      if(ballX<ball.clientWidth/2) ballX = ball.clientWidth/2;
      if(ballY>field.clientHeight) ballY = field.clientHeight - ball.clientHeight/2;
      if(ballY<ball.clientHeight/2) ballY = ball.clientHeight/2;

      ball.style.left = ballX + 'px';
      ball.style.top = ballY + 'px';
  },

  mClick(e){
      let ballX = e.clientX;
      let ballY = e.clientY;

      if(ballX>field.clientWidth) ballX = field.clientWidth - ball.clientWidth/2;
      if(ballX<ball.clientWidth/2) ballX = ball.clientWidth/2;
      if(ballY>field.clientHeight) ballY = field.clientHeight - ball.clientHeight/2;
      if(ballY<ball.clientHeight/2) ballY = ball.clientHeight/2;

      ball.style.left = ballX + 'px';
      ball.style.top = ballY + 'px';
  }
}

}
</script>
</body>

</html>