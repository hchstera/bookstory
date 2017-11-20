import {storiesOf} from '@storybook/vue';
import { withKnobs, text, boolean, select, number} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
const stories = storiesOf('Paginations', module);
stories.addDecorator(withKnobs);


import Pagination from './Pagination.vue';
stories.add('Blocking Style', () => ({
    components: {Pagination},
    template: `
    <div>
        <h3 class="h3-regular-regular">Dynamic Componet With Props</h3>
        <syntax-container :syntax="syntax">
            <pagination @change-page="action" :counts="counts"></pagination>
        </syntax-container>
    </div>`,
    computed: {
        syntax() {
            return `<pagination @change-page="action" :counts="${this.counts}"></pagination>`;
        },
        counts() {
            let options = {
                range: true,
                min: 60,
                max: 90,
                step: 1,
            };

            return number('counts', 30, options);
        },
    },
    methods: {
        action: action('change-page'),
    },
}));