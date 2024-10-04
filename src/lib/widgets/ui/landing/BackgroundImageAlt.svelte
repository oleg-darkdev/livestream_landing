<section class="h-screen w-full ">
	<div id="header">
		<div class="headtext">
			<h1 class="text-yellow">LiveLab</h1>
			<h3 class="text-yellow">youtube live streaming</h3>
		</div>
	</div>
</section>

<style>

	@font-face {
		src: url('https://dl.dropbox.com/s/xo7a1zwqc4mhjvb/Hiatus.ttf?dl=0');
		font-family: 'hiatus';
	}
  @font-face {
    font-family: "Pabricks";
    src: url("/fonts/Pabricks.ttf") format("truetype");
    font-weight: 200;
  }
	section {
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;

		justify-items: center;
		align-items: center;
		background-color: var(--black);
		background-blend-mode: color-dodge;
		background-image: var(--backimg);
		background-size: cover;
		background-attachment: fixed;
		color: var(--white);
		/*FONTS*/

		--mono: 'ibm plex mono', monospace;
		--hiatus: 'hiatus', cursive;
		/*COLORS*/
		--clear: rgba(0, 0, 0, 0);
		--black: #212121;
		--black50: rgba(33, 33, 33, 0.5);
		--blackrgb: 33, 33, 33;
		--white: #eaeaea;
		--white50: rgba(244, 244, 244, 0.5);
		--whitergb: 244, 244, 244;
		--teal: #fff;
		/*GRADIENTS*/
		/*IMAGES*/
    /* https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80 */
		--backimg: url('/images/banner.svg');
		/*OTHER*/
	}

	#header {
		transition: padding 300ms ease;
		height: 50vh;
		width: 80%;
		display: grid;
		grid-template-columns: 1fr 0.1fr;
		grid-column-gap: 3rem;
	}

	.headtext {
		font-family: var(--display);
		display: grid;
		align-items: center;
		position: relative;
		text-align: center;
		grid-row: 1;
		grid-column: 1;
	}
	.headtext::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border: 1px solid #f9f002;
		clip-path: polygon(25% 0%, 100% 0, 100% 80%, 75% 100%, 0 100%, 0 20%);
		padding: 1rem;
	}
	.headtext h1 {
		text-shadow: 2px 2px 3px var(--black);
		grid-row: 1;
		grid-column: 1;
		font-size: 10rem;
		color: #ff2d24;
    font-family: "Pabricks";
		text-shadow: 0 0 1px #fff, 0 0 3px #fff, 0 0 5px #fff, 0 0 14px #f9f002, 0 0 7px #f9f002,
			0 0 9px #f9f002, 0 0 11px #f9f002, 0 0 13px #f9f002;
	}
	.headtext h3 {
		font-family: var(--hiatus);
		grid-row: 1;
		grid-column: 1;
		font-size: 4rem;
		transform: rotate(-3deg);
		margin: 0;
		color: #ff2d24;
		font-weight: normal;
		text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 22px var(--teal),
			0 0 42px var(--teal), 0 0 62px var(--teal), 0 0 82px var(--teal), 0 0 151px var(--teal);
		margin-top: 10rem;
	}

	@media (max-width: 991px) {
		#header {
			max-width: 480px;
		}
  .headtext h1 {
		font-size: 5rem;
	}
	.headtext h3 {
		font-size: 3rem;
    margin-top: 6rem;
  	}
	}
	@media (max-width: 767px) {
		#header {
			max-width: 100%;
			margin: 30px auto 0;
		}
	}
	@media screen and (max-width: 767px) and (max-width: 736px) and (orientation: landscape) {
	}
</style>
