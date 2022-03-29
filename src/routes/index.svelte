<script>
	import Rating from '../components/rating.svelte';
	import Thanks from '../components/thanks.svelte';
	import { selection } from '../stores/feedback.js';
	import { submitStatus } from '../stores/submit.js';
</script>

{#if !$submitStatus}
	<Rating />
{:else}
	<Thanks />
{/if}
