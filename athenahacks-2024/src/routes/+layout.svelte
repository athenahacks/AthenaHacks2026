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
                <img src="/images/preloader.gif" alt="Animation of bird typing">
                <p>Loading...</p>
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
                width: 20%;
                position: absolute;
                top: 25%;
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
                text-align: center;

                p {
                    font-family: 'Lilita One', sans-serif;
                    color: $brown;
                    font-size: 2rem;
                }
            }
		}
	}
</style>
