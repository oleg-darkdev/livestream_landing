<script>
	export let color,
		date = '01.01.2077',
		size,
		glitch;
</script>


<div class="{glitch} {size} cyber-tile-big  vt-bot mr-4 inline-block {color} ">
	<div class=" flex grow flex-col justify-center px-8 py-12">
		<div class=" m-[0_0_42px_0] flex w-[100%] flex-row justify-between">
			<div class="m-[8px_0_6px_0] h-[2px] w-[48px] bg-dark" />
			<span class=" text-black text-[12px]">
				{date}
			</span>
		</div>
		<h2 class=" self-start break-words text-[24px] text-black">Goodmorning, Night City!</h2>
		<p class="m-[0_3.2px_0_0] break-words text-[16px] text-black">
			Yesterday’s body count lottery rounded out to a solid ‘n’ sturdy thirty!
		</p>
	</div>

	<slot />
</div>
