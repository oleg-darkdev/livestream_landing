<script>
	// import {  } from '$shared';
	import { ListUl } from '$entities';

	const priceList = [
		{
			title: 'Лаборант',
			price: '30$',
			textContent: [
			`Поддержка трансляций в HD-качестве с разрешением до 1080p.`,
			`Доступ к базовой технической поддержке в рабочие часы.`,
			`Основные данные по просмотрам и вовлеченности зрителей.`,
			`Подробная статистика и аналитика по зрителям, включая демографические данные, вовлеченность, и время просмотра.`,

		]
		},
		{
			title: 'Эксперт',
			price: '40$',
			textContent: [
			`Проведение неограниченного числа прямых трансляций без ограничения по времени.`,
			`Возможность стримить в разрешении до 4K UHD с минимальной задержкой.`,
			`Круглосуточная техническая поддержка по всем вопросам, связанным со стримингом.`,
			`Подробная статистика и аналитика по зрителям, включая демографические данные, вовлеченность, и время просмотра.`,
			`Ранний доступ к новым возможностям сервиса и обновлениям программного обеспечения.`
		]
		},

	];
</script>

<div class='mx-auto max-w-7xl my-20'>
	<a name="prices"></a>

	<h2 class="cyber-h">Ценовые пакеты</h2>
	<div class="grid w-full lg:grid-cols-2 grid-cols-1 gap-2 gap-y-6">
		{#each priceList as {price, title, textContent}}
			<section class="cyberpunk black transition duration-300 ease-in-out delay-150 hover:scale-110 ">
					<ListUl {textContent} {price} {title} />
			</section>
		{/each}
	</div>
</div>

<style>

</style>
