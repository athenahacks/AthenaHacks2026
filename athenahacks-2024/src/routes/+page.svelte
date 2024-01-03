<script lang="ts">
    import "$lib/scss/_globals.scss"
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
	import HeroSection from "$lib/components/sections/HeroSection.svelte";
	import About from "$lib/components/sections/About.svelte";
	import Slideshow from "$lib/components/sections/Slideshow.svelte";
	import Keynote from "$lib/components/sections/Keynote.svelte";
	import Faqs from "$lib/components/sections/Faqs.svelte";
	import Sponsors from "$lib/components/sections/Sponsors.svelte";
	import Team from "$lib/components/sections/Team.svelte";
</script>

<svelte:head>
    <title>AthenaHacks 2024</title>
</svelte:head>

<Navbar />
<HeroSection />
<About />
<Slideshow />
<Faqs />
<Sponsors />
<Keynote />
<Team />
<Footer />
