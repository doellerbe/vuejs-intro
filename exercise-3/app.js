new Vue({
    el: '#exercise',
    data: {
        value: 0,
        targetValue: 37 // initial target value
    },
    computed: {
      result: function () {
          return this.value === this.targetValue ? "FINALLY!" : "nope :-(";
      }
    },
    watch: {
        result: function () {
            let vue = this;
            setTimeout(function () {
                vue.value = 0;
            }, 5000);
        }
    }
});