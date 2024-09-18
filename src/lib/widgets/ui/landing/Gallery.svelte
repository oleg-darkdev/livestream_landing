<script>
import {onMount} from 'svelte';

onMount(()=> {
	
// Preload all the images in the page
			imagesLoaded(document.querySelectorAll('.img-inner'), {background: true}, () => document.body.classList.remove('loading'));

{
    const body = document.body;

    const MathUtils = {
        lineEq: (y2, y1, x2, x1, currentVal) => {
            // y = mx + b 
            var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
            return m * currentVal + b;
        },
        lerp: (a, b, n) => (1 - n) * a + n * b,
        getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2)
    };
    
    const getMousePos = (e) => {
        let posx = 0;
        let posy = 0;
        if (!e) e = window.event;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY) 	{
            posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
        }
        return { x : posx, y : posy }
    };

    let winsize;
    const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
    calcWinsize();
    window.addEventListener('resize', calcWinsize);

    let mousepos = {x: winsize.width/2, y: winsize.height/2};
    window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));

    // Custom cursor
    class Cursor {
        constructor(el) {
            this.DOM = {el: el};
            this.DOM.circle = this.DOM.el.querySelector('.cursor__inner--circle');
            this.DOM.arrows = {
                right: this.DOM.el.querySelector('.cursor__side--right'),
                left: this.DOM.el.querySelector('.cursor__side--left')
            };
            this.bounds = this.DOM.circle.getBoundingClientRect();
            this.lastMousePos = {x:0, y:0};
            this.scale = 1;
            this.lastScale = 1;
            requestAnimationFrame(() => this.render());
        }
        render() {
            this.lastMousePos.x = MathUtils.lerp(this.lastMousePos.x, mousepos.x - this.bounds.width/2, 0.2);
            this.lastMousePos.y = MathUtils.lerp(this.lastMousePos.y, mousepos.y - this.bounds.height/2, 0.2);
            this.lastScale = MathUtils.lerp(this.lastScale, this.scale, 0.15);
            this.DOM.circle.style.transform = `translateX(${(this.lastMousePos.x)}px) translateY(${this.lastMousePos.y}px) scale(${this.lastScale})`;
            requestAnimationFrame(() => this.render());
        }
        enter() {
            this.scale = 1.9;
        }
        leave() {
            this.scale = 1;
        }
        click() {
            this.lastScale = .4;
        }
        showArrows() {
            TweenMax.to(Object.values(this.DOM.arrows), 1, {
                ease: Expo.easeOut,
                startAt: {x: i => i ? 10 : -10 },
                opacity: 1,
                x: 0
            });
        }
        hideArrows() {
            TweenMax.to(Object.values(this.DOM.arrows), 1, {
                ease: Expo.easeOut,
                x: i => i ? 10 : -10,
                opacity: 0
            });
        }
    }

    // Strip Item
    class StripItem {
        constructor(el) {
            this.DOM = {el: el};
            this.DOM.image = this.DOM.el.querySelector('.img-inner');
            this.DOM.number = this.DOM.el.querySelector('.strip__item-link');

            this.initEvents();
        }
        initEvents() {
            // Hovering the number makes it slide out/in
            this.DOM.number.addEventListener('mouseenter', () => {
                const inner = this.DOM.number.querySelector('span');
                new TimelineMax()
                .to(inner, 0.2, {
                    ease: Quad.easeOut,
                    y: '-100%',
                    opacity: 0
                }, 0)
                .to(inner, 0.5, {
                    ease: Expo.easeOut,
                    startAt: {y: '100%', opacity: 0, scale: 1.3},
                    y: '0%',
                    opacity: 1
                }, 0.2)
            });
            
            this.DOM.number.addEventListener('mouseleave', () => {
                const inner = this.DOM.number.querySelector('span');
                TweenMax.killTweensOf(inner);
                TweenMax.set(inner, {
                    scale: 1,
                    y: '0%',
                    opacity: 1
                });
            });
        }
    }

    // Content Item
    class ContentItem {
        constructor(el) {
            this.DOM = {el: el};
            this.DOM.image = this.DOM.el.querySelector('.img-outer');
            this.DOM.title = this.DOM.el.querySelector('.content__item-title');
            this.DOM.text = this.DOM.el.querySelector('.content__item-text');
        }
    }

    // Images strip
    class Strip {
        constructor(el) {
            this.DOM = {el: el};
            this.DOM.strip = this.DOM.el.querySelector('.strip');
            this.items = [];
            [...this.DOM.strip.querySelectorAll('.strip__item')].forEach(item => this.items.push(new StripItem(item)));
            // The draggable container
            this.DOM.draggable = this.DOM.el.querySelector('.draggable');
            // the extra indicator element (scales down when we start dragging)
            this.DOM.indicator = document.querySelector('.frame__indicator');
            // the cover (name + year elements) that appear when we start to drag
            this.DOM.cover = this.DOM.el.querySelector('.strip-cover');
            // The width of the draggable container (also the strip container)
            this.draggableWidth = this.DOM.draggable.offsetWidth;
            // The total amount that we can drag the draggable container, so that both the first and last image stay next to the viewport boundary (left and right respectively)
            this.maxDrag = this.draggableWidth < winsize.width ? 0 : this.draggableWidth - winsize.width;
            // The current amount (in pixels) that was dragged
            this.dragPosition = 0;
            // Initialize the Draggabilly
            this.draggie = new Draggabilly(this.DOM.draggable, { axis: 'x' });

            this.init();
            this.initEvents();
        }
        init() {
            this.renderedStyles = {
                position: {previous: 0, current: this.dragPosition},
                scale: {previous: 1, current: 1},
                imgScale: {previous: 1, current: 1},
                opacity: {previous: 1, current: 1},
                coverScale: {previous: 0.75, current: 0.75},
                coverOpacity: {previous: 0, current: 0},
                indicatorScale: {previous: 1, current: 1},
            };

            this.render = () => {
                this.renderId = undefined;
                
                for (const key in this.renderedStyles ) {
                    this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, 0.1);
                }
                
                TweenMax.set(this.DOM.strip, {x: this.renderedStyles.position.previous});
                for (const item of this.items) {
                    TweenMax.set(item.DOM.el, {scale: this.renderedStyles.scale.previous, opacity: this.renderedStyles.opacity.previous});
                    TweenMax.set(item.DOM.image, {scale: this.renderedStyles.imgScale.previous});
                }
                TweenMax.set(this.DOM.cover, {scale: this.renderedStyles.coverScale.previous, opacity: this.renderedStyles.coverOpacity.previous});
                TweenMax.set(this.DOM.indicator, {scaleX: this.renderedStyles.indicatorScale.previous});

                if ( !this.renderId ) {
                    this.renderId = requestAnimationFrame(() => this.render());  
                }
            };
            this.renderId = requestAnimationFrame(() => this.render());
        }
        initEvents() {
            this.onDragStart = () => {
                this.renderedStyles.scale.current = 0.8;
                this.renderedStyles.imgScale.current = 1.6;
                this.renderedStyles.opacity.current = 0.3;
                this.renderedStyles.coverScale.current = 1;
                this.renderedStyles.coverOpacity.current = 1;
                this.renderedStyles.indicatorScale.current = 0;

                cursor.scale = 1.5;
                cursor.showArrows();
            };

            this.onDragMove = (event, pointer, moveVector) => {
                // The possible range for the drag is draggie.position.x = [-maxDrag,0 ]
                if ( this.draggie.position.x >= 0 ) {
                    // the max we will be able to drag is winsize.width/2
                    this.dragPosition = MathUtils.lineEq(0.5*winsize.width,0, winsize.width, 0, this.draggie.position.x);
                }
                else if ( this.draggie.position.x < -1*this.maxDrag ) {
                    // the max we will be able to drag is winsize.width/2
                    this.dragPosition = MathUtils.lineEq(0.5*winsize.width,0, this.maxDrag+winsize.width, this.maxDrag, this.draggie.position.x);
                }
                else {
                    this.dragPosition = this.draggie.position.x;
                }
                this.renderedStyles.position.current = this.dragPosition;

                mousepos = getMousePos(event);
            };

            this.onDragEnd = () => {
                // reset draggable if out of bounds.
                if ( this.draggie.position.x > 0 ) {
                    this.dragPosition = 0;
                    this.draggie.setPosition(this.dragPosition, this.draggie.position.y);
                }
                else if ( this.draggie.position.x < -1*this.maxDrag ) {
                    this.dragPosition = -1*this.maxDrag;
                    this.draggie.setPosition(this.dragPosition, this.draggie.position.y);
                }
                this.renderedStyles.position.current = this.dragPosition;
                this.renderedStyles.scale.current = 1;
                this.renderedStyles.imgScale.current = 1;
                this.renderedStyles.opacity.current = 1;
                this.renderedStyles.coverScale.current = 0.75;
                this.renderedStyles.coverOpacity.current = 0;
                this.renderedStyles.indicatorScale.current = 1;

                cursor.scale = 1;
                cursor.hideArrows();
            };

            this.draggie.on('pointerDown', this.onDragStart);
            this.draggie.on('dragMove', this.onDragMove);
            this.draggie.on('pointerUp', this.onDragEnd);

            for (const item of this.items) {
                item.DOM.number.addEventListener('click', (ev) => {
                    ev.preventDefault();
                    this.showItem(item);
                });
            }

            window.addEventListener('resize', () => {
                this.maxDrag = this.draggableWidth < winsize.width ? 0 : this.draggableWidth - winsize.width;
                if ( Math.abs(this.dragPosition) + winsize.width > this.draggableWidth ) {
                    const diff = Math.abs(this.dragPosition) + winsize.width - this.draggableWidth;
                    // reset dragPosition
                    this.dragPosition = this.dragPosition+diff;
                    this.draggie.setPosition(this.dragPosition, this.draggie.position.y);
                }
            });
        }
        showItem(item) {
            if ( this.isAnimating ) {
                return false;
            }
            
            if ( this.renderId ) {
                window.cancelAnimationFrame(this.renderId);
                this.renderId = undefined;
            }

            this.isAnimating = true;

            this.current = this.items.indexOf(item);
            const contentItem = contentItems[this.current];
            contentItem.DOM.el.classList.add('content__item--current');
            
            // Fix for mobile (make sure the cover is not visible when clicking the numbers)
            TweenMax.set(this.DOM.cover, {scale: 0, opacity: 0});

            this.contentToggleTimeline = new TimelineMax({
                onComplete: () => this.isAnimating = false
            })
            .set([contentItem.DOM.image, contentItem.DOM.title, contentItem.DOM.text, closeContentCtrl], {
                opacity: 0
            }, 0)
            .to(this.items.map(item => item.DOM.el), 0.8, {
                ease: Cubic.easeOut,
                scale: 0.8,
                opacity: 0.4
            }, 0)
            .to(this.items.map(item => item.DOM.image), 0.8, {
                ease: Cubic.easeOut,
                scale: 1.6
            }, 0)
            .to(this.DOM.indicator, 0.8, {
                ease: Cubic.easeOut,
                scaleX: 0
            }, 0);

            for (const item of this.items) {
                this.contentToggleTimeline.to(item.DOM.el, 1, {
                    ease: Expo.easeInOut,
                    y: winsize.height*-1
                }, MathUtils.getRandomFloat(0.2,0.4));
            }

            this.contentToggleTimeline
            .to(contentItem.DOM.image, 1, {
                ease: Expo.easeInOut,
                startAt: {y: winsize.height*1.3, opacity: 1},
                y: 0
            }, 0.6)
            .to(contentItem.DOM.title, 0.8, {
                ease: Quint.easeOut,
                startAt: {y: 100},
                y: 0,
                opacity: 1
            }, 1)
            .to(contentItem.DOM.text, 0.8, {
                ease: Quint.easeOut,
                startAt: {y: 200},
                y: 0,
                opacity: 1
            }, 1)
            .to(closeContentCtrl, 0.8, {
                ease: Quint.easeOut,
                startAt: {y: 50},
                y: 0,
                opacity: 1
            }, 1);
        }
        closeContent() {
            if ( this.isAnimating ) {
                return false;
            }
            this.isAnimating = true;
            
            const contentItem = contentItems[this.current];
            this.contentToggleTimeline = new TimelineMax({
                onComplete: () => {
                    contentItem.DOM.el.classList.remove('content__item--current');
                    this.isAnimating = false
                    this.renderId = requestAnimationFrame(() => this.render());
                }
            })
            .set(this.items.map(item => item.DOM.el), {
                scale: 1,
                opacity: 1
            }, 0)
            .set(this.items.map(item => item.DOM.image), {
                scale: 1
            }, 0)
            .to(contentItem.DOM.text, 0.8, {
                ease: Quint.easeIn,
                y: 200,
                opacity: 0
            }, 0)
            .to(contentItem.DOM.title, 0.8, {
                ease: Quint.easeIn,
                y: 100,
                opacity: 0
            }, 0)
            .to(closeContentCtrl, 0.8, {
                ease: Quint.easeOut,
                y: 50,
                opacity: 0
            }, 0.2)
            .to(contentItem.DOM.image, 1, {
                ease: Expo.easeInOut,
                y: winsize.height*1.3, 
                opacity: 1
            }, 0.2);

            for (const item of this.items) {
                this.contentToggleTimeline.to(item.DOM.el, MathUtils.getRandomFloat(0.6,0.9), {
                    ease: Expo.easeInOut,
                    y: 0
                }, MathUtils.getRandomFloat(0.4,0.6));
            }

            this.contentToggleTimeline
            .to(this.DOM.indicator, 1.2, {
                ease: Expo.easeOut,
                scaleX: 1
            }, 0.5);
        }
    }

    // The images strip
    const strip = new Strip(document.querySelector('.strip-outer'));
    
    // Custom mouse cursor
    const cursor = new Cursor(document.querySelector('.cursor'));

    // The content elements
    const contentItems = [];
    [...document.querySelectorAll('.content__item')].forEach(item => contentItems.push(new ContentItem(item)));
    
    // The close content ctrl
    const closeContentCtrl = document.querySelector('.content__close');
    // On click, close the content view
    closeContentCtrl.addEventListener('click', () => {
        strip.closeContent();
    });

    // Activate the enter/leave/click methods of the custom cursor when hovering in/out on every <a> (and the close content ctrl)
    [...document.querySelectorAll('a'), closeContentCtrl].forEach((link) => {
        link.addEventListener('mouseenter', () => cursor.enter());
        link.addEventListener('mouseleave', () => cursor.leave());
    });
}

})
</script>



