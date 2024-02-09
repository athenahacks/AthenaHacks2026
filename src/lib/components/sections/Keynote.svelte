<script lang="ts">
	import Header from '../Header.svelte';
</script>

<section id="keynote">
	<Header>Keynote</Header>
	<div class="keynote-wrapper">
		<div class="image">
			<div class="image-wrapper">
				<img src="/images/keynote.jpeg" alt="Keynote speaker headshot" />
			</div>
		</div>
		<div class="description">
			<h3>Janine Lee</h3>
			<h4>Global Head of Learning & Development at Google</h4>
			<p>
				Dr. Janine Lee is a Global Head of Learning & Development (L&D) at Google, and a Diversity
				Equity Inclusion and Belonging (DEIB) Leader. As a USC Doctorate of Education (Ed.D)
				graduate, Janine authored her dissertation research on workplace sense of belonging for
				women of color in technology. Janine has won dozens of internationally acclaimed awards
				including the Maybelline Empowerment through Education Award featured in People magazine.
				She is a keynote speaker, 100+ country world traveler, and co-author of the upcoming book
				‘Unstoppable: The Rise of Female Global Leaders’ releasing this Spring 2024. Her life vision
				is to “Create a world where everyone belongs” and her mission is to “Inspire others to reach
				their full potential.”
			</p>
		</div>
	</div>
</section>

<style lang="scss">
	.keynote-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 5em;

		.image {
			display: flex;
			justify-content: center;
			flex: 4;
			img {
				width: 100%;
				min-width: 300px;
				max-width: 50vw;
				object-fit: contain;
				border-radius: 1.5em;
				border: $brown 3px solid;
			}
		}

		.description {
			h3 {
				font-family: 'Lilita One', sans-serif;
				font-weight: 400;
				color: $purple;
				font-size: 2.3rem;
				margin-bottom: 0.5em;
				margin-top: 0;
			}

			h4 {
				font-size: 1.2rem;
				margin-top: 0.5em;
				margin-bottom: 0;
			}
			flex: 6;
		}

		@include respond-to('medium') {
			flex-direction: column;
			gap: 2em;

			.image {
				img {
					max-width: 40vw;
				}
			}
			.description {
				text-align: center;
			}
		}
	}
</style>
