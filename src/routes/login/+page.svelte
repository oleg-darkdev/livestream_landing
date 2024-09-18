	<div class='w-full h-screen justify-center items-center flex  cyber-razor'>
  <section class="cyberpunk black h-auto ">
		<form style="max-width: 500px">
      <h2 class="cyber-h fg-yellow">Личный кабинет</h2>
			<!-- <input class="cyberpunk" type="text" placeholder='your email'/> -->
			<input class="cyberpunk" type="phone" placeholder='идентификатор'/>

			<input class="cyberpunk" type="password" placeholder='пароль'/>



        <!-- <div class="btn-group mx-auto">
          <a href='./login'  class="group transition duration-300 ease-in-out delay-150  btn hover:bg-black ">
            <div class="btn__content group-hover:fg-yellow">registration</div>
            <span class="btn__label "></span>
        </a>
          <a href='./login'  class="group transition duration-300 ease-in-out delay-150   btn--secondary hover:bg-black ">
            <div class="btn__content group-hover:fg-yellow">login</div>
            <span class="btn__label "></span>
        </a>
        </div> -->

      <!-- <div class="non-btn-group">
				<a href='./login' target="_blank" class="btn group transition duration-300 ease-in-out delay-150  btn--secondary hover:bg-black">
					<div class="btn__content ">login</div>
					<span class="btn__label fg-black">login</span>
				</a>
			</div> -->
		</form>
	</section>
</div>

			<!-- <input class="cyberpunk" type="date" /> -->
			<!-- <input class="cyberpunk" type="time" /> -->
			<!-- <input class="cyberpunk" type="file" /> -->
			<!-- <input class="cyberpunk" type="number" /> -->
			<!-- <textarea class="cyberpunk" /> -->
			<!-- <select class="cyberpunk">
				<option>Item 1</option>
				<option>Item 2</option>
				<option>Item 3</option>
			</select><br /> -->

