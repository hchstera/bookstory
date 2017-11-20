import {storiesOf} from '@storybook/vue';
import { withKnobs, text, boolean, select} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);


import BlockingButton from './BlockingButton.vue';
stories.add('Blocking Style', () => ({
    components: {BlockingButton},
    template: `
    <div>
        <h3 class="h3-regular-regular">Dynamic Componet With Props</h3>
        <syntax-container :syntax="syntax">
            <blocking-button @click="action" :category="category" :active="active" :extend="extend" :type="type" :size="size" :text="text" :disabled="disabled"></blocking-button>
        </syntax-container>
        <hr>
        <h3 class="h3-regular-regular">Static (Default Mode)</h3>
        <syntax-container :syntax="'<blocking-button></blocking-button>'">
            <blocking-button></blocking-button>
        </syntax-container>
    </div>`,
    computed: {
        syntax() {
            return `<blocking-button @click="action" :category="'pill'" :active="${this.active}" :extend="${this.extend}" :type="'${this.type}'" :size="'${this.size}'" :text="'${this.text}'" :disabled="${this.disabled}"></blocking-button>`;
        },
        disabled() {
            return boolean('disabled', false);
        },
        active() {
            return boolean('active', false);
        },
        text() {
            return text('text', 'Button');
        },
        type() {
            let typeOptions = {
                primary: 'primary',
                secondary: 'secondary',
                success: 'success',
                danger: 'danger',
                achromatic: 'achromatic',
            };

            return select('type', typeOptions, 'primary');
        },
        category() {
            let cateOptions = {
                pill:'pill',
                fillet:'fillet',
            };

            return select('category', cateOptions, 'pill');
        },
        size() {
            let sizeOptions = {
                sm: 'sm',
                lg: 'lg',
                nm: 'nm',
            };
            return select('size', sizeOptions, 'nm');
        },
        extend() {
            return boolean('extend', false);
        }
    },
    methods: {
        action: action('click'),
    },
}));


import OutlineButton from './OutlineButton.vue';
stories.add('Outline Style', () => ({
    components: {OutlineButton},
    template: `
    <div>
        <h3 class="h3-regular-regular">Dynamic Componet With Props</h3>
        <syntax-container :syntax="syntax">
            <outline-button @click="action" :category="category" :active="active" :extend="extend" :type="type" :size="size" :text="text" :disabled="disabled"></outline-button>
        </syntax-container>
        <hr>
        <h3 class="h3-regular-regular">Static (Default Mode)</h3>
        <syntax-container :syntax="'<outline-button></outline-button>'">
            <outline-button></outline-button>
        </syntax-container>
    </div>`,
    computed: {
        syntax() {
            return `<outline-button @click="action" :category="'pill'" :active="${this.active}" :type="'${this.type}'" :size="'${this.size}'" :text="'${this.text}'" :disabled="${this.disabled}"></outline-button>`;
        },
        disabled() {
            return boolean('disabled', false);
        },
        active() {
            return boolean('active', false);
        },
        text() {
            return text('text', 'Button');
        },
        type() {
            let typeOptions = {
                primary: 'primary',
                secondary: 'secondary',
                success: 'success',
                danger: 'danger',
                achromatic: 'achromatic',
            };

            return select('type', typeOptions, 'primary');
        },
        category() {
            let cateOptions = {
                pill:'pill',
                fillet:'fillet',
            };

            return select('category', cateOptions, 'pill');
        },
        size() {
            let sizeOptions = {
                sm: 'sm',
                lg: 'lg',
                nm: 'nm',
            };
            return select('size', sizeOptions, 'nm');
        },
        extend() {
            return boolean('extend', false);
        }
    },
    methods: {
        action: action('click'),
    },
}));

import GhostButton from './GhostButton.vue';
stories.add('Ghost Style', () => ({
    components: {GhostButton},
    template: `
    <div>
        <h3 class="h3-regular-regular">Dynamic Componet With Props</h3>
        <syntax-container :syntax="syntax">
            <ghost-button @click="action" :category="category" :active="active" :extend="extend" :type="type" :size="size" :text="text" :disabled="disabled"></ghost-button>
        </syntax-container>
        <hr>
        <h3 class="h3-regular-regular">Static (Default Mode)</h3>
        <syntax-container :syntax="'<ghost-button></ghost-button>'">
            <ghost-button></ghost-button>
        </syntax-container>
    </div>`,
    computed: {
        syntax() {
            return `<ghost-button @click="action" :category="'pill'" :active="${this.active}" :type="'${this.type}'" :size="'${this.size}'" :text="'${this.text}'" :disabled="${this.disabled}"></ghost-button>`;
        },
        disabled() {
            return boolean('disabled', false);
        },
        active() {
            return boolean('active', false);
        },
        text() {
            return text('text', 'Button');
        },
        type() {
            let typeOptions = {
                primary: 'primary',
                secondary: 'secondary',
                success: 'success',
                danger: 'danger',
                white: 'white',
            };

            return select('type', typeOptions, 'primary');
        },
        category() {
            let cateOptions = {
                pill:'pill',
                fillet:'fillet',
            };

            return select('category', cateOptions, 'pill');
        },
        size() {
            let sizeOptions = {
                sm: 'sm',
                lg: 'lg',
                nm: 'nm',
            };
            return select('size', sizeOptions, 'nm');
        },
        extend() {
            return boolean('extend', false);
        }
    },
    methods: {
        action: action('click'),
    },
}));