    $(document).ready(function () {
        $("input[type='checkbox']").click(function () {
            if ($(this).is(":checked")) {
                $("body").addClass("dark");
                $(".container").addClass("dark");
                $("a").addClass("dark");
                $(".checkbox-label").addClass("dark");
                $(".ball").addClass("dark")
                $(":root").addClass("dark")
            } else {
                $("body").removeClass("dark");
                $(".container").removeClass("dark");
                $("a").removeClass("dark");
                $(".checkbox-label").removeClass("dark");
                $(".ball").removeClass("dark")
                $(":root").removeClass("dark")
            }
        });
    });

