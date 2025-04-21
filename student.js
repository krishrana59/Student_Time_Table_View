function filterTable() {
    const dayFilter = document.getElementById("day").value.toLowerCase();
    const subjectFilter = document.getElementById("subject").value.toLowerCase();
    const rows = document.querySelectorAll("#timetable tbody tr");
  
    rows.forEach(row => {
      const day = row.getAttribute("data-day").toLowerCase();
      const subjects = row.getAttribute("data-subjects").toLowerCase();
  
      const dayMatch = (dayFilter === "all" || day === dayFilter);
      const subjectMatch = (subjectFilter === "all" || subjects.includes(subjectFilter));
  
      if (dayMatch && subjectMatch) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }