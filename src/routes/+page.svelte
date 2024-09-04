<script lang="ts">
	import '$lib/scss/_globals.scss';
	import DesktopNavbar from '$lib/components/DesktopNavbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Slideshow from '$lib/components/sections/Slideshow.svelte';
	import Keynote from '$lib/components/sections/Keynote.svelte';
	import Faqs from '$lib/components/sections/Faqs.svelte';
	import Sponsors from '$lib/components/sections/Sponsors.svelte';
	import Team from '$lib/components/sections/Team.svelte';
	import MobileNavbar from '$lib/components/MobileNavbar.svelte';
	import Schedule from '$lib/components/sections/Schedule.svelte';
	import MemoryLane from '$lib/components/sections/MemoryLane.svelte';
</script>

<svelte:head>
	<title>AthenaHacks 2024</title>
</svelte:head>

<div class="navbars">
	<div class="desktop-navbar">
		<DesktopNavbar />
	</div>
	<div class="mobile-navbar">
		<MobileNavbar />
	</div>
</div>

<HeroSection />
<About />
<img class="divider1" src="images/divider1.png" alt="Divider" />
<Slideshow />
<img class="divider2" src="images/divider2.png" alt="Divider" />
<Schedule />
<div class="divider3-wrap"><img class="divider3" src="images/divider3.png" alt="Divider" /></div>
<Faqs />
<!-- <MemoryLane /> -->
<Sponsors />
<Keynote />
<Team />
<Footer />

<style lang="scss">
	.navbars {
		.mobile-navbar {
			display: none;
		}
		@include respond-to('small') {
			.mobile-navbar {
				display: block;
			}
			.desktop-navbar {
				display: none;
			}
		}
	}
	.divider1 {
		width: 25%;

		@include respond-to('medium') {
			width: 40%;
		}

		@include respond-to('small') {
			width: 50%;
		}
	}

	.divider2 {
		width: 15%;

		@include respond-to('medium') {
			width: 30%;
		}

		@include respond-to('small') {
			width: 40%;
		}
	}

	.divider3-wrap {
		display: flex;
		width: 100%;
		justify-content: flex-end;
		.divider3 {
			right: 0;
			width: 25%;
			@include respond-to('medium') {
				width: 70%;
			}
		}
	}
</style>
