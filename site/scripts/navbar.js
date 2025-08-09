const navHTML = `
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="links.html">Links</a></li>
      <li><a href="glossary.html">Glossary</a></li>
      <li><a href="survey.html">Survey</a></li>
    </ul>
  </nav>
`;

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  if (header) header.innerHTML = navHTML;
});
