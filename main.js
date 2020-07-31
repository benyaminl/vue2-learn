var main = new Vue({
    el: "#root",
    data : {
        message: 'hello world!'
    },
    methods: {
        hello: function() {
            alert("Hello World!");
        }
    }
});
