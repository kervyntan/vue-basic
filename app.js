// Test that file works
console.log("Test");

// Lesson 2
const app = Vue.createApp({
    // store data and functions
    data() {
        // data function
        // returns an object
        return {
            title : "Vue Basics",
            part : 2,
            version : 1.0,
            showBtns : true,
            showVShow : true
        }
    },

    methods : {
        resetPart() {
            // can't use part = 2
            // need to use this keyword -> references the component itself
            // part = 2;

            this.part = 2;
        }
    }

    // can render a manual template with html here but gets messy
    // template : "<h2> This is a test template <h2>"
});

// mount the element with id app in html file
app.mount('#app');