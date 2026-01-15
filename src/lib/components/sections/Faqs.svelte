<script lang="ts">
	import Header from '../Header.svelte';
	import data from '$lib/data/faqs.yml';
	import FaqDetails from '../FaqDetails.svelte';
</script>

<section id="faqs">
	<div class="content">
		<div class="questions">
			<Header>FAQs</Header>
			{#each data.faq as qa}
				<FaqDetails question={qa.question} answer={qa.answer} />
			{/each}
		</div>
		<div class="image">
			<figure>
				<img class="sunglasses-owl" src="/images/owls/SunglassesOwl.png" alt="Sunglasses Owl" />
				<figcaption>
					Don’t see your question? Hit us up at <a href="mailto:athenahacks@gmail.com"
						>athenahacks@gmail.com</a
					>!
				</figcaption>
			</figure>
			<img class="sandcastle" src="/images/assets/sandcastle.png" alt="sandcastle" />
		</div>
	</div>
</section>

<style lang="scss">
	.content {
		display: flex;
		gap: 4em;
		flex-wrap: wrap;

		.sunglasses-owl {
			max-width: 100%;
		}

		.questions {
			flex: 2;
		}

		.sandcastle {
			padding-top: 150px;
			padding-right: 20px;
			max-width: 100%
		}

		.image {
			text-align: right;
			flex: 1;

			figure {
				margin: 0;
				margin-top: 6em;

				figcaption {
					margin-top: 2em;
				}
			}
		}

		@include respond-to('medium') {
			flex-direction: column;
			.image {
				width: 60%;
				margin: auto;

				figure {
					text-align: center;
					margin-top: 0;
				}

				img {
					width: 100%;
				}
			}
		}

		@include respond-to('small') {
			.image {
				width: 80%;
			}

			.sandcastle {
				padding-top: 100px;
			}
		}
	}
</style>
