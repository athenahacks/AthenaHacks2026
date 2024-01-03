<script lang="ts">
	import Fa from 'svelte-fa';
	import {
		faFacebookSquare,
		faInstagramSquare,
		faLinkedinIn,
		faSquareXTwitter
	} from '@fortawesome/free-brands-svg-icons';
	import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="socials">
	<a target="_blank"><Fa icon={faFacebookSquare} /></a>
	<a target="_blank"><Fa icon={faEnvelopeSquare} /></a>
	<a target="_blank"><Fa icon={faInstagramSquare} /></a>
	<a target="_blank"><Fa icon={faSquareXTwitter} /></a>
	<a target="_blank"><Fa icon={faLinkedinIn} /></a>
</div>

<style lang="scss">
	.socials {
		display: flex;
		align-items: center;
		column-gap: 0.5em;
		a {
			color: $brown;
			font-size: 2.5rem;
			transition: all 0.4s ease-out;

			&:hover {
				cursor: pointer;
				transform: rotate(5deg);
			}
		}
	}
</style>
