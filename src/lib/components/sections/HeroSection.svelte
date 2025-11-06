<script lang="ts">
	import Socials from '$lib/components/Socials.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<section>
	<div class="background"></div>
	<div class="under_construction">
		<img src="/images/owls_at_work.png" alt="AthenaHacks leaf. March 1-2" />
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
		<!-- <Button
			tilt="left"
			backgroundColor="light-pink"
			href="apply-hacker"
			target="_blank">2025 Hacker Application</Button
		>
		<Button
			tilt="right"
			backgroundColor="pink"
			href="apply-mentor"
			target="_blank">2025 Mentor Application</Button
		> -->
		<!-- <Button
			tilt="left"
			backgroundColor="dark-pink"
			href="apply-volunteer"
			target="_blank">2025 Volunteer Application</Button
		>  -->
		<!-- [END] application links -->

		<Socials />

		<!-- <div class="tech-together">
			<p><small><i>AthenaHacks powered by </i></small></p>
			<img src="/images/sponsors/tech-together.png" alt="TechTogether logo">
		</div> -->
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
			padding-top: 110%;
		}

		.under_construction {
			position: absolute;
			top: -12%;
			text-align: center;
			pointer-events: none;

			img {
				width: 70%;
				// animation: infiniteFloating 3s ease-in-out infinite;
			}
		}

		.content {
			display: flex;
			flex-direction: column;
			column-gap: 1em;
			align-items: flex-end;
			top: 53%;
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
		}
	}

	@keyframes infiniteFloating {
		0% {
			transform: scale(1.1);
			transform: rotate(-7deg) translateY(20px);
		}
		50% {
			transform: scale(1);
			transform: translateY(-20px) rotate(-7.5deg);
		}
		100% {
			transform: rotate(-7deg) translateY(20px);
		}
	}
</style>
