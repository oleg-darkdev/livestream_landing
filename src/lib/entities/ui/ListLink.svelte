<script>
	export let navigation;

	// console.log(navigation);
</script>

<ul class="cyberpunk max-w-md">
	{#each navigation as nav}
		<li class="mb-1">
			<a href="#{nav.link}" class="text-2xl underline">
				{nav.title}
			</a>
		</li>
	{/each}
</ul>

<style>
	ul.cyberpunk li {
		list-style: none;
		position: relative;
		/* font-size: 1.2rem; */
	}

	ul.cyberpunk li:before {
		content: ' ';
		top: 0px;
		left: calc(-1.2rem - 10px);
		width: 1.2rem;
		height: 1.2rem;
		background-color: #000;
		position: absolute;
		display: block;
		clip-path: polygon(0% 10%, 100% 70%, 40% 100%, 50% 70%);
	}
</style>
