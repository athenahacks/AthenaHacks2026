<script lang="ts">
	import Header from '../Header.svelte';
</script>

<section id="sponsors">
	<Header>Sponsors</Header>
	<div class="sponsor-list">
		<!-- <p><i>Coming soon...</i></p> -->
		<div class="section tier-1">
			<img
				class="macaron"
				src="/images/macaron-gold.png"
				alt="macaron decoration"
			/>
			<img
				class="sponsor"
				src="/images/sponsors/bloomberg-engineering.png"
				alt="Bloomberg Engineering"
			/>
			<img
				class="sponsor"
				src="/images/sponsors/chevron.png"
				alt="Chevron"
			/>
		</div>
	</div>
	<div class="thank-you-message">
		<p>
			A huge thank you to all our sponsors and contributors! If you're interested in sponsoring
			AthenaHacks 2024, please contact us at <a href="mailto:athenahacks@gmail.com"
				>athenahacks@gmail.com</a
			>
		</p>
		<img src="/images/pencil.png" alt="Pencil" />
	</div>
</section>

<style lang="scss">
	.sponsor-list {
		margin-bottom: 8em;
		display: flex;
		justify-content: center;

		.sponsor {
			max-height: 90px;
			max-width: 100%;

			img {
				object-fit: contain;
			}
		}

		.section {
			width: 50%;
			display: flex;
			flex-wrap: wrap;
			gap: 3em;
			justify-content: space-around;
			padding: 3em;
			border-radius: 1.25em 1.25em 0 1.25em;
			border: $brown solid 3px;
			filter: drop-shadow(0.4em 0.4em 0 $brown);
			position: relative;

			.macaron {
				width: 100px;
				height: 100px;
				position: absolute;
				top: -40px;
				right: -40px;
				filter: drop-shadow(-0.05em 0.15em 0 $brown);
			}
		}

		.tier-1 {
			background-color: $gold;
		}
	}
	.thank-you-message {
		text-align: center;
		margin: auto;
		width: 60%;

		img {
			width: 100px;
		}
	}
</style>
