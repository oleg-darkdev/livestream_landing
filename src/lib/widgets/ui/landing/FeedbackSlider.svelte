<script>
  import Carousel from 'svelte-carousel'
  import {
    browser
  } from '$app/environment'
  const feedback = [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`, `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`, `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, ]
</script>


<div class='w-full -mb-10 pt-10' style='height: 400px;'>
<div class="cybr-sldr w-8/12 mx-auto"> 

<h2 class="cyber-h ">Отзывы о нас.</h2>
  {#if browser}
    
	<Carousel
      autoplay
      autoplayDuration={2000}
      timingFunction="linear"
      dots={false}
      swiping={true}
      
      let:showPrevPage
      let:showNextPage
      >
		<button slot="prev" on:click={showPrevPage} class="direction-button direction-button--next cybr-btn">СЛ3Д
			<span aria-hidden="aria-hidden">_</span>
			<span class="cybr-btn__glitch" aria-hidden="aria-hidden">СЛ3Д</span>
			<span class="cybr-btn__tag" aria-hidden="aria-hidden">СЛ3Д</span>
		</button>

		<!-- <div class=""> -->
			<p class='px-4 fg-yellow bg-black z-30 h-[160px]  py-10 px-8'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
		<!-- </div> -->
<!-- PR3V -->
		<button slot="next" on:click={showNextPage} class="direction-button direction-button--prev cybr-btn">ПР3Д
			<span aria-hidden="aria-hidden">_</span>
			<span class="cybr-btn__glitch" aria-hidden="aria-hidden">ПР3Д</span>
			<span class="cybr-btn__tag" aria-hidden="aria-hidden">ПР3Д</span>
		</button>
	</Carousel>
      {/if}

</div>
</div>


<style>
    @font-face {
  font-family: Cyber;
  src: url("https://assets.codepen.io/605876/Blender-Pro-Bold.otf");
  font-display: swap;
}
* {
  box-sizing: border-box;
}
:root {
  --size: 300px;
}
section {
  min-height: 100vh;
  display: grid;
  place-items: center;
  --primary: hsl(58, 100%, calc((48 - var(--lightness, 0)) * 1%));
  --secondary: hsl(58, 100%, calc((45 - var(--lightness, 0)) * 1%));
  background: linear-gradient(90deg, var(--primary) 70%, var(--secondary) 70%), var(--primary);
  overflow: hidden;
}
ul {
  height: var(--size);
  aspect-ratio: 1/1;
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: relative;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 90% 100%, 90% 95%, 70% 95%, 70% 100%, 10% 100%, 0 90%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 90% 100%, 90% 95%, 70% 95%, 70% 100%, 10% 100%, 0 90%);
  border-right: 6px solid #3df5f5;
}
li {
  position: relative;
}
li,
img {
  height: 100%;
  width: 100%;
  position: absolute;
}
/* img {
  position: absolute;
  left: 0;
  top: 0;
  background-size: cover;
  clip-path: var(--clip);
  -webkit-clip-path: var(--clip);
} */

