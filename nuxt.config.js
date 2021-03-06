module.exports = {
    env: {
        baseUrl: ''
    },
    head: {
        title: "",
        meta: [
            {charset: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1"},
            {hid: "description", name: "description", content: ""}
        ],
        link: [
            {rel: "icon", type: "image/x-icon", href: "/favicon.ico"}
        ]
    },

    loading: {color: "#3B8070"},
    css: [
        "~/assets/css/main.css"
    ],
    build: {},
    modules: [
        "~/modules/typescript.js"
    ],
    axios: {}
};