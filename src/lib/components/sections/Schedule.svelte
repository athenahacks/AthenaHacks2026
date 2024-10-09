<script lang="ts">
	import Header from '../Header.svelte';
</script>

<section id="schedule">
	<Header>Schedule</Header>
    <p>Take a look at the schedule for the hackathon this weekend! Get excited for the workshops, socials, and food!</p>
	<div class="schedule">
		<div><img src="images/schedule1.png" alt="Saturday schedule" /></div>
		<div><img src="images/schedule2.png" alt="Sunday schedule" /></div>
	</div>
</section>

<style lang="scss">
	.schedule {
        margin-top: 3em;
		display: flex;
		position: relative;
		gap: 4em 3em;

        @include respond-to('small') {
            flex-direction: column;
        }

		div {
			flex: 1;
			img {
				border-radius: 1.2em;
				border: $brown 3px solid;
				width: 100%;
			}
		}
	}
</style>
