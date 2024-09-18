<script>
	export let textContent;
</script>

<ol class="cyberpunk">
	{#each textContent as text}
	<li>
		{text}
	</li>
	{/each}
</ol>

<style>
	ol.cyberpunk {
		list-style-type: hiragana-iroha;
		counter-reset: li;
	}

	ol.cyberpunk li {
		list-style: none;
		position: relative;
		font-size: 1.2rem;
		counter-increment: li;
	}

	ol.cyberpunk li:before {
		content: counter(li);
		top: 0px;
		left: calc(-1.2rem - 10px);
		width: 1.2rem;
		height: 1.2rem;
		color: var(--yellow-color);
		background-color: #000;
		font-weight: 700;
		position: absolute;
		display: block;
		clip-path: polygon(0% 0%, 60% 0%, 100% 40%, 100% 100%, 0% 100%);
	}

	
</style>
