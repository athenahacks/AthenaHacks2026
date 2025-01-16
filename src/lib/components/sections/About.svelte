<script lang="ts">
	import Header from '../Header.svelte';
</script>

<section id="about">
	<div class="content">
		<Header>What is AthenaHacks?</Header>
		<p>
			Join us for a spectacular weekend dedicated to <b>closing the gender gap</b>, exploring new
			technologies, and building the next big thing! Our mission is to support and nurture students
			of marginalized gender identities in technology by hosting Southern California’s
			<b> premier women-centric hackathon (trans and non-binary inclusive)</b>. <br /><br />Join us
			on campus at the University of Southern California (USC) for over 24 hours full of free food,
			technical workshops, mentorship, social activities, and more! No experience necessary – we
			only require curiosity and creativity!<br /><br />Check us out in the press!
		</p>

		<div class="press-links">
			<a
				href="https://www.huffpost.com/entry/spotlight-on-athenahacks-why-female-hackathons-are_b_58ebf5fae4b0145a227cb797"
				target="_blank"><img src="/images/press/huffpost.svg" alt="Huffpost" /></a
			>
			<a
				href="https://viterbischool.usc.edu/news/2019/04/a-hackathon-for-women-by-women/"
				target="_blank"
				><img src="/images/press/usc_viterbi.svg" alt="USC Viterbi School of Engineering" /></a
			>
			<a href="https://dailytrojan.com/2020/03/08/women-in-tech-rising-above/" target="_blank"
				><img src="/images/press/daily_trojan.png" alt="Daily Trojan" /></a
			>
			<a href="https://medium.com/@athenahacks" target="_blank"
				><img src="/images/press/medium.png" alt="Medium" /></a
			>
		</div>
	</div>
	<div class="image">
		<img class= "owl" src="/images/about.png" alt="watering can owl" />
	</div>
</section>

<style lang="scss">
	#about {
		display: flex;
		flex-wrap: wrap;
		gap: 4em;
		padding-top: 50px;

		.content {
			flex: 1;
		}

		.press-links {
			margin: 2em 0;
			display: flex;
			gap: 2em;
			flex-wrap: wrap;

			img {
				filter: brightness(0.15);
				max-width: 150px;
				height: 50px;
				object-fit: contain;
				transition: all 0.4s ease-out;

				&:hover {
					transform: rotate(2deg);
				}
			}
		}

		.image {
			z-index: 4;
			margin: 0;
			padding: 0;
			width: 40%; /* Adjust size of the image container */
			display: flex;
			justify-content: center; /* Center the image horizontally */
			align-items: center; /* Center the image vertically */

			img {
				width: 85%; /* Scale image responsively */
				animation: infiniteFloating 3s ease-in-out infinite; /* Apply floating animation */
			}
		}

		@include respond-to('medium') {
			margin-top: -4em;
			flex-flow: column;

			.image {
				width: 70%;
				height: 70%;

				img {
					width: 100%;
				}
			}
		}

		@include respond-to('small') {
			margin-top: 0;
			gap: 1em;

			.image {
				width: 80%;
			}
		}
	}

	@keyframes infiniteFloating {
		0% {
			transform: rotate(-7deg) translateY(18px);
		}
		50% {
			transform: rotate(-7.5deg) translateY(-18px);
		}
		100% {
			transform: rotate(-7deg) translateY(18px);
		}
	}
</style>
