// Test that file works
console.log("Test");

// Lesson 2
const app = Vue.createApp({
    // can render a manual template with html here
    template : "<h2> This is a test template <h2>"
});

// mount the element with id app in html file
app.mount('#app');