document.addEventListener("DOMContentLoaded", function() {
  let h1Element = document.getElementById("Main");
  let originalText = h1Element.innerHTML;
  let alternateText = "Best Anti-Hero Ever!";

  h1Element.addEventListener("click", function() {
    if (h1Element.innerHTML === originalText) {
      h1Element.innerHTML = alternateText;
    } else {
      h1Element.innerHTML = originalText;
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  let undone = document.getElementById("list2");
  let originalText = "Nothing to see here ";
  let alternateText = "Your lack of faith is disturbing";

  undone.addEventListener("click", function() {
    if (undone.innerHTML === originalText) {
        undone.innerHTML = alternateText;
    } else {
        undone.innerHTML = originalText;
    }
  });
});
