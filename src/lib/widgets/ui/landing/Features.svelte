<script>
	// import {  } from '$widgets';
	import { SmallTextCard } from '$entities';

	const features = [
		{
			title: 'Высокое качество видео и звука',
			desc: 'Поддержка трансляций в разрешении до 4K UHD и качественный звук с низкой задержкой.',
		},
		{
			title: 'Аналитика в реальном времени',
			desc: 'Подробные данные о зрителях, включая количество просмотров, вовлеченность и демографию, доступные во время стрима.'
		},
		{
			title: 'Гибкие настройки трансляции',
			desc: 'Выбор разрешения, битрейта и других параметров стрима в зависимости от качества интернет-соединения и возможностей оборудования.'
		},
		{
			title: 'Расписание стримов',
			desc: 'Планирование и автоматический запуск стримов по расписанию, а также уведомления для подписчиков о предстоящих трансляциях.'
		},
	]
</script>

<div class='mx-auto max-w-7xl my-20'>
    <a name="features"></a>

  <h2 class="cyber-h ">Преймущества</h2>

  <section class=" cyberpunk black">
    <div class="grid w-full lg:grid-cols-2 grid-cols-1 gap-2 lg:gap-y-8 gap-y-2">
      {#each features as feature}
        <SmallTextCard size={'max-w-sm'} color={'bg-red'}>

          <h4 class="cyber-h fg-black">{feature.title}</h4>
          <p class='px-4 fg-black'>
            {feature.desc}


            <!--  -->
            <!-- <span /> -->
          </p>

        </SmallTextCard>
      {/each}
    </div>
  </section>

</div>
