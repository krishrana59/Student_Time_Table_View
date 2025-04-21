# Student_Time_Table_View
This is a simple web-based application that allows students to view and filter their weekly timetable based on selected day and subject. It's built using HTML, CSS, and JavaScript.

🧩 Features
🗓️ View a complete student timetable

🔍 Filter by day (e.g., Monday, Tuesday, etc.)

📘 Filter by subject (e.g., Math, Science, etc.)

🎨 Responsive and styled interface

🛠️ Technologies Used
HTML – Structure of the webpage

CSS (student.css) – Styling for layout and colors

JavaScript (student.js) – Logic for filtering table rows based on selected options

📁 Project Structure
graphql
Copy
Edit
student-timetable-view/
├── index.html         # Main HTML file 
├── student.css        # Styling for timetable and layout
├── student.js         # JavaScript for filtering logic
└── README.md          # Project documentation
🔧 How It Works
The timetable is presented in a table format.

Users can choose a day and/or a subject from dropdown filters.

When the selection changes, JavaScript function filterTable() is triggered:

It hides rows that do not match the selected filters.

Rows are matched based on custom data-day and data-subjects attributes.

✅ How to Use
Clone or download the repository.

Make sure you have an index.html file that includes:

A timetable table with rows containing data-day and data-subjects attributes.

Dropdowns for day and subject filters.

Linked references to student.css and student.js.

Open index.html in your browser.

Use the filters to view relevant timetable entries.

📸 Screenshot (Optional)
Add a screenshot of the working timetable here if available.

📜 License
This project is open-source and free to use for educational purposes.
