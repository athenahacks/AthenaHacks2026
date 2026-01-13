<script lang="ts">
	import '$lib/scss/_globals.scss';
	import DesktopNavbar from '$lib/components/NavbarDesktop.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Slideshow from '$lib/components/sections/Slideshow.svelte';
	import Keynote from '$lib/components/sections/Keynote.svelte';
	import Faqs from '$lib/components/sections/Faqs.svelte';
	import Sponsors from '$lib/components/sections/Sponsors.svelte';
	import Team from '$lib/components/sections/Team.svelte';
	import MobileNavbar from '$lib/components/NavbarMobile.svelte';
	import Schedule from '$lib/components/sections/Schedule.svelte';
	import MemoryLane from '$lib/components/sections/MemoryLane.svelte';
</script>

<svelte:head>
	<title>AthenaHacks 2026</title>
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
<!-- <img class="divider1" src="images/assets/wave-border-lightblue.png" alt="wave border" /> -->
<About />
<Slideshow />
<img class="divider2" src="images/divider2.png" alt="Divider2" />
<Faqs />
<!-- <MemoryLane /> -->
<Sponsors />
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
		width: 100%;
		padding-bottom: -10px;

		/* 
		@include respond-to('medium') {
			width: 40%;
		}

		@include respond-to('small') {
			width: 35%;
		}
		*/
	}

	.divider2 {
		width: 40%;
		margin-left: auto;

		@include respond-to('medium') {
			width: 35%;
		}

		@include respond-to('small') {
			width: 30%;
		}
	}

</style>
