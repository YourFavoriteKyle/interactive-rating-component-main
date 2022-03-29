<script>
	import Rating from '../components/rating.svelte';
	import Thanks from '../components/thanks.svelte';
	import { submitStatus } from '../stores/submit.js';
</script>

{#if !$submitStatus}
	<Rating />
{:else}
	<Thanks />
{/if}
