<script>
    import {onMount } from 'svelte';

    onMount(()=> {
    class CyberpunkShape {
        constructor(ctx, width, height, color) {
            this.ctx = ctx;
            this.xPos = 0;
            this.yPos = 0;
            this.color = color;
            this.border = 50;
            this.maxHeight = height - this.border;
            this.maxWidth = width - this.border;
            this.width = this.random(0, this.maxWidth / 5);
            this.height = this.random(0, this.maxHeight / 5);

            this.calcPosX();
            this.calcPosY();

        }

        calcPosX() {
            this.xPos = this.random(this.border, this.maxWidth);
            while (this.xPos + this.width > this.maxWidth) {
            this.xPos = this.random(this.border, this.maxWidth);
            }
        }

        calcPosY() {
            this.yPos = this.random(this.border, this.maxHeight);
            while (this.yPos + this.height > this.maxHeight) {
            this.yPos = this.random(this.border, this.maxHeight);
            }
        }

        random(min, max) {
            return Math.floor(Math.random() * max + min);
        }

        animate() {


            if (this.random(0, 100) < 1) {
            this.calcPosX();
            this.calcPosY();
            }

            this.drawRect();
        }

        drawRect() {
            this.ctx.beginPath();
            this.ctx.fillStyle = this.color;
            this.ctx.rect(this.xPos, this.yPos, this.width, this.height);
            this.ctx.fill();
        }}



        class CyberpunkAnimation {

        constructor(element, speed, colors) {
            this.element = element;
            this.speed = speed;
            this.colors = colors;
            this.width = element.offsetWidth;
            this.height = element.offsetHeight;
            this.shapes = [];
            this.shapesCount = 500;
            this.ctx = undefined;
        }

        random(min, max) {
            return Math.floor(Math.random() * max + min);
        }

        createCanvas(element) {
            this.element.innerHTML = '';
            this.width = element ? element.offsetWidth : this.width;
            this.height = element ? element.offsetHeight : this.height;
            const canvas = document.createElement('canvas');
            canvas.setAttribute('id', 'canvas');
            canvas.setAttribute('width', this.width);
            canvas.setAttribute('height', this.height);

            this.ctx = canvas.getContext('2d');

            for (let i = 0; i < this.shapesCount; i++) {
            this.shapes.push(new CyberpunkShape(this.ctx, this.width, this.height, this.colors[3]));
            }

            this.element.append(canvas);
        }

        drawAnimation() {
            this.ctx.clearRect(0, 0, this.width, this.height);

            this.shapes.forEach(shape => {
            shape.animate();
            });
        }

        init() {
            this.createCanvas();
            setInterval(() => {
            this.drawAnimation();
            }, this.speed);
        }}

        const colors = ['rgba(251, 246, 101, 1)', 'rgba(2, 215, 242, 1)', 'rgba(255, 0, 160)', 'rgba(0, 0, 0, 1)'];
        const canvasBox = document.querySelector('#cyberpunk-animation');
        const animation = new CyberpunkAnimation(canvasBox, 16, colors);

        animation.init();

        window.addEventListener('resize', () => {
        animation.createCanvas(canvasBox);
        });
    })
</script>

<section class='overflow-hidden '>
<div class="glitch" data-trick="LiveLab">LiveLab</div>
<!-- <img src="/images/favicon.svg" class='w-64 h-64 z-30 absolute left-[53rem] -mt-40' alt=""> -->
<div id="cyberpunk-animation" class="canvas-animation"></div>

</section>


<style>
@font-face {
  font-family: "Pabricks";
  src: url("/fonts/Pabricks.ttf") format("truetype");
  font-weight: 200;
}

@media (max-width: 991px) {
  .glitch {
    font-size: 5rem;
  }
  .canvas-animation {
    height: 20vh;
  }
}
@media (min-width: 991px) {
  .glitch {
    font-size: 10rem;
  }
  .canvas-animation {
    height: 100vh;
  }
}
section {
  align-items: center;
  background-color: #000;
  display: flex;
  font-family: "Pabricks";
  font-size: 10px;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
}


.canvas-animation {
  position: absolute;
  z-index: 1;
  width: 90vw;
  overflow: hidden;
}

.glitch {
  z-index: 2;
  top: 0;
  color: white;
  position: relative;
}
.glitch::after {
  content: attr(data-trick);
  position: absolute;
  top: 0;
  left: 0.5rem;
  color: #000;
  overflow: hidden;
  text-shadow: -0.5rem 0 #ff00a0;
  clip: rect(0, 90rem, 0, 0);
  animation: noise 2s infinite linear alternate-reverse;
}
.glitch::before {
  content: attr(data-trick);
  position: absolute;
  top: 0;
  left: -1rem;
  color: #000;
  overflow: hidden;
  text-shadow: 0.3rem 0 #02d7f2;
  clip: rect(0, 90rem, 0, 0);
  animation: noise 4s infinite linear alternate-reverse;
}

