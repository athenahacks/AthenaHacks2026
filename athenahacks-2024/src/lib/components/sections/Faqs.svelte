<script lang="ts">
	import Header from '../Header.svelte';
	import * as faqsJson from '$lib/data/faqs.json';
	import FaqDetails from '../FaqDetails.svelte';
</script>

<section id="faqs">
	<div class="content">
		<div class="questions">
			<Header>FAQs</Header>
			{#each faqsJson.data as qa}
				<FaqDetails question={qa.question} answer={qa.answer} />
			{/each}
		</div>
		<div class="image">
			<figure>
				<img src="/images/faq.png" alt="Pastry owl" />
				<figcaption>
					Don’t see your question? Hit us up at <a href="mailto:athenahacks@gmail.com"
						>athenahacks@gmail.com</a
					>!
				</figcaption>
			</figure>
		</div>
	</div>
</section>

<style lang="scss">
	.content {
		display: flex;
		gap: 4em;
		flex-wrap: wrap;

		.questions {
			flex: 2;
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
	}
</style>
