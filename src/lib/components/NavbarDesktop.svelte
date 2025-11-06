<script lang="ts">
	import { onMount } from 'svelte';

	let activeSection: string = '';
	let navList: HTMLUListElement;
	$: activeSection;

	/** 
	 * Activated when user taps on a navbar item. Toggles the active styling 
	 * on that item and scrolls to the corresponding section. 
	 */
	function toggleActive(event: any) {
		event.preventDefault();

		// Scroll to element
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		activeSection = anchorId;
		window.scrollTo({
			top: anchor!.offsetTop - 180,
			behavior: 'smooth'
		});

		// Animate active indicator
		updateIndicator(event.target.parentElement);
	}

	function updateIndicator(listElement: any) {
		navList.style.setProperty('--transformDistance', `calc(${listElement.offsetLeft}px - 1.5em)`);
		navList.style.setProperty('--activeWidth', `${listElement.offsetWidth}px`);
	}

	function scrollToTop(event: any) {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	let aboutListElement: HTMLElement;
	function resetNavbar() {
		activeSection = 'about';
		updateIndicator(aboutListElement);
	}

	onMount(async () => {
		const listElement: any = navList.firstChild;
		navList.style.setProperty('--transformDistance', `calc(${listElement.offsetLeft}px - 1.5em)`);
		navList.style.setProperty('--activeWidth', `${listElement.offsetWidth}px`);
	});
</script>

<svelte:window on:resize={resetNavbar} />

<!-- Container allows background gradient and blur -->
<div class="nav-container">
	<nav>
		<!-- Left hand side logo -->
		<button class="home-square" on:click={scrollToTop}>
			<img src="/images/nav-logo.png" alt="Home" />
		</button>

		<!-- Navigation anchor links -->
		<div class="navbar-wrapper">
			<div class="navbar">
				<ul bind:this={navList}>
					<li class:active={activeSection == 'about'} bind:this={aboutListElement}>
						<a href="#about" on:click={toggleActive}>About</a>
					</li>
					<li class:active={activeSection == 'schedule'}>
						<a href="#schedule" on:click={toggleActive}>Schedule</a>
					</li>
					<li class:active={activeSection == 'faqs'}>
						<a href="#faqs" on:click={toggleActive}>FAQs</a>
					</li>
					<li class:active={activeSection == 'sponsors'}>
						<a href="#sponsors" on:click={toggleActive}>Sponsors</a>
					</li>
					<li class:active={activeSection == 'keynote'}>
						<a href="#keynote" on:click={toggleActive}>Keynote</a>
					</li>
					<li class:active={activeSection == 'team'}>
						<a href="#team" on:click={toggleActive}>Team</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</div>

<style lang="scss">
	.nav-container {
		z-index: 100;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgb(255, 255, 255);
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 30%);
		pointer-events: none;

		&::before {
			content: '';
			position: fixed;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			backdrop-filter: blur(5px);
			mask: linear-gradient(180deg, black 0%, transparent 20%);
			-webkit-mask: linear-gradient(180deg, black 0%, transparent 20%);
			pointer-events: none;
		}
	}
	nav {
		z-index: 150;
		position: fixed;
		left: 0;
		right: 0;
		margin: 1em;
		display: flex;
		pointer-events: all;

		.home-square {
			z-index: 190;
			background: transparent;
			border: none;
			margin: 1em;
			position: relative;
			transition: all 0.4s ease-out;

			@include respond-to('medium') {
				width: 100px;
			}

			&:hover {
				cursor: pointer;
				transform: rotate(-2deg);
			}

			img {
				pointer-events: none;
				width: 70%;
				filter: drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.5));
			}
		}

		.navbar-wrapper {
			flex: 1;
			display: flex;
			height: fit-content;
			justify-content: center;
			margin-top: 1em;
			position: absolute;
			margin-left: auto;
			margin-right: auto;
			overflow: visible;
			left: 0;
			right: 0;
			
			.navbar {
				background-color: $lime;
				box-sizing: border-box;
				border: 3px solid $brown;
				border-radius: 1.5em;
				filter: drop-shadow(0.4em 0.4em 0 $brown);
				transform: rotate(-0.5deg);
				overflow: hidden;

				ul {
					position: relative;
					display: flex;
					list-style: none;
					margin: 0;
					padding: 0 1.5em;
					align-items: center;

					&::before {
						z-index: -1;
						content: '';
						position: absolute;
						height: 100%;
						background-color: $pink;
						outline: 3px solid $brown;
						border-radius: 1em;
						width: var(--activeWidth);
						transform: translateX(var(--transformDistance));
						transition: all 0.4s cubic-bezier(0.91, 0, 0.75, 0.77);
					}

					li {
						font-family: 'Lilita One', sans-serif;
						font-size: 1.2rem;
						padding: 1em 1em;

						a {
							display: block;
							font-weight: 400;
							color: $brown;
							text-decoration: none;
							transition: all 0.4s ease-out;

							&:hover {
								transform: rotate(-2deg);
							}
						}
					}

					@include respond-to('medium') {
						padding: 0 1em;
						li {
							font-size: 1rem;
							padding: 1em 0.6em;
						}

						&::before {
							z-index: -1;
							content: '';
							position: absolute;
							height: 100%;
							background-color: $pink;
							outline: 3px solid $brown;
							border-radius: 1em;
							width: var(--activeWidth);
							transform: translateX(calc(var(--transformDistance) + 0.5em));
							transition: all 0.4s cubic-bezier(0.91, 0, 0.75, 0.77);
						}
					}
				}
			}
		}
	}
</style>
