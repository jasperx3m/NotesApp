# NotesApp

Steps to Install
1. Clone this repo
2. Open terminal and run "npm i"
3. Run "npm run start"

API Documentation

Description: Get List of Notes
Endpoint: localhost:3000/notes
Type: Get
Response: {
    "status": "success",
    "code": 200,
    "data": [
        {
            "id": "017f1539-d44f-4121-bba0-d7db90034dce",
            "title": "Note Title 1",
            "body": "This is Note 1 body",
            "createdAt": "2024-01-27T19:46:23.750Z",
            "updatedAt": "2024-01-27T19:46:23.750Z"
        }
    ]
}

Description: Get Notes By id
Endpoint: localhost:3000/notes/:id
Type: Get
Response: {
    "status": "success",
    "code": 200,
    "data": {
        "id": "017f1539-d44f-4121-bba0-d7db90034dce",
        "title": "Note Title 1",
        "body": "This is Note 1 body",
        "createdAt": "2024-01-27T19:46:23.750Z",
        "updatedAt": "2024-01-27T19:46:23.750Z"
    }
}

Description: Add Note
Endpoint: localhost:3000/notes
Type: Post
Body: {
    "title": "Title 2",
    "body": "Body 2"
}
Response: {
    "status": "success",
    "code": 200,
    "data": {
        "id": "e8edc59b-85b5-4b4a-8557-2f9fa9ff070b",
        "title": "Title 2",
        "body": "Body 2",
        "createdAt": "2024-01-27T19:49:36.717Z",
        "updatedAt": "2024-01-27T19:49:36.717Z"
    }
}

Description: Update Note
Endpoint: localhost:3000/notes/:id
Type: Put
Body: {
    "title": "Title 3",
    "body": "Body 3"
}
Response: {
    "status": "success",
    "code": 200,
    "data": {
        "id": "e8edc59b-85b5-4b4a-8557-2f9fa9ff070b",
        "title": "Title 3",
        "body": "Body 3",
        "createdAt": "2024-01-27T19:49:36.717Z",
        "updatedAt": "2024-01-27T19:49:36.717Z"
    }
}

Description: Delete Note
Endpoint: localhost:3000/notes/:id
Type: Delete
Response: {
    "status": "success",
    "code": 200,
    "data": {
        "id": "e8edc59b-85b5-4b4a-8557-2f9fa9ff070b",
        "title": "Title 3",
        "body": "Body 3",
        "createdAt": "2024-01-27T19:49:36.717Z",
        "updatedAt": "2024-01-27T19:49:36.717Z"
    }
}

Here is Sample Error Response for Each Request: 
{
    "status": "failed",
    "code": 400,
    "message": "Body is required",
    "data": null
}