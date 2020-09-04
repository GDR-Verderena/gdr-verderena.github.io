$(window).on("scroll", function () {
    const scrollHeight = $(document).height() as number;
    const scrollPos = Math.floor($(window).height() + $(window).scrollTop());
    if (scrollHeight === scrollPos) {
        console.log("Scroll MF!");
    }
});
