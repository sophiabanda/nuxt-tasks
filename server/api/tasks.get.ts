export default defineEventHandler(async (event) => {
    return [
        {
            id: 1,
            title: "Learn Nuxt",
            done: false,
        },
        {
            id: 2,
            title: "Learn Vue",
            done: false,
        },
    ];
});
