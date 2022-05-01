import VueRouter from "vue-router";
import Example2 from "./components/Example2";
import ExampleComponent from "./components/ExampleComponent";

const routes =
    [
        {
            path: "/",
            component: ExampleComponent,
            name: "home",
        },

        {
            path: "/second",
            component: Example2,
            name: "second",
        },

    ];

// When using createWebHistory(),
//     the URL will look "normal," e.g. https://example.com/user/id. Beautiful!
// Here comes a problem, though:
// Since our app is a single page client side app,
//     without a proper server configuration,
//     the users will get a 404 error if they access https://example.com/user/id directly in their browser. Now that's ugly.
//
//     Not to worry: To fix the issue,
//     all you need to do is add a simple catch-all fallback route to your server.
//     If the URL doesnt match any static assets,
//     it should serve the same index.html page that your app lives in. Beautiful, again!
const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: "history",
});

export default router;
