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
			target="_blank">AthenaHacks 2024 Hacker Application</Button
		>
		<Button
			tilt="right"
			backgroundColor="pink"
			href="https://airtable.com/appC2yvmYQ33jcGYT/shrCzdzj5vyRfqXfl"
			target="_blank">AthenaHacks 2024 Mentor Application</Button
		>
		<Button
			tilt="left"
			backgroundColor="gold"
			href="https://airtable.com/appC2yvmYQ33jcGYT/shrhXDTWiI3Th8VT0"
			target="_blank">AthenaHacks 2024 Volunteer Application</Button
		>
		<Socials />
		<div class="tech-together">
			<p><small><i>AthenaHacks Powered by </i></small></p>
			<img src="/images/sponsors/tech-together.png" alt="TechTogether logo">
		</div>
	</div>
</section>

<style lang="scss">
	section {
		width: 100%;
		margin: 0;
		position: relative;
		min-height: 100vh;

		.background {
			background-image: url('/images/hero-section-cover.png');
			background-size: cover;
			background-repeat: no-repeat;
			width: 100%;
			height: 0;
			padding-top: 80%;
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
			align-items: flex-end;
			top: 56%;
			right: 10em;
			position: absolute;

			.tech-together {
				display: flex;
				align-items: center;

				img {
					height: 40px;
					padding-left: 0.5em;
				}
			}
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
				padding-top: 220%;
			}

			.chocolate {
				top: 15%;
				img {
					width: 90%;
				}
			}

			.content {
				top: 48%;
				left: 0;
				right: 0;
				margin-left: auto;
				margin-right: auto;
				width: 80%;
				align-items: center;
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
