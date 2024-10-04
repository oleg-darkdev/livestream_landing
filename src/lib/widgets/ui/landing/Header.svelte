<script>
	const navigation = [
		{
			title: 'Features',
			href: '#features'
		},
		{
			title: 'About',
			href: '#about'
		},
		{
			title: 'Prices',
			href: '#prices'
		},
		{
			title: 'F.A.Q.',
			href: '#faq'
		},

	];
</script>



<div class="cyber-razor-bottom flex flex-row items-center -mb-10 h-40 pb-4 pl-8 pt-0 px-10">
	<!-- <span class="cyberpunk-font-og f-x2-5">
		<span class="c">C</span>yber <span class="p">P</span>unk
	</span> -->
	<!-- <span class="mr-10"> -->

		<!-- <img src="images/logo_2-1.png" class='h-40' alt=""> -->
		<!-- <img src="images/logo.svg" class='h-40 w-full mr-10' alt=""> -->
		<!-- <img src="images/logo_6-1.png" class='h-40' alt=""> -->

	<!-- </span> -->


	<section class="w-full" style="">
		<nav class='justify-between  flex  '>
			<!-- {#each navigation as nav}
				<a href="{nav.href}" class="non-btn-group">
					<div class="btn">
						<div class="btn__content">{nav.title}</div>
						<span class="btn__label text-black">{nav.title}</span>
					</div>
				</a>

			{/each} -->
			<div class="btn-group hide-sm mx-auto">
				{#each navigation as nav}
				<a href="{nav.href}"  class="group transition duration-300 ease-in-out delay-150  btn hover:bg-black ">
					<div class="btn__content group-hover:fg-yellow">{nav.title}</div>
					<span class="btn__label ">{nav.title}</span>
				</a>
				{/each}

					<!-- {#each navigation as nav}
				<a href="{nav.href}" class="non-btn-group">
					<div class="btn">
						<div class="btn__content">{nav.title}</div>
						<span class="btn__label text-black">{nav.title}</span>
					</div>
				</a>

			{/each} -->

			</div>

			<div class="non-btn-group mx-auto ">
				<a href='/' target="_blank" style='height: 80px; width: 200px;' class="btn group transition duration-300 ease-in-out delay-150  btn--secondary hover:bg-black">
					<div class="btn__content ">login</div>
					<span class="btn__label fg-black">login</span>
				</a>
			</div>

		</nav>
	</section>
</div>


<style>

@media (max-width: 1200px) {
  .hide-sm {
    display: none;
  }
}
</style>
