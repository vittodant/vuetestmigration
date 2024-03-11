<template>
  <div>
    <h1>{{ message }}</h1>
    <p>{{ computedMessage }}</p>
    <h1>{{ capitalize(message) }}</h1>
    <p>{{ computedMessage }}</p>

  </div>
</template>

<script>
import { myMixin } from '../mixins/mixins.js';
export default {
  mixins: [myMixin],
  data() {
    return {
      message: 'Hello from Vue 2!',
    };
  },
  computed: {
    computedMessage() {
      return this.message.toUpperCase();
    },
  },
  methods: {
    capitalize(value) {
      return value.toUpperCase();
    },
  },
  mounted() {
    console.log('Component mounted');
  },
};
</script>
