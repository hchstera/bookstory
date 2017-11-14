<template>
   <div>
      <h4 class="h4-regular-regular">How To Use</h4>
      <pre class="language-html"><code v-html="syntaxHtml"></code></pre>
      <h4 class="h4-regular-regular">Result Html</h4>
      <pre class="language-html"><code v-html="resultHtml"></code></pre>
      <h4 class="h4-regular-regular">Result Demo</h4>
      <div ref="result">
         <slot></slot>
      </div>
   </div>
</template>

<script>
    import Prism from 'prismjs';
	export default {
	    props: {
	        syntax: String,
	    },
		data() {
			return {
                prism: Prism,
                resultHtml: '',
			};
		},
        computed: {
	        syntaxHtml() {
	            return this.highlight(this.syntax);
            },

        },
		methods: {
		    highlight(syntax) {
		        return this.prism.highlight(syntax, this.prism.languages.html);
            }
		},
        mounted() {
	        this.resultHtml = this.highlight(this.$refs.result.innerHTML);
        }
	}
</script>