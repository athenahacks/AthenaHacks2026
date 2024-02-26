<script lang="ts">
	import Header from '../Header.svelte';
</script>

<section id="sponsors">
	<Header
		>Sponsors
		<img class="macaron-stack" src="/images/macaron-stack.png" alt="macaron stack" />
	</Header>
	<div class="sponsor-list">
		<div class="section tier-1">
			<img class="macaron" src="/images/macaron-gold.png" alt="macaron decoration" />
			<img
				class="sponsor"
				src="/images/sponsors/bloomberg-engineering.png"
				alt="Bloomberg Engineering"
			/>
			<img class="sponsor" src="/images/sponsors/chevron.png" alt="Chevron" />
		</div>
		<div class="section tier-3">
			<img class="macaron" src="/images/macaron-pink.png" alt="macaron decoration" />
			<img class="sponsor" src="/images/sponsors/google-cloud.png" alt="Google Cloud" />
			<img class="sponsor" src="/images/sponsors/rewriting-the-code.png" alt="Rewriting The Code" />
			<img class="sponsor" src="/images/sponsors/figma.png" alt="Figma" />
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
		margin-top: 6em;
		margin-bottom: 6em;
		display: flex;
		flex-flow: column;
		gap: 6em;
		align-items: center;

		@include respond-to('small') {
			margin: inherit auto;
			width: 90%;
		}

		.sponsor {
			max-width: 100%;

			img {
				object-fit: contain;
			}
		}

		.section {
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
			width: 50%;
			background-color: $gold;
			.sponsor {
				max-height: 110px;
			}
		}

		.tier-3 {
			background-color: $pink;
			.sponsor {
				max-height: 35px;
			}
		}
	}
	.thank-you-message {
		text-align: center;
		margin: auto;
		margin-top: 4em;
		width: 60%;

		img {
			width: 100px;
		}
	}

	.macaron-stack {
		max-height: 150px;
		max-width: 100%;
		padding-left: 0.25em;
		padding-bottom: 1em;
		transform: translateY(50%);
	}
</style>
