<template>
  <div class="container">
    <WelcomeBanner/>
    <ul class="timeline">
      <!-- Item 1 -->
      <li>
        <div class="direction-r">
          <div class="flag-wrapper-r">
            <img src="@/assets/uofc_logo_tmp.png" class="dot" alt="">
            <span class="flag flag-r">Started Undergrad</span>
            <span class="time-wrapper">
              <span class="time">2013</span>
            </span>
          </div>
          <div class="desc">
            Not getting into my first choice of study was disheartening, but after four years, I am glad computer science was my second choice.
          </div>
        </div>
      </li>

      <!-- Item 2 -->
      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <div class="year-title-img">
              <img src="@/assets/microsoft_logo_tmp.png" class="dot" alt="">
              <span class="time-wrapper"><span class="time">2014</span></span>
              <span class="flag flag-l">Microsoft Imagine Camp</span>
            </div>
          </div>
          <div class="desc">
            First dev camp, my team came in third place for designing a mobile app on Windows mobile for the university's student centre.
          </div>
        </div>
      </li>

      <!-- Item 3 -->
      <li>
        <div class="direction-r">
          <div class="flag-wrapper-r">
            <img src="@/assets/android_logo_tmp.png" class="dot" alt="">
            <span class="flag flag-r">Developing Apps</span>
            <span class="time-wrapper"><span class="time">2015</span></span>
          </div>
          <div class="desc">
            Realized I was not getting real world experience through my education, so I set off to develop two mobile apps, one individually, and the other as part of a team of two.
          </div>
        </div>
      </li>

      <!-- Item 4 -->
      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <div class="year-title-img">
              <img src="@/assets/yyc_tmp.png" class="dot" alt="">
              <span class="time-wrapper"><span class="time">2016</span></span>
              <span class="flag flag-l">Calgary Airport Co-op</span>
            </div>
          </div>
          <div class="desc">
            Started my 16 month journey with the Calgary Airport Authority, where I had the oppertunity to not only grow my professional skills, but more importantly my interpersonal skills.
          </div>
        </div>
      </li>

      <!-- Item 5 -->
      <li>
        <div class="direction-r">
          <div class="flag-wrapper-r">
            <div class="dot multi-dot">
              <img src="@/assets/vue_logo.png" alt="">
              <img src="@/assets/nodejs_logo.png" alt="">
              <img src="@/assets/mongodb_logo.png" alt="">
            </div>
            <span class="flag flag-r">Full Stack</span>
            <span class="time-wrapper">
              <span class="time">2017</span>
            </span>
          </div>
          <div class="desc">
            During my internsthip, I came understood the importance of a well built website. This motivated me to learn the MEVN stack.
          </div>
        </div>
      </li>

      <!-- Item 6 -->
      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <div class="year-title-img">
              <img src="@/assets/apple_logo.png" class="dot" alt="">
              <span class="time-wrapper"><span class="time">2018</span></span>
              <span class="flag flag-l">iOS Development</span>
            </div>
          </div>
          <div class="desc">
            Since I had already developed Android applications in the past, I thought, why not learn iOS app development?
          </div>
        </div>
      </li>

      <!-- Item 7 -->
      <li>
        <div class="direction-r">
          <div class="flag-wrapper-r">
            <img src="@/assets/dot_dot_dot.png" class="dot" alt="">
            <span class="flag flag-r">Goals and Aspirations</span>
            <span class="time-wrapper"><span class="time">Future</span></span>
          </div>
          <div class="desc">
            We have so much data available to us at any given moment, so much that it can seem overwhelming. However, data is only as good as it can be understood, this is where the field of information visualization comes into play. This is the area of computer science I am keen on learning more about.
          </div>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
import WelcomeBanner from '@/components/WelcomeBanner.vue'

export default {
  name: 'home',
  components: {
    WelcomeBanner
  },

  mounted () {
    // eslint-disable-next-line
    console.log('domain is: ' + process.env.VUE_APP_DOMAIN);
  }
}
</script>

<style scoped>
header h1{
  text-align: center;
  font-weight: bold;
  margin-top: 0;
}

 header p{
   text-align: center;
   margin-bottom: 0;
 }

 .main-area {
   height: 100% !important;
 }

.dot{
  display: inline-block;
  background-color: white !important;
  box-shadow: 0px 0px 1px rgba(0,0,0,0.05) !important;
  padding: 2px;
}

.timeline {
  position: relative;
  padding: 0;
  width: 100%;
  margin-top: 20px;
  list-style-type: none;
}

