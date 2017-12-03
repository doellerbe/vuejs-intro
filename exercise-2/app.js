new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: function () {
            alert("Alert!")
        },
        updateText: function (event) {
            this.value = event.target.value;
        }
    }
});