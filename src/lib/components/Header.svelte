<h2><slot /></h2>

<style lang="scss">
    h2 {
        font-family: 'Lilita One', sans-serif;
        color: $text-green;
        font-size: 3.5rem;
        font-weight: 400;
        margin: 0.5em 0;

        @include respond-to('small') {
            font-size: 2.5rem;
        }
    }
</style>
