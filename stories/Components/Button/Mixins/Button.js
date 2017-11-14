export default {
    props: {
        category: {
            type: String,
            default: 'pill',
        },
        active: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: 'primary'
        },
        text: {
            type: String,
            default: 'Button'
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: 'nm'
        },
        extend: {
            type: Boolean,
            default: false,
        },
    },
    computed:{
        cateClass() {
            let cate = {};
            cate['button-' + this.category] = true;

            return cate;
        },
        buttonSize() {
            switch (this.size) {
                case 'sm':
                    return {'button-sm': true};
                case 'lg':
                    return {'button-lg': true};
                default:
                    return {};
            }
        },
        buttonType() {
            let type = {};
            type['button-blocking-' + this.type] = true;

            return type;
        },
        styleClass() {
            let styleClass = {};

            Object.assign(styleClass, this.cateClass);
            Object.assign(styleClass, this.buttonSize);
            Object.assign(styleClass, this.buttonType);

            styleClass['active'] = this.active;
            styleClass['disabled'] = this.disabled;
            styleClass['button-extend'] = this.extend;

            return styleClass;
        },
    },
    methods: {
        onClick() {
            this.$emit('click');
        },
    },
}