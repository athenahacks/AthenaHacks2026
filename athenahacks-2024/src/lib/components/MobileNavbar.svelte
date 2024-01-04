<div class="nav-container">
	<nav></nav>
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
			pointer-events: none;
		}
	}
	nav {
		position: fixed;
		left: 0;
		right: 0;
		margin: 1em;
		display: flex;
		pointer-events: all;
	}
</style>
