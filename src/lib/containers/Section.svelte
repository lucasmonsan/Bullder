<script>
	import { observer } from '$lib/utils/observer'

	let visible = false

	export let Id = ''
	export let Animation = 'fade'
	export let FlexDir = ''
	export let BgColor = 'var(--color-1)'
</script>

<section id={Id} use:observer on:enterViewport={() => (visible = true)} on:exitViewport={() => (visible = false)} class={`flex ${FlexDir} bgColor-${BgColor.replace(/var\(--color-(.*)\)/, '$1')} ${Animation}-${visible ? 'in' : 'out'}`}>
	<slot />
</section>
