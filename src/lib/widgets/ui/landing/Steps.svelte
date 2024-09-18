<section class="cyberpunk black my-10">
	<ul class="steps">
		<li>Text 1</li>
		<li>Text extra extra large 2</li>
		<li>Texto 3</li>
		<li>Text extra extra large 4</li>
		<li>Text 5<br />new line<br />new line</li>
		<li>Text large 6</li>
		<li class="current">Text 7</li>
		<li>Text 8</li>
		<li>Text 9</li>
		<li>Text 10</li>
	</ul>
</section>


<style>
	.cyberpunk ul.steps {
		--size: 25px;
		margin: 0px;
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		counter-reset: my-counter;
		flex-direction: column;
		align-items: stretch;
		justify-content: flex-start;
		align-content: center;
	}

	@media (max-width: 599px) {
		.cyberpunk ul.steps li br {
			display: none;
		}
	}

	@media (min-width: 600px) {
		.cyberpunk ul.steps {
			flex-direction: row;
		}
	}

	.cyberpunk ul.steps li {
		display: flex;
		align-items: end;
		color: #000;
		padding: 0px 20px 5px 0px;
		position: relative;
		font-size: 12px;
		line-height: 12px;
		min-width: 80px;
		margin-bottom: 40px;
		counter-increment: my-counter;
		padding-left: 50px;
	}

	@media (min-width: 600px) {
		.cyberpunk ul.steps li {
			padding-left: 0px;
			margin-bottom: 60px;
		}
	}

	.cyberpunk.black ul.steps li {
		color: #f9f002;
	}

	.cyberpunk ul.steps li:last-child {
		min-width: 0px;
		padding: 0px 0px 5px 50px;
	}

	@media (min-width: 600px) {
		.cyberpunk ul.steps li:last-child {
			padding: 0px 0px 5px 0px;
		}
	}

	.cyberpunk ul.steps li:before {
		position: absolute;
		content: counter(my-counter);
		color: #f9f002;
		background-color: purple;
		display: flex;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		bottom: -8px;
		left: 0px;
		font-size: 20px;
		font-weight: 700;
		justify-content: center;
		align-items: center;
	}

	@media (min-width: 600px) {
		.cyberpunk ul.steps li:before {
			bottom: -40px;
		}
	}

	.cyberpunk ul.steps li.current:before {
		background-color: #000;
	}

	.cyberpunk.black ul.steps li.current:before {
		background-color: #f9f002;
		color: #000;
	}

	.cyberpunk ul.steps li:after {
		position: absolute;
		content: '';
		background-color: purple;
		display: none;
	}

	@media (min-width: 600px) {
		.cyberpunk ul.steps li:after {
			display: block;
			width: calc(100% - 40px);
			height: 2px;
			bottom: -20px;
			left: 40px;
			font-size: 20px;
			font-weight: 700;
		}
	}

	.cyberpunk ul.steps li:last-of-type:after {
		display: none;
	}

	.cyberpunk ul.steps li.current:after {
		background-color: #000;
	}

	.cyberpunk.black ul.steps li.current:after {
		background-color: #f9f002;
	}
	/* end */
	ul.cyberpunk > li,
	.cyberpunk ul > li {
		list-style: none;
		position: relative;
		font-size: 1.2rem;
	}

	ul.cyberpunk > li:before:not(ul.steps li:before),
	.cyberpunk ul > li:before:not(ul.steps li:before) {
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

	ol.cyberpunk,
	.cyberpunk ol {
		list-style-type: hiragana-iroha;
		counter-reset: li;
	}

	ol.cyberpunk > li,
	.cyberpunk ol > li {
		list-style: none;
		position: relative;
		font-size: 1.2rem;
		counter-increment: li;
	}

	ol.cyberpunk li:before,
	.cyberpunk ol > li:before {
		content: counter(li);
		top: 0px;
		left: calc(-1.2rem - 10px);
		width: 1.2rem;
		height: 1.2rem;
		color: #f9f002;
		background-color: #000;
		font-weight: 700;
		position: absolute;
		display: block;
		clip-path: polygon(0% 0%, 60% 0%, 100% 40%, 100% 100%, 0% 100%);
	}

	ol.cyberpunk li.glitched,
	ul.cyberpunk li.glitched,
	.cyberpunk ol > li.glitched,
	.cyberpunk ul > li.glitched {
		animation-name: liglitched;
		animation-duration: 0.9s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	ol.cyberpunk li.glitched:nth-child(3n + 3),
	ul.cyberpunk li.glitched:nth-child(1),
	.cyberpunk ol > li.glitched:nth-child(3n + 3),
	.cyberpunk ul > li.glitched:nth-child(1) {
		animation-duration: calc(0.9s * 0.5);
	}

	ol.cyberpunk li.glitched:nth-child(5n + 5),
	ul.cyberpunk li.glitched:nth-child(5n + 5),
	.cyberpunk ol > li.glitched:nth-child(5n + 5),
	.cyberpunk ul > li.glitched:nth-child(5n + 5) {
		animation-duration: calc(0.9s * 0.7);
		animation-timing-function: ease-out;
	}

	ol.cyberpunk li.glitched:nth-child(2n + 2),
	ul.cyberpunk li.glitched:nth-child(2n + 2),
	.cyberpunk ol > li.glitched:nth-child(2n + 2),
	.cyberpunk ul > li.glitched:nth-child(2n + 2) {
		animation-duration: calc(0.9s * 1.5);
		animation-timing-function: ease-in-out;
	}

	ol.cyberpunk li.glitched:nth-child(4n + 4),
	ul.cyberpunk li.glitched:nth-child(4n + 4),
	.cyberpunk ol > li.glitched:nth-child(4n + 4),
	.cyberpunk ul > li.glitched:nth-child(4n + 4) {
		animation-duration: calc(0.9s * 1.2);
		animation-timing-function: ease-in;
	}

	section.cyberpunk.black ul.cyberpunk > li:before,
	section.cyberpunk.black ul > li:before:not(ul.steps li:before) {
		background-color: #f9f002;
	}
</style>
