<script lang="ts">
	export let question: string;
	export let answer: string;
</script>

<div class="faq-details">
	<details>
		<summary><span role="term">{question}</span></summary>
	</details>
	<div role="definition" class="content">
		<p>{@html answer}</p>
	</div>
</div>

<style lang="scss">
	.faq-details {
		margin-bottom: 1.5em;
		filter: drop-shadow(0.3em 0.3em 0 $brown);
	}

	details {
		summary {
			display: block;
			outline: 2px solid $brown;
			border-radius: 0.75em 0.75em 0em 0.75em;
			background-color: $pink;

			&:hover {
				cursor: pointer;
			}

			&:-webkit-details-marker {
				display: none;
			}

			span {
				color: $brown;
				font-size: 1.1rem;
				position: relative;
				display: flex;
				align-items: center;
				font-family: 'Lilita One', sans-serif;
				padding: 0.75em 1em;

				&:before {
					content: '>';
					font-size: 1.1rem;
					display: flex;
					align-items: center;
					margin-right: 0.75rem;
					transition: rotate 300ms ease-out;
				}
			}
		}

		&[open] {
			+ .content {
				max-height: 800px; /* Set a max-height value enough to show all the content */
				outline: 2px solid $brown;
				transition:
					max-height 500ms cubic-bezier(.88,.01,.74,.85),
					outline 0ms linear;
			}
			span::before {
				rotate: 90deg;
			}
		}
	}

	.content {
		margin-top: 2px;
		background-color: $blue;
		border-radius: 0.75em 0em 0.75em 0.75em;
        outline: 2px solid transparent;

		max-height: 0;
		box-sizing: border-box;
		overflow: hidden;
		transition:
			max-height 500ms ease-in-out,
			outline 0ms 500ms linear;

		p {
			padding: 1em 2em 1.5em;
			margin: 0;
		}
	}
</style>
