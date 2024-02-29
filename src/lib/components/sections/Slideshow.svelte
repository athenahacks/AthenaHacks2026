<script lang="ts">
	import { fade } from 'svelte/transition';

	let currView = 0;
	const slides = [
		{
			image: '/images/slides/slide0.png',
			description:
				"From hardware to mobile, there are so many fields to explore! We want women to explore their ideas and interests, and are looking forward to some amazing projects! Check out last year's projects <a href='https://athenahacks2023.devpost.com/project-gallery' target='_blank'>here</a>!"
		},
		{
			image: '/images/slides/slide1.png',
			description:
				"We're all about helping each other grow! We hope to foster a supportive environment so that each participant at AthenaHacks feels welcome, comfortable and empowered."
		},
		{
			image: '/images/slides/slide2.png',
			description:
				'Right now, only 20% of hackathon participants are women. We hope to fill that gap by providing a comfortable environment that is focused on learning and exploring!'
		}
	];

	function setView(index: number) {
		currView = index;
	}
</script>

<section>
	<div class="slideshow">
		<div class="sidebar">
			<h2 on:mouseover={() => setView(0)} on:focus={() => setView(0)} class:active={currView == 0}>
				Dream
			</h2>
			<h2 on:mouseover={() => setView(1)} on:focus={() => setView(1)} class:active={currView == 1}>
				Cultivate
			</h2>
			<h2 on:mouseover={() => setView(2)} on:focus={() => setView(2)} class:active={currView == 2}>
				Belong
			</h2>
		</div>
		{#key currView}
			<div class="slide-wrapper" in:fade={{ duration: 400 }}>
				<div class="slide">
					<div class="slide-image">
						<img src={slides[currView].image} alt={`Slide ${currView}`} />
					</div>
					<div class="content">
						<p>{@html slides[currView].description}</p>
					</div>
				</div>
			</div>
		{/key}
	</div>
</section>

<style lang="scss">
	section {
		margin-top: 0;
	}
	.slideshow {
		margin: auto;
		width: 80%;
		display: flex;
		gap: 2em;
		align-items: center;

		.sidebar {
			flex: 0.33;
			display: flex;
			flex-flow: column;
			h2 {
				font-family: 'Lilita One', sans-serif;
				color: $purple;
				margin: 0.25em 0;
				font-size: 3.5rem;
				font-weight: 400;
				transition: all 300ms ease;
				display: flex;
				align-items: center;

				&::before {
					content: '🍰';
					color: transparent;
					margin-right: 0.5em;
					font-size: 2.2rem;
				}

				&:hover {
					cursor: pointer;
				}

				&.active {
					color: $text-pink;

					&::before {
						content: '🍰';
						color: black;
						margin-right: 0.5em;
						font-size: 2.2rem;
					}
				}
			}
		}

		.slide-wrapper {
			flex: 0.66;
			.slide {
				display: flex;
				gap: 2em;
				flex-wrap: wrap;
				align-items: center;

				.slide-image {
					flex: 1;
					display: block;
					height: 300px;
					width: 300px;
					text-align: center;

					img {
						object-fit: contain;
						border-radius: 1.5em;
					}
				}
				.content {
					flex: 1;
				}
			}
		}

		@include respond-to('large') {
			width: 100%;
			.slide {
				flex-flow: column;
			}
		}

		@include respond-to('medium') {
			flex-flow: column;
			.sidebar {
				flex-flow: row;
				gap: 2em;
				h2 {
					flex-flow: column;
				}
			}
		}

		@include respond-to('small') {
			width: 80%;
			.sidebar {
				flex: 1;
				flex-flow: column;
				gap: 0;
				h2 {
					font-size: 3rem;
					margin: 0;
					flex-flow: row;
				}
			}
			.slide-wrapper {
				flex: 1;
				.slide {
					gap: 2em;
					flex-direction: column-reverse;
					.slide-image {
						img {
							height: 200px;
						}
					}
				}
			}
		}
	}
</style>
