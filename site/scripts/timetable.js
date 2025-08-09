const courses = {
  Fall: [
    ["CSD105", "Python", 3],
    ["CMM115", "Communications I", 3],
    ["CSD120", "Intro to Web Development", 4],
    ["CSO104", "Intro to OS and LAN", 4],
    ["MTH122", "Computer Mathematics", 3],
    ["TNY130", "Technology in Society", 2]
  ],
  Winter: [
    ["CSA103", "Business Applications I", 4],
    ["CSD102", "Programming Using C++", 5],
    ["CSD212", "Web Scripting Languages", 4],
    ["CSO102", "Introduction to Linux", 4],
    ["CST104", "PC Hardware and Networking", 5]
  ]
};

function buildTable() {
  let totalHours = 0;
  let table = `<caption>Table 1. Current Courses</caption>
  <table>
    <thead>
      <tr>
        <th rowspan="2">Term</th>
        <th colspan="2">Course</th>
        <th rowspan="2">Hrs/Week</th>
      </tr>
      <tr>
        <th>Code</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>`;

  for (const [term, list] of Object.entries(courses)) {
    list.forEach((course, index) => {
      const [code, name, hrs] = course;
      totalHours += hrs;
      table += `
        <tr>
          ${index === 0 ? `<td rowspan="${list.length}">${term}</td>` : ""}
          <td>${code}</td>
          <td>${name}</td>
          <td>${hrs}</td>
        </tr>`;
    });
  }

  table += `
    <tr class="bold">
      <td colspan="3">Total</td>
      <td>${totalHours}</td>
    </tr>
    </tbody>
  </table>`;

  return table;
}

document.addEventListener("DOMContentLoaded", () => {
  const tableContainer = document.getElementById("making-a-table");
  if (tableContainer) tableContainer.innerHTML = buildTable();
});
