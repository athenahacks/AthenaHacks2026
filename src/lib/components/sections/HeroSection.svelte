<script lang="ts">
	import Socials from '$lib/components/Socials.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<section>
	<div class="background"></div>
	<div class="surfboard">
		<img src="/images/assets/surfboard.png" alt="AthenaHacks surfboard" />
	</div>
	<div class="content">
		<!-- [BEGIN] Organizer application links -->
		  <!-- <Button
			tilt="left"
			backgroundColor="lime"
			href="https://docs.google.com/forms/d/e/1FAIpQLSdqOgPcH2zSmEZerORxW13PubusZdtMttMavNi4oybVytdHVg/viewform?usp=sf_link"
			target="_blank">Apply to be an Organizer!</Button
		> -->
		<!-- [END] Organizer application links -->

		<!-- [BEGIN] Hackathon application links -->
		<Button
			tilt="left"
			backgroundColor="light-blue"
			href="https://forms.gle/JoHK3SLS8kmuWGvk9"
			target="_blank">2025 Hacker Application</Button
		>
		<Button
			tilt="right"
			backgroundColor="teal"
			href="https://forms.gle/oZsktvG8GLgyeskx5"
			target="_blank">2025 Mentor Application</Button
		>
		<!-- [END] application links -->

		<Socials />

		<!-- <div class="tech-together">
			<p><small><i>AthenaHacks powered by </i></small></p>
			<img src="/images/sponsors/tech-together.png" alt="TechTogether logo">
		</div> -->
	</div>

	<div class="divider">
		<img class="divider1" src="/images/assets/wave-border-lightblue.png" alt="wave border" /> 
	</div>
</section>

<style lang="scss">
	section {
		width: 100%;
		margin: 0;
		position: relative;
		min-height: 100vh;

		.background {
			background-image: url('/images/assets/beach-background.png');
			background-size: cover;
			background-repeat: no-repeat;
			max-width: 100%;
			height: 70%;
			padding-top: 110%;
		}

		.surfboard {
			position: absolute;
			top: 10%;
			text-align: center;
			pointer-events: none;

			img {
				width: 80%;
				animation: infiniteFloating 5s ease-in-out infinite;
				transform-origin: center;
			}
		}

		.divider{
			width: 100%;
			position: absolute;
			top: 95%;
		}

		.content {
			display: flex;
			flex-direction: column;
			column-gap: 1em;
			align-items: flex-end;
			top: 60%;
			left: 60%;
			position: absolute;

			// .tech-together {
			// 	display: flex;
			// 	align-items: center;

			// 	img {
			// 		height: 40px;
			// 		padding-left: 0.5em;
			// 	}
			// }
		}

		@include respond-to('medium') {
			.background {
				padding-top: 130%;
			}

			.under_construction {
				top: -15%;
				img {
					width: 90%;
				}
			}
			
			.divider {
				top: 92%;
			}
		}

		@include respond-to('small') {
			.background {
				padding-top: 200%;
			}

			.under_construction {
				top: 0%;
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

			.divider {
				bottom: -10%;
			}
		}
	}

	@keyframes infiniteFloating {
		0%, 100% {
			transform: translateY(4px) rotate(-4deg);
		}

		50% {
			transform: translateY(-14px) rotate(6deg);
		}
	}
</style>
