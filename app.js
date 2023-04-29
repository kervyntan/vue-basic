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
            showVShow : true,
            x : 0,
            y : 0,
            testList : [
                { title : "Vue basics 1", author : "Kervyn"},
                { title : "Vue basics 2", author : "Kervyn"}
            ]
        }
    },

    methods : {
        handleEvent(e, data) {
            // console.log("Handle event");
            console.log(e.target);
            if (data) {
                console.log(data);
            }
        },

        handleMousemove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }

    // can render a manual template with html here but gets messy
    // template : "<h2> This is a test template <h2>"
});

// mount the element with id app in html file
app.mount('#app');