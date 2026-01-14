<script lang="ts">
	const slides = [
		{
			title: "Dream",
			image: '/images/owls/CultivateOwl.png',
			description:
				"From hardware to mobile, there are so many fields to explore! We want women to explore their ideas and interests, and are looking forward to some amazing projects! Check out last year's projects <a href='https://athenahacks2025.devpost.com/project-gallery' target='_blank'>here</a>!"
		},
		{
			title: "Cultivate",
			image: '/images/owls/CultivateOwl.png',
			description:
				"We're all about helping each other grow! We hope to foster a supportive environment so that each participant at AthenaHacks feels welcome, comfortable and empowered."
		},
		{
			title: "Belong",
			image: '/images/owls/CultivateOwl.png',
			description:
				'Right now, only 20% of hackathon participants are women. We hope to fill that gap by providing a comfortable environment that is focused on learning and exploring!'
		}
	];

	let selected: number | null = null;
	let cardFlipped = false;

	const toggleBackFront = (id : number) => {
		if (selected === id) {
			selected = null;
			cardFlipped = !cardFlipped;
		} else {
			cardFlipped = !cardFlipped;
			selected = id;
		}
	}
</script>

<section>
	<div class="row">
		{#each slides as {title, image, description}, i}
			<button class="card" on:click={() => toggleBackFront(i)}>
				<div class="card-inner" class:flipped={selected === i}>
					<div class="card-front">
						<img src={image} alt={title}>
					</div>

					<div class="card-back">
						<h3>{title}</h3>
						<p>{@html description}</p>
					</div>
				</div>
			</button>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		margin-top: 0;
	}
	
	.row {
		display: flex;
		flex-wrap: nowrap;
		justify-content: center;
		gap: 2rem;
	}

	.card {
		all: unset;
		width: 25%;
		height: 320px;
		perspective: 1000px; 
		cursor: pointer;
	}

	.card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		transition: transform 0.6s ease;
		transform-style: preserve-3d;
	}

	.card-inner.flipped {
		transform: rotateY(180deg);
	}

	.card-front,
	.card-back {
		position: absolute;
		inset: 0;
		backface-visibility: hidden;
		border-radius: 0.9em;
		background-color: $red;
		padding: 2rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.card-back {
		transform: rotateY(180deg);
		text-align: center;
	}

	.card-front img {
		height: 10em;
	}

	h3 {
		color: white;
	}

	p {
		color: white;
		font-size: small;
	}

	@include respond-to('medium') {
		.card-front img {
			height: 8em;
		}

		.card {
			width: 40%;       
			max-width: 22rem;  
		}
	}

	@include respond-to('small') {
		.row {
			flex-wrap: wrap;
		}

		.card {
			width: 100%;       
			max-width: 15rem;  
		}

		.card-front img {
			height: 8em;
		}

	}
	
</style>
