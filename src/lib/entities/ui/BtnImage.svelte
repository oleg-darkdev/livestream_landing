<script>
</script>

<div class="btn-group">
	<button class="btn btn--xbox">
		<div class="btn__content" />
		<span class="btn__label">r23</span>
	</button>
	<button class="btn btn--ps4">
		<div class="btn__content" />
		<span class="btn__label">r24</span>
	</button>
	<button class="btn btn--pc">
		<div class="btn__content" />
		<span class="btn__label">r25</span>
	</button>
</div>

<style>
	.btn-group {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		/* this aplies only if we have 3 buttons */
	}
	.btn-group .btn:nth-child(even) {
		border-left: 0;
		border-right: 0;
	}
	.btn-group .btn:first-child::before {
		content: '';
		width: 24px;
		height: 24px;
		border-top: 2px solid #050a0e;
		position: absolute;
		bottom: -14px;
		left: -13px;
		background: #fcee09;
		transform: rotate(45deg);
	}
	.btn-group .btn:last-child::after {
		content: '';
		width: 24px;
		height: 24px;
		border-bottom: 2px solid #050a0e;
		position: absolute;
		top: -14px;
		right: -13px;
		background: #fcee09;
		transform: rotate(45deg);
	}
	.btn-group--disabled .btn {
		border-color: rgba(0, 0, 0, 0.5);
		opacity: 0.5;
	}
	.btn-group--disabled .btn:first-child::before,
	.btn-group--disabled .btn:last-child::after {
		border-color: rgba(0, 0, 0, 0.5);
	}

	.btn {
		display: flex;
		box-align: center;
		align-items: center;
		justify-content: center;
		flex-flow: row wrap;
		border-top: 2px solid #050a0e;
		border-bottom: 2px solid #050a0e;
		border-left: 2px solid #050a0e;
		border-right: 2px solid #050a0e;
		background: transparent;
		color: #050a0e;
		height: 60px;
		outline: none;
		cursor: pointer;
		padding: 1px 6px;
		position: relative;
		background-repeat: no-repeat;
		background-position: center center;
	}

	.btn--secondary {
		color: #ffffff;
		border: none;
		border-right: 2px solid #00f0ff;
		background-color: #ff003c;
	}
	.btn--secondary::before {
		border-top: 2px solid #ff003c;
		bottom: -12px;
		left: -12px;
	}
	.btn--xbox {
		width: 200px;
		background-image: url(https://www.dropbox.com/s/228q20dqkiv68rp/logo-xboxone-58193d9d.svg?raw=1);
		background-size: 75% auto;
	}
	.btn--ps4 {
		width: 200px;
		background-image: url(https://www.dropbox.com/s/b2w0a6zznc06hea/logo-ps4-0fccb0e9.svg?raw=1);
		background-size: 75% auto;
	}
	.btn--pc {
		width: 200px;
		background-image: url(https://www.dropbox.com/s/1ae4e465kv4zxi3/logo-pc-c7d9e6db.svg?raw=1);
		background-size: 25% auto;
	}
	.btn[disabled] {
		border-color: rgba(0, 0, 0, 0.5);
		color: rgba(0, 0, 0, 0.5);
		pointer-events: none;
	}
	.btn__label {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font-family: Tomorrow, sans-serif;
		font-size: 7px;
		text-transform: uppercase;
		position: absolute;
		bottom: -5px;
		right: 10px;
		padding: 0 4px;
		background: #fcee09;
	}
	.btn__content {
		font-family: Tomorrow, sans-serif;
		text-transform: uppercase;
		font-weight: 700;
	}

	@media (min-width: 20rem) {
		.container {
			grid-template-columns: 1fr;
			grid-template-rows: repeat(2, 1fr);
		}

		.info__title {
			font-size: 1.5rem;
			margin-bottom: 50px;
		}

		.btn {
			height: 45px;
		}
		.btn--xbox,
		.btn--ps4,
		.btn--pc {
			width: 100px;
		}
	}
	@media (min-width: 42.5rem) {
		.btn {
			height: 50px;
		}
		.btn--xbox,
		.btn--ps4,
		.btn--pc {
			width: 150px;
		}
	}
	@media (min-width: 80rem) {
		.container {
			grid-template-columns: repeat(2, 50%);
			grid-template-rows: auto;
		}

		.btn {
			height: 80px;
		}
		.btn--xbox,
		.btn--ps4,
		.btn--pc {
			width: 200px;
		}
	}
</style>