<a name="gallery"></a>


<section>
			<main>
      <!-- <p class="mainText">This slider its just a fork from <a href="https://github.com/codrops/DraggableImageStrip">THIS REPOSITORIE</a></p>
			<div class="frame">
				<div class="frame__indicator"></div>
			</div> -->
			<div class="strip-outer">
				<div class="strip-inner">
					<div class="draggable"></div>
					<div class="strip">
						<div class="strip__item">
							<div class="img-outer img-outer--size-s"><div class="img-inner" style="background-image:url('https://images.unsplash.com/photo-1539646899451-eff372db037f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');"></div></div>
							<span class="strip__item-number"><a class="strip__item-link"><span>Lorem Ipsum is</span></a><span class="strip__item-plus"></span></span>
						</div>
						<div class="strip__item">
							<div class="img-outer img-outer--size-m"><div class="img-inner" style="background-image:url('https://images.unsplash.com/photo-1537005081207-04f90e3ba640?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');"></div></div>
							<span class="strip__item-number"><a class="strip__item-link"><span>Lorem Ipsum is</span></a><span class="strip__item-plus"></span></span>
						</div>
						<div class="strip__item">
							<div class="img-outer img-outer--size-xl"><div class="img-inner" style="background-image:url('https://images.unsplash.com/photo-1531279550271-23c2a77a765c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');"></div></div>
							<span class="strip__item-number"><a class="strip__item-link"><span>Lorem Ipsum is</span></a><span class="strip__item-plus"></span></span>
						</div>
						<div class="strip__item">
							<div class="img-outer img-outer--size-l"><div class="img-inner" style="background-image:url('https://images.unsplash.com/photo-1530692228265-084b21566b12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');"></div></div>
							<span class="strip__item-number"><a class="strip__item-link"><span>Lorem Ipsum is</span></a><span class="strip__item-plus"></span></span>
						</div>
						<div class="strip__item">
							<div class="img-outer img-outer--size-s"><div class="img-inner" style="background-image:url('https://images.unsplash.com/photo-1536280344735-25b3b6876631?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');"></div></div>
							<span class="strip__item-number"><a class="strip__item-link"><span>Lorem Ipsum is</span></a><span class="strip__item-plus"></span></span>
						</div>
						<div class="strip__item">
							<div class="img-outer img-outer--size-m"><div class="img-inner" style="background-image:url('https://images.unsplash.com/photo-1533997281735-b5eacc58df14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');"></div></div>
							<span class="strip__item-number"><a class="strip__item-link"><span>Lorem Ipsum is</span></a><span class="strip__item-plus"></span></span>
						</div>
						<div class="strip__item">
							<div class="img-outer img-outer--size-s"><div class="img-inner" style="background-image:url('https://images.unsplash.com/photo-1534847004764-b93737310da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');"></div></div>
							<span class="strip__item-number"><a class="strip__item-link"><span>Lorem Ipsum is</span></a><span class="strip__item-plus"></span></span>
						</div>
						<div class="strip__item">
							<div class="img-outer img-outer--size-l"><div class="img-inner" style="background-image:url('https://images.unsplash.com/photo-1553628223-5a98a5cf8e81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');"></div></div>
							<span class="strip__item-number"><a class="strip__item-link"><span>Lorem Ipsum is</span></a><span class="strip__item-plus"></span></span>
						</div>
						<div class="strip__item">
							<div class="img-outer img-outer--size-s"><div class="img-inner" style="background-image:url('https://images.unsplash.com/photo-1536346247081-69f2c2c09c9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');"></div></div>
							<span class="strip__item-number"><a class="strip__item-link"><span>Lorem Ipsum is</span></a><span class="strip__item-plus"></span></span>
						</div>
						<div class="strip__item">
							<div class="img-outer"><div class="img-inner" style="background-image:url('https://images.unsplash.com/photo-1576465335479-49bad3fd5f79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');"></div></div>
							<span class="strip__item-number"><a class="strip__item-link"><span>Lorem Ipsum is</span></a><span class="strip__item-plus"></span></span>
						</div>
						<div class="strip__item">
							<div class="img-outer img-outer--size-s"><div class="img-inner" style="background-image:url('https://images.unsplash.com/photo-1558961166-9c584702dcb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');"></div></div>
							<span class="strip__item-number"><a class="strip__item-link"><span>Lorem Ipsum is</span></a><span class="strip__item-plus"></span></span>
						</div>
						<div class="strip__item">
							<div class="img-outer img-outer--size-xl"><div class="img-inner" style="background-image:url('https://images.unsplash.com/photo-1573456170607-b885fdc78985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');"></div></div>
							<span class="strip__item-number"><a class="strip__item-link"><span>Lorem Ipsum is</span></a><span class="strip__item-plus"></span></span>
						</div>
						<div class="strip__item">
							<div class="img-outer img-outer--size-s"><div class="img-inner" style="background-image:url('https://images.unsplash.com/photo-1565700309503-e78580f9f5d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');"></div></div>
							<span class="strip__item-number"><a class="strip__item-link"><span>Lorem Ipsum is</span></a><span class="strip__item-plus"></span></span>
						</div>
					</div><!--/strip-->
				</div><!--/strip-inner-->
				<div class="strip-cover">
					<h2 class="strip-cover__title">CyberPunk</h2>
					<span class="strip-cover__subtitle">Collection</span>
				</div>
			</div><!--/strip-outer-->
		</main>
		<div class="cursor">
			<div class="cursor__inner cursor__inner--circle">
				<div class="cursor__side cursor__side--left"></div>
				<div class="cursor__side cursor__side--right"></div>
			</div>
		</div>
