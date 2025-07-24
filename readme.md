📝 To-Do List Application
Simple yet powerful task management application

A lightweight and responsive to-do list application built with Node.js, Express, and EJS templating engine. Perfect for managing your daily tasks with an intuitive interface.

✨ Features
✅ Add new tasks with single-click
🗑️ Delete individual tasks
🔄 Reset all tasks with one button
☑️ Mark tasks as completed 
📅 Current date display
🎨 Beautiful UI with Bootstrap 5
📱 Fully responsive design

🚀 Technologies Used
Backend: Express.js
Frontend: EJS, Bootstrap 5
Date Handling: Day.js
Styling: Custom CSS

⚙️ Project Structure
├── public/
│   ├── stylesheet.css      # Custom styles
│   └── bg.jpg              # Background image
├── views/
│   ├── index.ejs           # Main view
│   ├── header.ejs          # Header template
│   └── footer.ejs          # Footer template
├── index.js                # Main application
├── package.json            # Dependencies
└── README.md               # This documentation

🛠️ Installation & Setup
1. Clone the repository:
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

2. Install dependencies:
   npm install

3. Start the application:
   node index.js

4. Open your browser and visit:
   http://localhost:3000

🖥️ Usage Guide
Adding a Task
Type your task in the input field

Press the "+" button or hit Enter

Completing a Task
Click the checkbox next to a task to mark it as completed

Deleting a Task
Click the trash can icon next to the task you want to delete

Resetting All Tasks
Click the "Reset" button at the bottom of the task list


Key Features Implementation
- Date Display: Using Day.js for formatted date
- Task Management: Array manipulation for CRUD operations
- Responsive Design: Bootstrap grid system and Flexbox
- Visual Feedback: CSS styling for completed tasks