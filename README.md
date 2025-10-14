# CV Creation Server

CV Creation Server is a backend service for generating CVs in DOCX format using Node.js, Express, and the OpenAI API. It handles requests to generate resumes, validates input data, and returns the completed DOCX file.

## Technologies

- Node.js
- Express
- CORS
- dotenv
- Joi for validation
- OpenAI API
- docx for DOCX file generation
- Nodemon for development

## Installation

1. Clone the repository:

```
git clone https://github.com/yelyzaveta-heorhiieva/cv-creation-server.git
cd cv-creation-server
```
2. Install dependencies:

```
npm install
```

3. Create a .env file in the project root and add environment variables, for example:

```
PORT=3000
OPENAI_API_KEY=your_openai_api_key
```
## Running the server

```
For development with automatic restart:
npm run dev

For production:
npm start
```

## API
### Generate CV
 - Endpoint: /generate
 - Method: POST
 - Content-Type: application/json
 - Body Example:
```
json
{
  "name": "John Doe",
  "city": "New York",
  "position": "Frontend Developer",
  "email": "john.doe@example.com",
  "tel": "+1234567890",
  "education": "Bachelor of Computer Science",
  "experience": "Freelance projects",
  "skills": "HTML, CSS, Javascript, React.js, Node.js, Angular",
  "goals": "Contributing to a dynamic development team"
}
```
 - Response: DOCX file containing the generated CV.

