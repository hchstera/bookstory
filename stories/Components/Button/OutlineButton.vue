<template>
    <a @click.prevent="onClick" href="#" :class="styleClass" v-text="text"></a>
</template>
<script>
    import Button from './Mixins/Button';

    export default {
        name: 'pill-outline-button',
        mixins: [Button],
        computed: {
            buttonType() {
                let type = {};
                type['button-outline-' + this.type] = true;

                return type;
            },
        },
    };
</script>