<h2>
    <slot />
    <div>
        <a id="mlh-trust-badge" style="display:block;max-width:100px;min-width:60px;position:fixed;right:50px;top:0;width:10%;z-index:10000" href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=yellow" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-yellow.svg" alt="Major League Hacking 2026 Hackathon Season" style="width:100%"></a>
    </div>
</h2>

<style lang="scss">
    h2 {
        font-family: 'Lilita One', sans-serif;
        color: $text-brown;
        font-size: 3.5rem;
        font-weight: 400;
        margin: 0.5em 0;

        @include respond-to('small') {
            font-size: 2.5rem;
        }
    }
</style>
