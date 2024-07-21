// JavaScript for background color change on click
const sections = document.querySelectorAll("section");
const colors = ["#FF6B6B", "#6BFF6B", "#6B6BFF", "#FFD76B", "#D76BFF"]; // Array of predefined colors

sections.forEach((section, index) => {
  section.addEventListener("click", () => {
    const colorIndex = index % colors.length;
    section.style.backgroundColor = colors[colorIndex];
  });
});