@-webkit-keyframes noise {
  0% {
    clip: rect(3rem, 99.99rem, 1rem, 0);
  }
  4% {
    clip: rect(4rem, 99.99rem, 11rem, 0);
  }
  8% {
    clip: rect(5rem, 99.99rem, 1rem, 0);
  }
  12% {
    clip: rect(12rem, 99.99rem, 2rem, 0);
  }
  16% {
    clip: rect(5rem, 99.99rem, 3rem, 0);
  }
  20% {
    clip: rect(8rem, 99.99rem, 8rem, 0);
  }
  24% {
    clip: rect(8rem, 99.99rem, 11rem, 0);
  }
  28% {
    clip: rect(12rem, 99.99rem, 5rem, 0);
  }
  32% {
    clip: rect(1rem, 99.99rem, 9rem, 0);
  }
  36% {
    clip: rect(3rem, 99.99rem, 2rem, 0);
  }
  40% {
    clip: rect(4rem, 99.99rem, 12rem, 0);
  }
  44% {
    clip: rect(1rem, 99.99rem, 6rem, 0);
  }
  48% {
    clip: rect(4rem, 99.99rem, 12rem, 0);
  }
  52% {
    clip: rect(4rem, 99.99rem, 2rem, 0);
  }
  56% {
    clip: rect(9rem, 99.99rem, 8rem, 0);
  }
  60% {
    clip: rect(12rem, 99.99rem, 8rem, 0);
  }
  64% {
    clip: rect(9rem, 99.99rem, 4rem, 0);
  }
  68% {
    clip: rect(8rem, 99.99rem, 2rem, 0);
  }
  72% {
    clip: rect(12rem, 99.99rem, 12rem, 0);
  }
  76% {
    clip: rect(6rem, 99.99rem, 4rem, 0);
  }
  80% {
    clip: rect(2rem, 99.99rem, 12rem, 0);
  }
  84% {
    clip: rect(12rem, 99.99rem, 12rem, 0);
  }
  88% {
    clip: rect(1rem, 99.99rem, 9rem, 0);
  }
  92% {
    clip: rect(5rem, 99.99rem, 3rem, 0);
  }
  96% {
    clip: rect(2rem, 99.99rem, 12rem, 0);
  }
  100% {
    clip: rect(12rem, 99.99rem, 7rem, 0);
  }
}

@keyframes noise {
  0% {
    clip: rect(3rem, 99.99rem, 1rem, 0);
  }
  4% {
    clip: rect(4rem, 99.99rem, 11rem, 0);
  }
  8% {
    clip: rect(5rem, 99.99rem, 1rem, 0);
  }
  12% {
    clip: rect(12rem, 99.99rem, 2rem, 0);
  }
  16% {
    clip: rect(5rem, 99.99rem, 3rem, 0);
  }
  20% {
    clip: rect(8rem, 99.99rem, 8rem, 0);
  }
  24% {
    clip: rect(8rem, 99.99rem, 11rem, 0);
  }
  28% {
    clip: rect(12rem, 99.99rem, 5rem, 0);
  }
  32% {
    clip: rect(1rem, 99.99rem, 9rem, 0);
  }
  36% {
    clip: rect(3rem, 99.99rem, 2rem, 0);
  }
  40% {
    clip: rect(4rem, 99.99rem, 12rem, 0);
  }
  44% {
    clip: rect(1rem, 99.99rem, 6rem, 0);
  }
  48% {
    clip: rect(4rem, 99.99rem, 12rem, 0);
  }
  52% {
    clip: rect(4rem, 99.99rem, 2rem, 0);
  }
  56% {
    clip: rect(9rem, 99.99rem, 8rem, 0);
  }
  60% {
    clip: rect(12rem, 99.99rem, 8rem, 0);
  }
  64% {
    clip: rect(9rem, 99.99rem, 4rem, 0);
  }
  68% {
    clip: rect(8rem, 99.99rem, 2rem, 0);
  }
  72% {
    clip: rect(12rem, 99.99rem, 12rem, 0);
  }
  76% {
    clip: rect(6rem, 99.99rem, 4rem, 0);
  }
  80% {
    clip: rect(2rem, 99.99rem, 12rem, 0);
  }
  84% {
    clip: rect(12rem, 99.99rem, 12rem, 0);
  }
  88% {
    clip: rect(1rem, 99.99rem, 9rem, 0);
  }
  92% {
    clip: rect(5rem, 99.99rem, 3rem, 0);
  }
  96% {
    clip: rect(2rem, 99.99rem, 12rem, 0);
  }
  100% {
    clip: rect(12rem, 99.99rem, 7rem, 0);
  }
}
</style>
