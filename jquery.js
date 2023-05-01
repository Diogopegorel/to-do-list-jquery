$("#input").change(function () {
  var input = $(this).val();
  $("ul").append("<li>" + input + "</li>");
  $(this).val("");
  $("li").click(function () {
    $(this).css({
      "background-color": "lightgreen",
      "text-decoration": "line-through",
    });
  });
});
