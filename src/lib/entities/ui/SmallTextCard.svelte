<script>
		import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();


	export let color, glitch, hover;


	function sayHello() {
		dispatch('message', {
			text: 'Hello!'
		});
	}

</script>

<div on:click={sayHello} class="cyber-tile fg-white {glitch} {hover} vt-bot mr-4 mt-4 inline-block {color}">
	<slot />
</div>
