<script lang="ts">
	import Socials from '$lib/components/Socials.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<section>
	<div class="background"></div>
	<div class="chocobar">
		<img src="/images/hero-section-chocobar.png" alt="AthenaHacks chocolate keyboard. March 2-3" />
	</div>
	<div class="content">
		<Button
			tilt="left"
			backgroundColor="blue"
			href="https://airtable.com/appC2yvmYQ33jcGYT/shrNWwl77LcMu7f1G"
			target="_blank">Hacker Applications</Button
		>
		<Button
			tilt="right"
			backgroundColor="pink"
			href="https://airtable.com/app1QQxZoUxfmKxLJ/shrWioweTVsOzvrhj"
			target="_blank">Mentor Applications</Button
		>
		<Socials />
	</div>
</section>

<style lang="scss">
	section {
		width: 100%;
		margin-left: 0;
		margin-right: 0;
		position: relative;
    margin-bottom: 0;

		.background {
			background-image: url('/images/hero-section-cover.png');
			background-size: cover;
			background-repeat: no-repeat;
			width: 100%;
			height: 0;
			padding-top: 66.64%;
		}

		.chocobar {
			position: absolute;
			top: 15%;
			text-align: center;
			pointer-events: none;

			img {
				width: 60%;
				animation: infiniteFloating 4s ease-in-out infinite;
			}
		}

		.content {
			display: flex;
			flex-direction: column;
			column-gap: 1em;
			align-items: center;
			top: 58%;
			right: 10em;
			position: absolute;
		}
	}

	@keyframes infiniteFloating {
		0% {
			transform: scale(1.1);
			transform: rotate(-0.5deg) translateY(20px);
		}
		50% {
			transform: scale(1);
			transform: translateY(-20px) rotate(0.5deg);
		}
		100% {
			transform: rotate(-0.5deg) translateY(20px);
		}
	}
</style>