<style>

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

	input[type='text'].cyberpunk,
	input[type='date'].cyberpunk,
	input[type='time'].cyberpunk,
	input[type='file'].cyberpunk,
	input[type='number'].cyberpunk,
	input[type='phone'].cyberpunk,
	input[type='password'].cyberpunk,
	textarea.cyberpunk,
	select.cyberpunk,
	.cyberpunk input[type='text'],
	.cyberpunk input[type='date'],
	.cyberpunk input[type='time'],
	.cyberpunk input[type='file'],
	.cyberpunk input[type='number'],
	.cyberpunk input[type='phone'],
	.cyberpunk input[type='password'],
	.cyberpunk textarea,
	.cyberpunk select {
		width: calc(100% - 30px);
		border: 30px solid #000;
		border-left: 5px solid #000;
		border-right: 5px solid #000;
		border-bottom: 15px solid #000;
		clip-path: polygon(
			0px 25px,
			26px 0px,
			calc(60% - 25px) 0px,
			60% 25px,
			100% 25px,
			100% calc(100% - 10px),
			calc(100% - 15px) calc(100% - 10px),
			calc(80% - 10px) calc(100% - 10px),
			calc(80% - 15px) calc(100% - 0px),
			10px calc(100% - 0px),
			0% calc(100% - 10px)
		);
		margin-bottom: 10px;
		padding: 12px;
		font-size: 1.7rem;
		font-weight: 700;
		/*caret-shape: underscore;*/
	}

	input[type='password'].cyberpunk,
	.cyberpunk input[type='password'] {
		font-family: 'Hacked';
		font-style: normal;
		font-weight: 400;
		font-variant: normal;
		text-transform: none;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		letter-spacing: 2px;
	}

	textarea.cyberpunk,
	.cyberpunk textarea {
		min-height: 120px;
		clip-path: polygon(
			0px 0px,
			50px 0px,
			75px 26px,
			105px 26px,
			130px 0px,
			calc(60% - 25px) 0px,
			60% 25px,
			100% 25px,
			100% calc(100% - 10px),
			calc(100% - 15px) calc(100% - 10px),
			calc(80% - 10px) calc(100% - 10px),
			calc(80% - 15px) calc(100% - 0px),
			10px calc(100% - 0px),
			0% calc(100% - 10px)
		);
	}

	select.cyberpunk,
	.cyberpunk select {
		width: 100%;
		appearance: none;
		position: relative;
		clip-path: polygon(
			0px 25px,
			60px 25px,
			85px 0px,
			calc(60% - 25px) 0px,
			60% 25px,
			calc(100% - 80px) 25px,
			calc(100% - 55px) 0px,
			100% 0px,
			100% calc(100% - 10px),
			calc(100% - 15px) calc(100% - 10px),
			calc(80% - 10px) calc(100% - 10px),
			calc(80% - 15px) calc(100% - 0px),
			10px calc(100% - 0px),
			0% calc(100% - 10px)
		);
	}

	select.cyberpunk option,
	.cyberpunk select option {
		color: #f9f002;
		background-color: #000;
	}

	input[type='radio'].cyberpunk,
	.cyberpunk input[type='radio'] {
		border-radius: 15%;
		z-index: 100;
		height: 14px;
		width: 20px;
		appearance: none;
		outline: none;
		background-color: #000;
		cursor: pointer;
		position: relative;
		margin: 0px;
		display: inline-block;
	}

	input[type='radio'].cyberpunk:after,
	.cyberpunk input[type='radio']:after {
		content: '';
		display: block;
		width: 8px;
		height: 6px;
		background-color: #f9f002;
		position: absolute;
		top: 2px;
		left: 2px;
		transition: background 0.3s, left 0.3s;
	}

	input[type='radio'].cyberpunk:checked:after,
	.cyberpunk input[type='radio']:checked:after {
		background-color: #8ae66e;
		left: 10px;
	}

	input[type='checkbox'].cyberpunk,
	.cyberpunk input[type='checkbox'] {
		border-radius: 15%;
		z-index: 100;
		height: 20px;
		width: 20px;
		appearance: none;
		outline: none;
		background-color: #000;
		cursor: pointer;
		position: relative;
		margin: 0px;
		margin-bottom: -3px;
		display: inline-block;
	}

	input[type='checkbox'].cyberpunk:before,
	.cyberpunk input[type='checkbox']:before {
		content: '';
		display: block;
		width: 8px;
		height: 8px;
		border: 2px solid #f9f002;
		border-top: 2px solid transparent;
		border-radius: 50%;
		position: absolute;
		top: 5px;
		left: 4px;
	}

	input[type='checkbox'].cyberpunk:after,
	.cyberpunk input[type='checkbox']:after {
		content: '';
		display: block;
		width: 2px;
		height: 7px;
		background-color: #f9f002;
		position: absolute;
		top: 3px;
		left: 9px;
	}

	input[type='checkbox'].cyberpunk:checked:before,
	.cyberpunk input[type='checkbox']:checked:before {
		border-color: #8ae66e;
		border-top-color: transparent;
	}

	input[type='checkbox'].cyberpunk:checked:after,
	.cyberpunk input[type='checkbox']:checked:after {
		background-color: #8ae66e;
	}

	.cyberpunk fieldset,
	fieldset.cyberpunk {
		border: 3px dotted purple;
		margin: 10px 0px;
	}

	section.cyberpunk.black textarea.cyberpunk,
	section.cyberpunk.black input[type='text'].cyberpunk,
	section.cyberpunk.black input[type='date'].cyberpunk,
	section.cyberpunk.black input[type='time'].cyberpunk,
	section.cyberpunk.black input[type='file'].cyberpunk,
	section.cyberpunk.black input[type='number'].cyberpunk,
	section.cyberpunk.black input[type='phone'].cyberpunk,
	section.cyberpunk.black input[type='password'].cyberpunk,
	section.cyberpunk.black select.cyberpunk,
	section.cyberpunk.black textarea.cyberpunk,
	section.cyberpunk.black input[type='text'],
	section.cyberpunk.black input[type='date'],
	section.cyberpunk.black input[type='time'],
	section.cyberpunk.black input[type='file'],
	section.cyberpunk.black input[type='number'],
	section.cyberpunk.black input[type='phone'],
	section.cyberpunk.black input[type='password'],
	section.cyberpunk.black select {
		border-color: #f9f002;
		background-color: #000;
		color: #f9f002;
	}

	section.cyberpunk.black input[type='time']::-webkit-calendar-picker-indicator,
	section.cyberpunk.black input[type='date']::-webkit-calendar-picker-indicator {
		filter: invert(82%) sepia(91%) saturate(803%) hue-rotate(352deg) brightness(107%) contrast(104%);
	}

	section.cyberpunk.black input[type='radio'].cyberpunk,
	section.cyberpunk.black input[type='radio'] {
		background-color: #f9f002;
	}

	section.cyberpunk.black input[type='radio'].cyberpunk:after,
	section.cyberpunk.black input[type='radio']:after {
		background-color: #000;
	}

	section.cyberpunk.black input[type='radio'].cyberpunk:checked:after,
	section.cyberpunk.black input[type='radio']:checked:after {
		background-color: #ff003c;
	}

	section.cyberpunk.black input[type='checkbox'].cyberpunk:checked:before,
	section.cyberpunk.black input[type='checkbox']:checked:before {
		border-color: #ff003c;
		border-top-color: transparent;
	}

	section.cyberpunk.black input[type='checkbox'].cyberpunk:checked:after,
	section.cyberpunk.black input[type='checkbox']:checked:after {
		background-color: #ff003c;
	}
</style>