</section>

<style>
	*,
*::after,
*::before {
	box-sizing: border-box;
}

:root {
	font-size: 15px;
}

body {
	--color-text: #767676;
	--color-bg: #000;
	--color-link: #b96ac7;
	--color-link-hover: #fff;
	--color-cover: #b96ac7;
	--color-copy: #767676;
	--color-content-title: #b96ac7;
	--color-indicator: #1b1b1b;
	color: var(--color-text);
	background-color: var(--color-bg);
	font-family: ff-more-web-pro, serif;
	margin: 0;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.cursor {
	display: none;
}

/* Page Loader */
.js .loading::before {
	content: '';
	position: fixed;
	z-index: 100000;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--color-bg);
}

.js .loading::after {
	content: '';
	position: fixed;
	z-index: 100000;
	top: calc(50% - 30px);
	left: calc(50% - 25px);
	width: 50px;
	height: 60px;
	pointer-events: none;
	opacity: 0.4;
	background: var(--color-link);
	animation: loaderAnim 0.7s linear infinite alternate forwards;
}

@keyframes loaderAnim {
	to {
		opacity: 1;
		transform: scale3d(0.5,0.5,1);
	}
}

a {
	text-decoration: none;
	color: var(--color-link);
	outline: none;
}

a:hover,
a:focus {
	color: var(--color-link-hover);
	outline: none;
}

