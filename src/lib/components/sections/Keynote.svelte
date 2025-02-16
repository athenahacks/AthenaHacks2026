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
			<h3>Katya Sutil</h3>
			<h4>Sr. Manager of Falcon 9 Subassemblies Production at SpaceX</h4>
			<p>
				Katya is the Sr. Manager of Falcon 9 Subassemblies Production at SpaceX, 
				where she leads the department responsible for building and testing propulsion 
				systems, structural components, and mechanisms for the F9 rocket. With a background
				 in Industrial Engineering, Katya has also led the build out of several new product 
				 production areas across SpaceX. Katya holds a Bachelors and Masters degree 
				 from USC Viterbi, and is excited to share insights on building a career in the emerging
				  technologies industry.
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
				color: $brown;
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
