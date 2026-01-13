<script lang="ts">
	import Socials from '$lib/components/Socials.svelte';

	const athenaLogo: string = 'images/ah-logo.png';
	const viterbiLogo: string = 'images/viterbi-logo.png';
</script>

<footer>
	<div class="footer">
		<div class="footer-overlay">
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
	</div>
</footer>

<style lang="scss">
	.footer {
		position: relative;
		background-image: url('/images/assets/seafloor.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%;
		min-height: 100vh;

		display: flex;
		flex-direction: column;
  		justify-content: flex-end;
	}

	.footer-overlay {
		position: relative;
		width: 100%;

		padding: 4em 2em;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		gap: 2em;

		font-size: clamp(0.85rem, 1.2vw, 1rem);

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

	@include respond-to('medium') {
		.footer {
			background-image: url('/images/assets/seafloor-long.png');
			min-height: 80vh;
			width: 100%;
		}
	}

	@include respond-to('small') {
		.footer {
			background-image: url('/images/assets/seafloor-long.png');
			min-height: 80vh;
			width: 100%;
		}

		.footer-overlay {
			margin: 10px;
		}
	}
</style>
