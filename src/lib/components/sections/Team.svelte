<script lang="ts">
	import Header from '../Header.svelte';
	import data from '$lib/data/team.yml';
	import Fa from 'svelte-fa';
	import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

	// File locations of profile pictures
	const modules = new Map<string, any>([
		['Finances', import.meta.glob('$lib/images/people/finances/*.jpg')],
		['Logistics', import.meta.glob('$lib/images/people/logistics/*.jpg')],
		['Marketing', import.meta.glob('$lib/images/people/marketing/*.jpg')],
		['Programs', import.meta.glob('$lib/images/people/programs/*.jpg')]
	]);

	/** Info from data/team.yml.*/
	const teamData: { [key: string]: any } = data;

	/** 
	 * Given a folder location, iterate and retrieve all images.
	 *   - Parse images for src string.
	 *   - Parse filename for organizer's first/last name.
	 *   - Look up organizer in teamData to get any additional data.  
	 */
	async function loadProfilePhotosFromModule(module: any) {
		const iterableModule = Object.entries(module);
		const images = await Promise.all(
			iterableModule.map(async ([filepath, resolver]: any) => {
				const imageData: any = await resolver().then(({ default: imageUrl }: any) => {
					// Parse organizer name from image filename.
					let name: string = filepath.split('\\').pop()!.split('/').pop()!;
					name = name
						.replace(/\.[^/.]+$/, '')
						.replace('_', ' ')
						.replace(/\w\S*/g, function (txt: string) {
							return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
						});
						
					// Join image data with any additional teamData.
					return {
						name: name,
						data: teamData[name] ?? null,
						src: imageUrl
					};
				});
				return imageData;
			})
		);
		return images;
	}
</script>

<!-- accent decorations -->
<img class="left-branch" src="images/divider1.png" alt="Divider1" />
<img class="right-branch" src="images/divider3.png" alt="Divider3" />

<section id="team">
	<Header>Our Team</Header>
	<div class="team-gallery">
		<!-- Iterate through each folder containing images from each team. -->
		{#each [...modules] as [team, module]}
		<!-- <h2>{team}</h2>  -->
			{#await loadProfilePhotosFromModule(module) then images}
				{#each images as { name, data, src }}
					<div class="profile-item">
						<figure>
							<div class="img-wrapper">
								{#if data?.linkedin}
									<span class="link-icon"><Fa icon={faLinkedin}></Fa></span>
									<a href={data.linkedin} target="_blank"><img {src} alt={name} /></a>
								{:else}
									<img {src} alt={name} />
								{/if}
							</div>
							<figcaption>
								<p class="name">{name}</p>
								<p>
									<small><i>({data?.pronouns ?? 'she/her'})</i></small><br />
									<small>{team}</small>
								</p>
							</figcaption>
						</figure>
					</div>
				{/each}
			{/await}
		{/each}
	</div>
</section>

<style lang="scss">
	.left-branch {
		width: 45%;
		margin-bottom: -240px;
		margin-top: 50px;

		@include respond-to('medium') {
			width: 40%;
		}

		@include respond-to('small') {
			width: 35%;
			margin-top: 60px;
		}
	}

	.right-branch {
		width: 50%;
		margin-left: auto;
		margin-bottom: -140px;

		@include respond-to('medium') {
			width: 45%;
			margin-top: 60px;
		}

		@include respond-to('small') {
			width: 40%;
			margin-top: 60px;
		}
	}

	.team-gallery {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1em;
		text-align: center;
		justify-content: center;

		.profile-item {
			figure {
				margin: 0;
			}

			opacity: 0.9;
			object-fit: cover;
			padding: 20px;

			.img-wrapper {
				display: block;
				position: relative;
				transition: all 0.4s ease-out;

				.link-icon {
					position: absolute;
					color: white;
					font-size: 1.5rem;
					bottom: 0;
					right: 0;
					margin-bottom: 0.5em;
					margin-right: 0;
					opacity: 0;
					transition: all 500ms ease;
				}

				img {
					border-radius: 1.25em;
					border: 3px $brown solid;
					width: 200px;
					backface-visibility: hidden;
				}

				&:hover {
					transform: rotate(2deg);

					.link-icon {
						margin-right: 0.5em;
						opacity: 1;
					}
				}
			}

			p {
				margin: 0;
			}

			.name {
				font-family: 'Lilita One', sans-serif;
				font-size: 1.1rem;
				margin: 1em 0 0.25em;
			}
		}
	}
</style>