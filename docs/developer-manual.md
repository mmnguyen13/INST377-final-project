# Developer Manual

## Overview

This document is intended for future developers who may continue development of the Student Club Finder application.

The application uses:
- Node.js
- Express.js
- Supabase
- HTML/CSS/JavaScript
- Fetch API

---

## Installing the Application

### 1. Clone the Repository

```bash
git clone https://github.com/mmnguyen13/INST377-final-project.git
```

### 2. Navigate Into the Project Folder

```bash
cd INST377-final-project
```

### 3. Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory.

Add:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_publishable_key
```

---

## Running the Application

Run the server using:

```bash
node index.js
```

The application will run locally at:

```text
http://localhost:3000
```

---

## API Endpoints

### GET /clubs
Returns all clubs stored in the database.

Example response:

```json
[
  {
    "id": 1,
    "club_name": "Soccer",
    "category": "Intramural"
  }
]
```

---

### POST /clubs
Adds a new club to the database.

Example request body:

```json
{
  "club_name": "Photography Club",
  "category": "Arts"
}
```

---

### GET /activity
Returns a random activity suggestion from the external API.

---

## Testing

Testing was completed manually by:
- Adding clubs
- Refreshing the page
- Verifying data persistence
- Testing navigation between pages
- Confirming API responses

---

## Known Bugs / Limitations

- No authentication system
- No edit or delete functionality
- Limited mobile responsiveness
- Activity API may occasionally fail depending on API availability

---

## Future Improvements

Future improvements may include:
- User login system
- Club search and filtering
- Club event calendar
- Improved mobile responsiveness
- Club descriptions and images
- Edit and delete functionality

---

## Project Structure

```text
/public
    about.html
    clubs.html
    index.html
    script.js
    style.css

/docs
    developer-manual.md

index.js
package.json
README.md
vercel.json
```