.direction-button {
  position: absolute;
  top: 50%;
  transform: translate(calc(var(--offset) * 50%), -50%);
}
.direction-button--next {
  --offset: 1;
  left: 100%;
}
.direction-button--prev {
  --offset: -1;
  right: 100%;
}
.cybr-sldr {
  /* display: none; */
  position: relative;
  height: var(--size);
  aspect-ratio: 1/1;
  /* background: linear-gradient(90deg, transparent 0 15%, #3df5f5 15% 72%, transparent 72%); */
  /* font-family: 'Cyber', sans-serif; */
}
.cybr-sldr > .cybr-btn__tag {
  bottom: 0;
  left: 72%;
  transform: translate(0, 15%);
}
.cybr-btn {
  --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 1%));
  --shadow-primary: hsl(var(--shadow-primary-hue), 90%, 50%);
  --primary-hue: 0;
  --primary-lightness: 50;
  --color: #fff;
  --font-size: 26px;
  --shadow-primary-hue: 180;
  --label-size: 9px;
  --shadow-secondary-hue: 60;
  --shadow-secondary: hsl(var(--shadow-secondary-hue), 90%, 60%);
  --clip: polygon(0 0, 100% 0, 100% 100%, 95% 100%, 95% 90%, 55% 90%, 55% 100%, 18% 100%, 0 82%);
  --border: 4px;
  --shimmy-distance: 5;
  --clip-one: polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 55% 90%, 55% 95%, 18% 95%, 0 82%);
  --clip-two: polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 55% 90%, 55% 100%, 16% 100%, 0 78%);
  --clip-three: polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 55% 54%, 55% 54%, 18% 54%, 0 54%);
  --clip-four: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 55% 0, 55% 0, 18% 0, 0 0);
  --clip-five: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 55% 0, 55% 0, 18% 0, 0 0);
  --clip-six: polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 55% 85%, 55% 85%, 18% 85%, 0 82%);
  --clip-seven: polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 55% 80%, 55% 80%, 18% 80%, 0 82%);
  font-family: 'Cyber', sans-serif;
  color: var(--color);
  cursor: pointer;
  background: transparent;
  text-transform: uppercase;
  font-size: var(--font-size);
  outline: transparent;
  letter-spacing: 2px;
  position: absolute;
  font-weight: 700;
  border: 0;
  width: 75px;
  height: 75px;
  line-height: 75px;
  transition: background 0.2s;
}
.cybr-btn:hover {
  --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 0.8%));
}
.cybr-btn:active {
  --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 0.6%));
}
.cybr-btn:after,
.cybr-btn:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-clip-path: var(--clip);
          clip-path: var(--clip);
  z-index: -1;
}
.cybr-btn:before {
  background: var(--shadow-primary);
  transform: translate(var(--border), 0);
}
.cybr-btn:after {
  background: var(--primary);
}
.cybr-btn__tag {
  position: absolute;
  padding: 1px 4px;
  letter-spacing: 1px;
  line-height: 1;
  bottom: -5%;
  right: 5%;
  font-weight: normal;
  color: #000;
  font-size: var(--label-size);
}
.cybr-btn__glitch {
  position: absolute;
  top: calc(var(--border) * -1);
  left: calc(var(--border) * -1);
  right: calc(var(--border) * -1);
  bottom: calc(var(--border) * -1);
  background: var(--shadow-primary);
  text-shadow: 2px 2px var(--shadow-primary), -2px -2px var(--shadow-secondary);
  -webkit-clip-path: var(--clip);
          clip-path: var(--clip);
  -webkit-animation: glitch 2s infinite;
          animation: glitch 2s infinite;
  display: none;
}
.cybr-btn:hover .cybr-btn__glitch {
  display: block;
}
.cybr-btn__glitch:before {
  content: '';
  position: absolute;
  top: calc(var(--border) * 1);
  right: calc(var(--border) * 1);
  bottom: calc(var(--border) * 1);
  left: calc(var(--border) * 1);
  -webkit-clip-path: var(--clip);
          clip-path: var(--clip);
  background: var(--primary);
  z-index: -1;
}
.cybr-btn:nth-of-type(2) {
  --primary-hue: 260;
}
@-webkit-keyframes glitch {
  0% {
    -webkit-clip-path: var(--clip-one);
            clip-path: var(--clip-one);
  }
  2%, 8% {
    -webkit-clip-path: var(--clip-two);
            clip-path: var(--clip-two);
    transform: translate(calc(var(--shimmy-distance) * -1%), 0);
  }
  6% {
    -webkit-clip-path: var(--clip-two);
            clip-path: var(--clip-two);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  9% {
    -webkit-clip-path: var(--clip-two);
            clip-path: var(--clip-two);
    transform: translate(0, 0);
  }
  10% {
    -webkit-clip-path: var(--clip-three);
            clip-path: var(--clip-three);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  13% {
    -webkit-clip-path: var(--clip-three);
            clip-path: var(--clip-three);
    transform: translate(0, 0);
  }
  14%, 21% {
    -webkit-clip-path: var(--clip-four);
            clip-path: var(--clip-four);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  25% {
    -webkit-clip-path: var(--clip-five);
            clip-path: var(--clip-five);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  30% {
    -webkit-clip-path: var(--clip-five);
            clip-path: var(--clip-five);
    transform: translate(calc(var(--shimmy-distance) * -1%), 0);
  }
  35%, 45% {
    -webkit-clip-path: var(--clip-six);
            clip-path: var(--clip-six);
    transform: translate(calc(var(--shimmy-distance) * -1%));
  }
  40% {
    -webkit-clip-path: var(--clip-six);
            clip-path: var(--clip-six);
    transform: translate(calc(var(--shimmy-distance) * 1%));
  }
  50% {
    -webkit-clip-path: var(--clip-six);
            clip-path: var(--clip-six);
    transform: translate(0, 0);
  }
  55% {
    -webkit-clip-path: var(--clip-seven);
            clip-path: var(--clip-seven);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  60% {
    -webkit-clip-path: var(--clip-seven);
            clip-path: var(--clip-seven);
    transform: translate(0, 0);
  }
  31%, 61%, 100% {
    -webkit-clip-path: var(--clip-four);
            clip-path: var(--clip-four);
  }
}
@keyframes glitch {
  0% {
    -webkit-clip-path: var(--clip-one);
            clip-path: var(--clip-one);
  }
  2%, 8% {
    -webkit-clip-path: var(--clip-two);
            clip-path: var(--clip-two);
    transform: translate(calc(var(--shimmy-distance) * -1%), 0);
  }
  6% {
    -webkit-clip-path: var(--clip-two);
            clip-path: var(--clip-two);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  9% {
    -webkit-clip-path: var(--clip-two);
            clip-path: var(--clip-two);
    transform: translate(0, 0);
  }
  10% {
    -webkit-clip-path: var(--clip-three);
            clip-path: var(--clip-three);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  13% {
    -webkit-clip-path: var(--clip-three);
            clip-path: var(--clip-three);
    transform: translate(0, 0);
  }
  14%, 21% {
    -webkit-clip-path: var(--clip-four);
            clip-path: var(--clip-four);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  25% {
    -webkit-clip-path: var(--clip-five);
            clip-path: var(--clip-five);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  30% {
    -webkit-clip-path: var(--clip-five);
            clip-path: var(--clip-five);
    transform: translate(calc(var(--shimmy-distance) * -1%), 0);
  }
  35%, 45% {
    -webkit-clip-path: var(--clip-six);
            clip-path: var(--clip-six);
    transform: translate(calc(var(--shimmy-distance) * -1%));
  }
  40% {
    -webkit-clip-path: var(--clip-six);
            clip-path: var(--clip-six);
    transform: translate(calc(var(--shimmy-distance) * 1%));
  }
  50% {
    -webkit-clip-path: var(--clip-six);
            clip-path: var(--clip-six);
    transform: translate(0, 0);
  }
  55% {
    -webkit-clip-path: var(--clip-seven);
            clip-path: var(--clip-seven);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  60% {
    -webkit-clip-path: var(--clip-seven);
            clip-path: var(--clip-seven);
    transform: translate(0, 0);
  }
  31%, 61%, 100% {
    -webkit-clip-path: var(--clip-four);
            clip-path: var(--clip-four);
  }
}

</style>