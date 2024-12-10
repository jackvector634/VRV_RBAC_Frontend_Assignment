# VRV_RBAC_Frontend_Assignment

## User Management Role-Based Access Control (RBAC) System

This project is a simple User Management System built with React.js. It allows you to manage users and roles in a table format, with the ability to add, edit, and delete users and roles. Each user has a name, email, role, and status (active/inactive). The app stores user data in localStorage, ensuring data persistence even after a page refresh.

## Features

- **Add Users:** You can add new users by filling out a form with their name, email, and role. The email is validated to ensure it’s in the correct format before saving.
- **Edit Users:** Modify user details by clicking the "Edit" button in the user table. The form pre-fills with the user's existing details for easy editing.
- **Delete Users:** Permanently remove users by clicking the "Delete" button in the user table.
- **Responsiveness:** The app is designed to work seamlessly on both desktop and mobile devices. The tables and forms adjust gracefully to different screen sizes.

## Technologies Used

- **React:** For building the user interface.
- **Tailwind CSS:** For styling and responsive design.
- **localStorage:** For data persistence.

### Clone the Repository

To clone this repository, use the following command:

```bash
git clone https://github.com/jackvector634/VRV_RBAC_Frontend_Assignment.git

   
**Install dependencies:**

   - (Assuming you have Node.js and npm installed)
   - Run the below command to install all the required dependencies.
   
    npm install

**Start the application:**

   - Run the below command to start the project locally.
   
    npm start


## Interacting with the Application  

- **Creating Roles:** Begin by creating a role that can later be assigned to any user.  
- **Adding Users:** Click on the "Add User" button to add a new user.  
- **Editing Users:** Click the "Edit" button next to a user's record in the table to update their details, including their role.  
- **Deleting Users:** Click the "Delete" button next to a user to permanently remove them.  
- **Role Management:** When adding or editing a user, assign a specific role to manage their permissions and access.  
- **LocalStorage Utilization:** The application uses the browser's localStorage for data persistence:  
  - Saves changes to users and roles (addition, editing, deletion) directly in the browser.  
  - Ensures user and role data is retained and reloaded even after refreshing the page.  

