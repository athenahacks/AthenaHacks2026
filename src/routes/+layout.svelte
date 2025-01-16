<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let preloadVisible: boolean = true;
	onMount(async () => {
		setTimeout(() => (preloadVisible = false), 500);
	});
</script>

<!-- Forces website to fill entire screen width on mobile -->
<div class="mobile-wrapper">
	{#if preloadVisible}
		<div id="preloader" transition:fade={{ duration: 300 }}>
			<div class="gif">
				<img src="/images/preloader.gif" alt="flower blooming" />
			</div>
		</div>
	{/if}

	<slot />
</div>

<style lang="scss">
	.mobile-wrapper {
		position: relative;
		overflow-x: hidden;
		min-height: 100vh;
		display: flex;
		flex-direction: column;

		#preloader {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: $blue;
			z-index: 200;

			.gif {
				margin: auto;
				margin-top: 20vh;
				text-align: center;

				img {
					width: 30%;
					height: auto;
				}
			}
		}
	}
</style>