main {
	position: relative;
	height: 100vh;
	display: flex;
	flex-direction: column;
}

.message {
	background: var(--color-text);
	color: var(--color-bg);
	padding: 1rem;
	text-align: center;
}

.frame {
	padding: 1.5rem;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1000;
	pointer-events: none;
}

.frame a {
	pointer-events: auto;
}

.frame__title {
	font-size: 1rem;
	margin: 0 0 0.5rem;
	font-weight: normal;
}

.frame__links {
	display: flex;
	margin: 0.5rem 0;
}

.frame__links a {
	margin: 0 0.35rem;
	padding: 0 0.35rem;
	position: relative;
}

.frame__links a:first-child {
	margin-left: 0;
	padding-left: 0;
}

.frame__links a:not(:last-child)::after {
	content: '';
	width: 1px;
	height: 1rem;
	background: var(--color-link);
	position: absolute;
	left: calc(100% + 0.35rem);
	top: calc(50% - 0.5rem);
	pointer-events: none;
}

.frame__subtitle {
	font-weight: normal;
	font-size: 1rem;
	margin: 0.5rem 0 1rem;
}

.frame__indicator {
	background: var(--color-indicator);
	width: 3rem;
	height: 0.5rem;
	transform-origin: 0 50%;
}

.strip-outer {
	width: 100%;
	height: 100vh;
	min-height: 750px;
	margin: auto;
	position: relative;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: none;
}

