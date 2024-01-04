<script lang="ts">
	import Socials from '$lib/components/Socials.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<section>
	<div class="background"></div>
	<div class="chocolate">
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
		margin: 0;
		position: relative;

		.background {
			background-image: url('/images/hero-section-cover.png');
			background-size: cover;
			background-repeat: no-repeat;
			width: 100%;
			height: 0;
			padding-top: 66.64%;
		}

		.chocolate {
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

		@include respond-to('medium') {
			.background {
				padding-top: 130%;
			}

			.chocolate {
				top: 20%;
				img {
					width: 80%;
				}
			}
		}

		@include respond-to('small') {
			.background {
				padding-top: 200%;
			}

			.chocolate {
				img {
					width: 90%;
				}
			}

			.content {
				top: 50%;
				left: 0;
				right: 0;
				margin-left: auto;
				margin-right: auto;
			}
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
