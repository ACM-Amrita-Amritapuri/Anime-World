const searchInput = document.getElementById("searchInput");
const divElements = document.querySelectorAll(".card");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();

  divElements.forEach(function (div) {
    // get the text inside a h3 tag
    const tags = div.querySelector("h3").textContent.toLowerCase();
    if (tags.includes(searchTerm) || searchTerm === "") {
      div.style.display = "block"; // Show the div
    } else {
      div.style.display = "none"; // Hide the div
    }
  });
});