.timeline:before {
  position: absolute;
  left: 50%;
  top: 0;
  content: ' ';
  display: block;
  width: 2px;
  height: 100%;
  margin-left: -1px;
  background: rgb(213,213,213);
  background: -moz-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(30,87,153,1)), color-stop(100%,rgba(125,185,232,1)));
  background: -webkit-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: -o-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: -ms-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: linear-gradient(to bottom, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  z-index: 5;
}

.timeline li {
  padding: 2em 0;
}

.timeline .dot{
  width: 3rem;
  position: absolute;
  z-index: 5;
  left: 0;
  right: 0;
}
.timeline .multi-dot {
  left: -2px !important;
  box-shadow: none !important;
  background: none !important;
}
.timeline .multi-dot img {
  width: 3rem;
  box-shadow: 0px 0px 1px rgba(0,0,0,0.05) !important;
  background-color: white;
  margin: 0.2rem 0;
}


.timeline .dot:before {
  border-bottom: 4px solid #00c4f3;
  border-left-width: 8px;
  border-right-width: 8px;
  top: -4px;
}

.timeline .dot:after {
  border-left-width: 8px;
  border-right-width: 8px;
  border-top: 4px solid #00c4f3;
  bottom: -4px;
}

.direction-l,
.direction-r {
  float: none;
  width: 100%;
  text-align: center;
}

.flag-wrapper {
  text-align: center;
  position: relative;
}

.flag {
  position: relative;
  display: inline;
  background: rgb(255,255,255);
  z-index: 15;
  padding: 6px 10px;
  text-align: left;
  border-radius: 5px;
}

.direction-l .flag {
  box-shadow: 0px 0px 1px rgba(0,0,0,0.15);
}

.direction-r .flag {
  box-shadow: 0px 0px 1px rgba(0,0,0,0.15);
}

.time-wrapper {
  display: block;
  position: relative;
  margin: 4px 0 4px 0;
  z-index: 14;
  line-height: 1em;
  font-size: 0.9em;
  vertical-align: middle;
  color: #fff;
}

.direction-l .time-wrapper {
  float: none;
}

.direction-r .time-wrapper {
  float: none;
}

.time {
  background: #F44336;
  display: inline-block;
  padding: 8px;
}

.desc {
  position: relative;
  margin: 1em 0 0 0;
  padding: 1em;
  z-index: 15;
}

.direction-l .desc,
.direction-r .desc {
  position: relative;
  margin: 1em 1em 0 1em;
  padding: 1em;
  z-index: 15;
}

@media(min-width: 768px){
  .timeline {
    width: 660px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .timeline li:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .timeline .dot {
    left: -44px;
    right: auto;
  }
  .timeline .multi-dot {
    left: -46px !important;
  }

  .timeline .direction-l .dot {
    left: auto;
    right: -44px;
  }

  .direction-l {
    position: relative;
    width: 310px;
    float: left;
    text-align: right;
  }

  .direction-r {
    position: relative;
    width: 310px;
    float: right;
    text-align: left;
  }

  .flag-wrapper {
    display: inline-block;
  }
  .year-title-img {
    display: flex;
    align-items: center;
  }

  .flag-wrapper-r {
    display: flex;
    align-items: center;
  }

  .flag {
    font-size: 1em;
  }
  .flag-r {
    margin-left: 1.5rem;
  }
  .flag-l {
    margin-right: 1.5rem;
  }

  .time-wrapper {
    display: inline;
    vertical-align: middle;
    margin: 0;
  }

  .direction-l .time-wrapper {
    float: left;
  }

  .direction-r .time-wrapper {
    float: right;
  }

  .time {
    padding: 5px 10px;
  }

  .small-logo {
    width: 3rem;
  }
}

@media(min-width: 992px) {
  .timeline {
    width: 800px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .direction-l {
    position: relative;
    width: 380px;
    float: left;
    text-align: right;
  }

  .direction-r {
    position: relative;
    width: 380px;
    float: right;
    text-align: left;
  }
}

@media(max-width: 768px) {
  .desc {
    position: relative;
    margin: 1em 0 0 0;
    padding: 1em;
    z-index: 15;
    background-color: rgba(255,255,255,1.0);
    box-shadow: 0px 0px 1px rgba(0,0,0,0.1);
  }

  .timeline li {
    margin-top: 3rem;
  }

  .timeline .dot {
    left: 0;
    right: 0;
    position: relative;
    margin-left:auto;
    margin-right:auto;
    top: -10px;
    margin-top: 0;
  }

  .flag {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .flag-wrapper-r {
    display: block;
  }
  .flag-wrapper-r .dot {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
