<script>
</script>

<section>
	<aside class="cyberpunk">
		<ul>
			<li><a href="#">&#9760; 555 555 555</a></li>
			<li><a href="#">&#x2622; livelab@gmail.com</a></li>
			<!-- <li><a href="#">&#x267B; Location in the map</a></li> -->
		</ul>
	</aside>
</section>

<style>
	/* Aside */

	aside.cyberpunk {
		--width: 230px;
		position: fixed;
		top: 50%;
		left: calc(100% - 43px);
		width: var(--width);
		transition: left 0.3s;
	}

	aside.cyberpunk:hover {
		left: calc(100% - var(--width) + 5px);
	}

	aside.cyberpunk ul {
		padding: 0;
		margin: 0;
	}

	aside.cyberpunk ul li {
		display: block;
		background-color: #f9f002;
		border: 1px solid #000;
		border-left: 10px solid #000;
		border-bottom: 10px solid #000;
		border-right: none;
		font-size: 1.3rem;
		margin: 3px 0px;
		transform: skew(-15deg);
		transition: background 0.3s, color 0.3s;
		width: 100%;
		clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 40% calc(100% - 9px), 0% 100%, 1% 62%);
	}

	aside.cyberpunk ul li:hover {
		background-color: #000;
	}

	aside.cyberpunk ul li a {
		display: block;
		padding: 5px 10px;
		color: #000;
		transform: skew(15deg);
		transition: color 0.3s;
	}

	aside.cyberpunk ul li:hover a {
		color: #f9f002;
	}

	aside.cyberpunk a:after {
		display: none;
	}
</style>
