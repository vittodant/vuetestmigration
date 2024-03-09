export const myMixin = {
    created() {
      console.log('Mixin created');
    },
    methods: {
      greet() {
        console.log('Mixin says hello!');
      },
    },
  };
  