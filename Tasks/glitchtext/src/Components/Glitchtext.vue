<template>
  <div class="container">
    {{text}}
    <button @click="glitchMethod">Press me</button>
  </div>
</template>

<script>
  export default{
      data(){
          return {
              targetText: 'This text will be glitched',
              glitch: '!@#$%^&*()_+',
              finalText: '',
              speed: 100,
          }
      },
      computed: {
          text(){
              return this.finalText;
          },
      },
      methods: {
          glitchMethod(){
                  let i=0;
                  self = this;
                  setTimeout(function sChar(){
                      if (i >= self.targetText.length) return self.finalText;
                      self.finalText += self.targetText[i];
                      i++;
                      setTimeout(sChar, self.speed);
                  }, self.speed);
          },
      },
  }
</script>
