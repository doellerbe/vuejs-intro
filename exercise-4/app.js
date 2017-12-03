new Vue({
    el: '#exercise',
    data: {
        attachHighlight: true,
        cool: 'cool',
        userClass: '',
        isVisible: true,
        userStyle: {
            width: 100,
            height: 100,
            backgroundColor: 'blue',
            textDecoration: 'underline wavy red' // underline wavy red, underline overline blue
        },
        progressStyle: {
            isStarted: false,
            width: 0
        }
    },
    computed: {
        effectClasses: function () {
            return {
                highlight: this.attachHighlight,
                shrink: !this.attachHighlight
            }
        }
    },
    methods: {
        startEffect: function () {
            var vue = this;
            setInterval(function () {
                vue.attachHighlight = !vue.attachHighlight;
            }, 2000);
        },
        startProgress: function () {
            var vueInstance = this;
            var widthPercentIncrease = 20;
            vueInstance.progressStyle.isStarted = true;
            setInterval(function () {
                vueInstance.progressStyle.width += widthPercentIncrease;
            }, 3000)
        }
    }
});