.strip-inner {
	position: relative;
	top: 0;
	height: 100%;
	width: -moz-fit-content;
	width: fit-content;
}

.draggable {
	height: 500px;
	top: calc(50% - 250px);
	width: 100%;
	position: absolute;
	cursor: grab;
}

.draggable:active {
	cursor: grabbing;
}

.strip {
	height: 100%;
	width: -moz-fit-content;
	width: fit-content;
	display: flex;
	align-items: start;
	position: relative;
	pointer-events: none;
}

.strip__item {
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: column-reverse;
	justify-content: center;
}

.img-outer {
	--imgheight: 450px;
	height: var(--imgheight);
	width: calc(var(--imgheight) * 0.7);
	overflow: hidden;
	position: relative;
	flex: none;
}

.img-outer--size-s {
	--imgheight: 300px;
}

.img-outer--size-m {
	--imgheight: 360px;
}

.img-outer--size-l {
	--imgheight: 390px;
}

.img-outer--size-xl {
	--imgheight: 420px;
}

.img-inner {
	width: calc(100% + 40px);
	height: calc(100% + 40px);
	left: -20px;
	top: -20px;
	background-size: cover;
	background-position: 50% 50%;
	position: absolute;
}

.strip__item-number {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.strip__item-link {
	pointer-events: auto;
	cursor: pointer;
	display: block;
	position: relative;
}

.strip__item-link::before {
	content: '';
	position: absolute;
	width: 160%;
	height: 120%;
	left: -30%;
	top: -10%;

}



.strip__item-link span {
	display: block;
}

.strip__item-plus {
	display: none;
	width: 13px;
	height: 13px;
	background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='13' height='13' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7 6h6v1H7v6H6V7H0V6h6V0h1v6z' fill='%23505050'/%3e%3c/svg%3e");
	background-size: 100%;
}

.strip__item-link:hover + .strip__item-plus {
	display: block;
}

.strip-cover {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: var(--color-cover);
	pointer-events: none;
	opacity: 0;
}

.strip-cover__title {
	font-family: fleisch-wolf, sans-serif;
	font-weight: 400;
	font-size: 20vw;
	margin: 0;
	line-height: 1;
	-webkit-text-stroke: 1px var(--color-cover);
	text-stroke: 1px var(--color-cover);
	-webkit-text-fill-color: transparent;
	text-fill-color: transparent;
	color: transparent;
	
}
.strip-cover__title h2{
	-webkit-box-shadow: 10px -15px 25px -14px rgba(230,189,230,1);
-moz-box-shadow: 10px -15px 25px -14px rgba(230,189,230,1);
box-shadow: 10px -15px 25px -14px rgba(230,189,230,1);
}
.strip-cover__subtitle {
	font-size: 1rem;
	margin: 0;
}

.content {
	top: 0;
	position: absolute;
	height: 100vh;
	width: 100%;
	z-index: 1000;
}

.js .content {
	pointer-events: none;
}

.content__item {
	position: absolute;
	width: 100%;
	left: 0;
	top: 0;
	height: 100vh;
	display: grid;
	align-items: center;
	grid-template-rows: 50% 40% 10%;
	grid-column-gap: 0;
	grid-template-areas: 'content-img' 'content-copy' '...';
	display: none;
}

.js .content__item {
	height: 100%;
	opacity: 0;
	pointer-events: none;
}

.js .content__item--current {
	pointer-events: auto;
	opacity: 1;
	top: 0;
	display: grid;
}

.img-outer--content {
	height: 100%;
	width: auto;
	grid-area: content-img;
}

.img-inner--content {
	background-position: 50% 35%;
}

.content__item-title {
	font-weight: normal;
	color: var(--color-content-title);
}

.content__item-copy {
	grid-area: content-copy;
	padding: 1.5rem 2rem;
	color: var(--color-copy);
}

.content__item-text {
	margin: 0;
}

.content__close {
	display: block;
	background: none;
	border: 0;
	margin: 0;
	padding: 0;
	color: inherit;
	opacity: 0;
	pointer-events: none;
	cursor: pointer;
	position: absolute;
	bottom: 1.5rem;
	left: 3rem;
}

.content__item--current ~ .content__close {
	pointer-events: auto;
}

.content__close svg {
	fill: currentColor;
}

.content__close:focus,
.content__close:hover {
	outline: none;
	color: #fff;
}

/* Will-change */
.strip,
.strip__item,
.cursor__side,
.content__close,
.content__item-title,
.content__item-copy {
	will-change: transform;
}


@media screen and (min-width: 53em) {
	body {
		overflow: hidden;
	}
	.frame {
		position: fixed;
		text-align: left;
		z-index: 10000;
		display: grid;
		align-content: space-between;
		width: 100%;
		max-width: none;
		height: 100vh;
		padding: 1.25rem 3rem;
		pointer-events: none;
		grid-template-columns: 80% 20%;
		grid-template-rows: auto auto auto;
		grid-template-areas: 'page-title links'
							'... ...'
							'indicator sub-title';
	}
	.frame__title-wrap{
		grid-area: page-title;
		display: flex;
	}
	.frame__title {
		margin: 0;
	}
	.frame__subtitle {
		grid-area: sub-title;
		justify-self: end;
		margin: 0;
	}
	.frame__links {
		padding: 0;
		margin: 0 0 0 2rem;
	}
	.frame__indicator {
		grid-area: indicator;
		margin: 0;
	}
	.content__item {
		top: 0;
		grid-template-columns: 40% 45% 15%;
		grid-template-rows: 100%;
		grid-template-areas: 'content-copy content-img ... ';
	}
	.content__item-copy {
		max-width: 240px;
		justify-self: end;
		align-self: end;
		text-align: right;
	}
	.strip-cover__title {
		font-size: 15vw;
		-webkit-text-stroke: 2px var(--color-cover);
		text-stroke: 2px var(--color-cover);
	}
	.strip-cover__subtitle {
		font-size: 1rem;
	}
}

@media (any-pointer: fine) {
	.cursor {
		display: block;
	}
	.cursor__inner {
		z-index: 9999;
		pointer-events: none;
		position: absolute;
		top: 0;
		left: 0;
		mix-blend-mode: difference;
		border-radius: 50%;
	}
	.cursor__side {
		position: absolute;
		top: 50%;
		width: 5px;
		height: 1px;
		background: #fff;
		opacity: 0;
	}
	.cursor__side--left {
		right: calc(100% + 5px);
	}
	.cursor__side--right {
		left: calc(100% + 5px);
	}
	.cursor__inner--circle {
		width: 25px;
		height: 25px;
		border: 1px solid #fff;
	}
}
.mainText{
  padding: 20px;
}
</style>