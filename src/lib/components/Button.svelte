<!-- Used for hero section -->
<!-- prop: tilt = {-1, 0, 1}. Sets the button tilt -->

<script lang="ts">
	type TiltRange = 'left' | 'right' | 'none';
	type ButtonBackgroundColors = 'blue' | 'pink' | 'gold' | 'green';

	export let tilt: TiltRange;
	export let backgroundColor: ButtonBackgroundColors;
	export let href: string;
	export let target: string = '';
</script>

<div class="button tilt-{tilt} bg-{backgroundColor}">
	<a {href} {target}>
		<slot />
	</a>
</div>

<style lang="scss">
	.button {
		border: $brown 2px solid;
		border-radius: 0.75em 0.75em 0em 0.75em;
		text-align: center;
		padding: 0.5em 2em;
		filter: drop-shadow(0.25em 0.25em 0 $brown);
		margin-bottom: 1em;
		transition: all 0.4s ease-out;

		&:hover {
			transform: rotate(2deg);
		}
	}
	a {
		font-family: 'Lilita One', sans-serif;
		color: $brown;
		font-size: 1.25rem;
		text-decoration: none;
		font-weight: 400;

		@include respond-to('small') {
			font-size: 1rem;
		}
	}

	.tilt-left {
		transform: rotate(-1deg);
	}

	.tilt-right {
		transform: rotate(1deg);
	}

	.bg-blue {
		background-color: $blue;
	}

	.bg-pink {
		background-color: $pink;
	}

	.bg-gold {
		background-color: $gold;
	}
	.bg-green {
		background-color: $lime;
	}

</style>
