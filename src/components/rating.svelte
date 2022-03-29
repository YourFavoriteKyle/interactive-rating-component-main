<script>
	import { changeSelection, selection } from '../stores/feedback.js';
	import { submit } from '../stores/submit.js';
</script>

<!-- Rating state start -->
<div class="w-fit p-3 rounded-full bg-dark-blue">
	<img src="./images/icon-star.svg" alt="star icon" />
</div>

<p class="text-white text-2xl">How did we do?</p>
<p class="text-medium-grey text-sm">
	Please let us know how we did with your support request. All feedback is appreciated to help us
	improve our offering!
</p>
<div class="flex justify-between">
	<button
		on:click={() => changeSelection(1)}
		class="py-2 px-4 rounded-full hover:bg-primary hover:text-white focus:bg-light-grey focus:text-white {+$selection ===
		1
			? 'text-white bg-light-grey'
			: 'text-light-grey bg-dark-blue'}"
	>
		1
	</button>
	<button
		on:click={() => changeSelection(2)}
		class="py-2 px-4 rounded-full hover:bg-primary hover:text-white focus:bg-light-grey focus:text-white {+$selection ===
		2
			? 'text-white bg-light-grey'
			: 'text-light-grey bg-dark-blue'}"
	>
		2
	</button>
	<button
		on:click={() => changeSelection(3)}
		class="py-2 px-4 rounded-full hover:bg-primary hover:text-white focus:bg-light-grey focus:text-white {+$selection ===
		3
			? 'text-white bg-light-grey'
			: 'text-light-grey bg-dark-blue'}"
	>
		3
	</button>
	<button
		on:click={() => changeSelection(4)}
		class="py-2 px-4 rounded-full hover:bg-primary hover:text-white focus:bg-light-grey focus:text-white {+$selection ===
		4
			? 'text-white bg-light-grey'
			: 'text-light-grey bg-dark-blue'}"
	>
		4
	</button>
	<button
		on:click={() => changeSelection(5)}
		class="py-2 px-4 rounded-full hover:bg-primary hover:text-white focus:bg-light-grey focus:text-white {+$selection ===
		5
			? 'text-white bg-light-grey'
			: 'text-light-grey bg-dark-blue'}"
	>
		5
	</button>
</div>
{#if $selection == 0}
	<button
		class="p-2 text-center w-full bg-primary rounded-3xl text-white hover:bg-white hover:text-primary cursor-not-allowed"
		>SUBMIT
	</button>
{:else}
	<button
		on:click={submit}
		class="p-2 text-center w-full bg-primary rounded-3xl text-white hover:bg-white hover:text-primary"
		>SUBMIT
	</button>
{/if}

<!-- Rating state end -->
