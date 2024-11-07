<script>
	import '../styles/variables.css'
	import '../styles/animations.css'
	import '../styles/classes.css'
	import { fade } from 'svelte/transition'
	import { cubicInOut } from 'svelte/easing'

	export let data
</script>

{#key data.url}
	<main in:fade={{ duration: 400, delay: 500, easing: cubicInOut }} out:fade={{ duration: 400, easing: cubicInOut }} class="scroll flex column jc-start w-100 h-100">
		<slot />
	</main>
{/key}
