<script>
	export let color,
		img = './images/examples/tile2.jpg',
		size,
		glitch;
</script>

<!-- width: var(--tile-width); 		--tile-width: 360px;
 -->
<div class="cyber-tile-big {size} {glitch} fg-white vt-bot m-2 inline-block {color}">
		<img src={img} />
		<slot />
</div>
