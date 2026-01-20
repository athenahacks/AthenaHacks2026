<script lang="ts">
	import Header from '../Header.svelte';
</script>

<section id="sponsors">
	<Header
		>Previous Sponsors
		<!-- <img class="macaron-stack" src="/images/macaron-stack.png" alt="macaron stack" /> -->
	</Header>
	<div class="sponsor-list">
		<!-- <div class="section tier-1">
			<img class="snail" src="/images/snail-pink.png" alt="snail decoration" /> -->
			<!-- <img
				class="sponsor"
				src="/images/sponsors/bloomberg-engineering.png"
				alt="Bloomberg Engineering"
			/> -->
		<!----</div> -->
		<div class="section tier-2">
			<img class="shell" id="shell3" src="/images/assets/shell3.png" alt="shell decoration" />
			<img
				class="sponsor"
				src="/images/sponsors/bloomberg-engineering.png"
				alt="Bloomberg Engineering"
			/>
			<img class="sponsor" src="/images/sponsors/chevron.png" alt="Chevron" />
			<img class="sponsor" src="/images/sponsors/google-cloud.png" alt="Google Cloud" />
			<img class="sponsor" src="/images/sponsors/rewriting-the-code.png" alt="Rewriting The Code" /> 
			<img class="sponsor" src="/images/sponsors/qualcomm.png" alt="qualcomm" />
			
		</div> 
		<!--
		<div class="section tier-3">
			<img class="shell" src="/images/assets/shell2.png" alt="shell decoration" />
 
			<img class="sponsor" src="/images/sponsors/google-cloud.png" alt="Google Cloud" />
			<img class="sponsor" src="/images/sponsors/rewriting-the-code.png" alt="Rewriting The Code" /> 
			<img class="sponsor" src="/images/sponsors/qualcomm.png" alt="qualcomm" />
		</div>
		-->
	</div>
	<div class="thank-you-message">
		<p>
			A huge thank you to all our sponsors and contributors! If you're interested in sponsoring
			AthenaHacks 2026, please contact us at <a href="mailto:athenahacks@gmail.com"
				>athenahacks@gmail.com</a
			>
		</p>
		<img src="/images/assets/turtle.png" alt="turtle" />
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

		.sponsor {
			max-width: 100%;

			img {
				object-fit: contain;
				height: 70%;
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

			.shell {
				max-width: 40%;
				max-height: 70%;
				position: absolute;
				top: -70px;
				right: -70px;
				filter: drop-shadow(-0.05em 0.10em 0 $brown);
			}

			#shell3 {
				transform: scaleX(-1);
				top: -130px;
				right: -120px;

				@include respond-to('medium') {
					top: -100px;
					right: -80px;
				}

				@include respond-to('small') {
					top: -75px;
					right: -70px;
				}
			}
		}

		// .tier-1 {
		// 	width: 15%;
		// 	background-color: $pink;
		// 	.sponsor {
		// 		max-height: 110px;
		// 	}
		// }

		.tier-2 {
			width: 50%;
			background-color: $sand;
			.sponsor {
				max-height: 110px;
			}
		}

		.tier-3 {
			width: 30%;
			background-color: $dark-sand;
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
			width: 170px;
		}
	}
</style>
