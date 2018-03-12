<template>
  <div class="simpleaudio">
    <vue-simple-audio 
        :songs="songs" 
        width="500" 
        initial-volume="40" 
        loop auto-play
        repeat
        bg-color="#345345">
    </vue-simple-audio>
  </div>
</template>
 
<script>
import VueSimpleAudio from 'vue-simple-audio'
 
export default {
  name: 'simpleaudio',
  components: {
    VueSimpleAudio
  },
  data(){
    return {
      songs: [{
        "url": "https://www.youtube.com/watch?v=FGBhQbmPwH8",
        "songname": "One More time"
      }, {
        "url": "http://fs.open.kugou.com/aecae9884f5c9ca2063864958ddb799e/58ac03ae/G008/M07/06/09/qIYBAFUK1BuAB-aSADmE5bqELvQ099.mp3",
        "songname": "Maroon-sugar"
      }]
    }
  }
}
</script> 