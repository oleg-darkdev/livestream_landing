<script>
	import { SmallTextCard } from '$entities';

	const faq = [
	{
		q: 'Что такое лайв стриминг на YouTube?',
		a: [`Ipsum has been the industry's standard dummy text ever since the 1500s,when
					an unknown printer took a <code>galley of type and scrambled it to make a type
					specimen book`, ``]
	},
	{
		q: `Какие возможности предоставляет сервис для стриминга на YouTube?`,
		a: [`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`, `Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`]
	},
		{
		q: 'Нужен ли мне специальный софт для стриминга?',
		a: [`Ipsum has been the industry's standard dummy text ever since the 1500s,when
					an unknown printer took a <code>galley of type and scrambled it to make a type
					specimen book`, ``]
	},
	{
		q: `Какую скорость интернета нужно иметь для качественного стриминга?`,
		a: [`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`, `Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`]
	},
		{
		q: 'Как избежать задержек и лагов во время трансляции?',
		a: [`Ipsum has been the industry's standard dummy text ever since the 1500s,when
					an unknown printer took a <code>galley of type and scrambled it to make a type
					specimen book`, ``]
	},
	{
		q: `Как создать и настроить канал на YouTube для стримов?`,
		a: [`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`, `Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`]
	},

	];


	$: answer = [`Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book`, ``]
  $: question = `Ipsum has been the industry's standard dummy text ever`;
</script>

<div
	class="z-30 fg-white h-auto cyber-razor-top bg-black  flex  flex-row items-center px-10  pl-8 pt-0"
>

<a name="faq"></a>

<section class=" cyberpunk black w-full mx-auto ">
        <h2 class="cyber-h" style='color: #fff;'>FAQ</h2>

		<!-- <p class=" mb-4"  style='color: #fff;'>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
		</p> -->

        	<div class="flex flex-row flex-wrap w-full ">
                <div class="grid lg:grid-cols-2 grid-cols-1">
                    		{#each faq as {q, a}}
							<div class="" on:click={()=> {
                answer = a;
                question = q;
              }}>
			<SmallTextCard  size={'max-w-sm'} color={'bg-red'} hover={'transition duration-300 ease-in-out delay-150 transform hover:bg-yellow hover:fg-black md:hover:-translate-x-16 md:hover:-translate-y-8'}>
				<!-- <p class='px-4'>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</p> -->

				<label>
					{q}
					<!-- <span class="code-block mt-2" data-title="Feature title:" /> -->
				</label>
			</SmallTextCard>
			</div>

		{/each}

        </div>

		<!-- max-height:400px; -->
        <section class="max-w-2xl cyberpunk mt-20" style=" background-color: #ff003c;">
        <SmallTextCard  size={'max-w-sm'}  hover={'bg-black '}>
            <label>
              {question}
              <!-- <span class="code-block mt-2" data-title="Feature title:" /> -->
            </label>
          </SmallTextCard>

          <div class="mt-4">
          {#each answer as a}
            <p class="inverse mb-4 fg-white" >{a}</p>
          {/each}

          </div>
        </section>
	</div>

</section>
</div>
