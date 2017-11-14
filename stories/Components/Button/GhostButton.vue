<template>
    <a @click.prevent="onClick" href="#" :class="styleClass" v-text="text"></a>
</template>
<script>
    import Button from './Mixins/Button';

    export default {
        name: 'pill-ghots-button',
        mixins: [Button],
        computed: {
            buttonType() {
                let type = {};
                type['button-ghost-' + this.type] = true;

                return type;
            },
        },
    };
</script>