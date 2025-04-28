<script lang="ts">
	import Socials from '$lib/components/Socials.svelte';

	const athenaLogo: string = 'images/ah-logo.png';
	const viterbiLogo: string = 'images/viterbi-logo.png';
</script>

<footer>
	<div class = "scarecrow">
		<img src="images/owl and scarecrow.png" alt="owl and scarecrow" />
	</div>
	<div class="footer">
		<div class="logos">
			<a href="https://athenahacks.com/" target="_blank"
				><img src={athenaLogo} alt="AthenaHacks logo" /></a
			>
		</div>
		<div class="previous-sites">
			<h3>Previous Sites</h3>
			<a href="https://athenahacks.github.io/AthenaHacks2024/" target="_blank">AthenaHacks 2024</a>
			<a href="https://athenahacks.github.io/AthenaHacks2023/" target="_blank">AthenaHacks 2023</a>
			<a href="https://athenahacks.github.io/AthenaHacks2022/" target="_blank">AthenaHacks 2022</a>
			<a href="https://athenahacks.github.io/AthenaHacks2021/" target="_blank">AthenaHacks 2021</a>
			<a href="http://athenahacks.github.io/AthenaHacks2020/" target="_blank">AthenaHacks 2020</a>
			<a href="https://github.com/athenahacks" target="_blank">And more...</a>
		</div>
		<div class="applications">
			<h3>Applications</h3>
			<a href="https://airtable.com/appC2yvmYQ33jcGYT/shrNWwl77LcMu7f1G" target="_blank"
				>Hacker Applications</a
			>
			<a href="https://airtable.com/app1QQxZoUxfmKxLJ/shrWioweTVsOzvrhj" target="_blank"
				>Mentor Applications</a
			>
		</div>
		<div class="socials-wrapper">
			<Socials />
		</div>
	</div>
</footer>

<style lang="scss">
	.scarecrow {
		padding-left: 400px;
		padding-top: -50px;
		padding-bottom: 410px;
		height: 80px;
		width: auto;
	}
	.footer {
		// Tilted border
		position: relative;
		padding: 5em 2em 4em;

		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		gap: 2em;

		@include respond-to('small') {
			padding-top: 8em;
		}

		// green fence background
		&::before {
			content: '';
			background-image: url('/images/footer.png');
			position: absolute;
			inset: 3px 0 0 0;
			z-index: -1;
		}

		h3 {
			margin-bottom: 0.5em;
		}

		a {
			font-weight: 400;
			color: $text-gray;
		}

		.logos {
			display: flex;
			flex-direction: column;

			.viterbi-logo {
				mix-blend-mode: darken;
			}
		}

		.previous-sites {
			text-align: center;
			display: flex;
			flex-direction: column;
		}

		.applications {
			text-align: center;
			display: flex;
			flex-direction: column;
		}

		.socials-wrapper {
			align-self: center;
		}
	}
</style>
