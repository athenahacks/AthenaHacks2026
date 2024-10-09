<script lang="ts">
	import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	let activeSection: string = 'home';
	let isOpen: boolean = false;
	let navElement: HTMLElement;
	$: activeSection;
	$: isOpen;

	/** 
	 * Activated when user taps on a navbar item. Toggles the active styling 
	 * on that item and scrolls to the corresponding section. 
	 */
	function toggleActive(event: any) {
		event.preventDefault();
		isOpen = false;

		// Scroll to element
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		activeSection = anchorId;
		window.scrollTo({
			top: anchor!.offsetTop - 180,
			behavior: 'smooth'
		});
	}

	function scrollToTop(event: any) {
		isOpen = false;
		activeSection = 'home';
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	function toggleOpen() {
		isOpen = !isOpen;

		if (isOpen) {
			navElement.style.setProperty('--navWidth', `100%`);
		} else {
			navElement.style.setProperty('--navWidth', `0%`);
		}
	}
</script>

<div class="nav-container">
	<nav class:expanded={isOpen} bind:this={navElement}>
		<button class="logo" on:click={toggleOpen}>
			{#if !isOpen}
				<Fa icon={faBars}></Fa>
			{:else}
				<Fa icon={faClose}></Fa>
			{/if}
		</button>
		<div class="navbar">
			<ul>
				<li class:active={activeSection == 'home'}>
					<a href="#" on:click={scrollToTop}>Home</a>
				</li>
				<li class:active={activeSection == 'about'}>
					<a href="#about" on:click={toggleActive}>About</a>
				</li>
				<!-- <li class:active={activeSection == 'schedule'}>
					<a href="#schedule" on:click={toggleActive}>Schedule</a>
				</li> -->
				<li class:active={activeSection == 'faqs'}>
					<a href="#faqs" on:click={toggleActive}>FAQs</a>
				</li>
				<li class:active={activeSection == 'sponsors'}>
					<a href="#sponsors" on:click={toggleActive}>Sponsors</a>
				</li>
				<!-- <li class:active={activeSection == 'keynote'}>
					<a href="#keynote" on:click={toggleActive}>Keynote</a>
				</li> -->
				<li class:active={activeSection == 'team'}>
					<a href="#team" on:click={toggleActive}>Team</a>
				</li>
			</ul>
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
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 20%);
		pointer-events: none;

		&::before {
			content: '';
			position: fixed;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			backdrop-filter: blur(5px);
			mask: linear-gradient(180deg, black 0%, transparent 12%);
			-webkit-mask: linear-gradient(180deg, black 0%, transparent 12%);
			pointer-events: none;
		}
	}
	nav {
		position: fixed;
		margin: 1em;
		pointer-events: all;
		flex-flow: column;
		filter: drop-shadow(2px 2px 0px $brown);
		transform: rotate(-1deg);
		width: 60vw;
		transition: all 300ms ease;

		&.expanded {
			transform: rotate(0deg);
			transition: all 300ms ease;

			.logo {
				transition: all 300ms ease;
				width: var(--navWidth);
				border-radius: 0.5em 0.5em 0 0.5em;
			}

			.navbar {
				max-height: 800px; /* Set a max-height value enough to show all the content */
				outline: 2px solid $brown;
				transition:
					max-height 300ms cubic-bezier(0.88, 0.01, 0.74, 0.85),
					width 300ms cubic-bezier(0.88, 0.01, 0.74, 0.85),
					outline 0ms linear,
					padding 0ms linear;
				padding: 0.5em 0.75em;
			}
		}

		.logo {
			border: none;
			// background-color: $green;
			background-color: $lime;
			padding: 0.5em 0.75em;
			font-size: 1.2rem;
			border-radius: 0.5em;
			outline: $brown solid 2px;
			width: 0;
			min-width: fit-content;
			transition:
				width 0ms 300ms ease,
				rotation 300ms ease;
			color: $brown;

			&:hover {
				cursor: pointer;
				transform: rotate(-1deg);
			}

			&:active,
			&:focus {
				border: none;
			}
		}

		.navbar {
			max-height: 0;
			margin-top: 2px;
			border-radius: 0.5em 0 0.5em 0.5em;
			outline: 2px solid transparent;
			box-sizing: border-box;
			overflow: hidden;
			transition:
				max-height 300ms ease-in-out,
				width 300ms ease-in-out,
				padding 0ms 300ms linear,
				outline 0ms 300ms linear;
			background-color: $green;
			padding: 0;

			ul {
				display: flex;
				flex-flow: column;
				list-style-type: none;
				margin: 0 auto;
				padding: 0.5em 0;
				text-align: center;
				width: 80%;

				li {
					padding: 0.25em;

					&.active {
						background-color: $lime;
						border: 2px solid $brown;
						border-radius: 0.5em;
					}

					a {
						display: block;
						color: $brown;
						text-decoration: none;
						font-family: 'Lilita One', sans-serif;
						font-weight: 400;

						&:hover {
							transform: rotate(1deg);
						}
					}
				}
			}
		}
	}
</style>
