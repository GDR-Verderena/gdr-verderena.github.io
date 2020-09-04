$(window).on("scroll", function () {
    const scrollHeight = $(document).height() ;
    const scrollPos = Math.floor($(window).height() + $(window).scrollTop());
    if (scrollHeight === scrollPos) {
        console.log("Scroll MF!");
    }
});
