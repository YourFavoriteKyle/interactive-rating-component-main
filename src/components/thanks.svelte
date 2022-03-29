<script>
	import { selection } from '../stores/feedback.js';
</script>

<!-- Thank you state start -->
<header class="space-y-5">
	<div class="mx-auto w-fit p-1.5">
		<img src="./images/illustration-thank-you.svg" alt="thank you illustration" />
	</div>
</header>

<main class="space-y-5">
	<div class="w-fit mx-auto text-center">
		<p class="text-primary py-2 px-4 rounded-3xl bg-dark-blue">
			You selected {$selection} out of 5
		</p>
	</div>

	<h1 class="text-center text-2xl text-white">Thank you!</h1>

	<p class="text-light-grey text-center text-sm">
		We appreciate you taking the time to give a rating. If you ever need more support, don’t
		hesitate to get in touch!
	</p>

	<!-- Thank you state end -->
</main>
