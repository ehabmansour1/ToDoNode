
# Todo API Documentation


A simple Todo API built with Node.js and Express. Deployed on AWS Lightsail at:

**Base URL**  
`http://35.180.4.197:9898/api/v1`

## Deployment
- **Host**: AWS Lightsail
- **IP**: 35.180.4.197
- **Port**: 9898

## Endpoints

### 1. Get All Todos
- **URL**: `/todos`
- **Method**: `GET`

**Response**:
```json
[
  {
    "id": "123",
    "description": "Buy groceries",
    "status": "initialized",
    "created_at": "2023-10-01T12:00:00Z",
    "updated_at": "2023-10-01T12:00:00Z"
  }
]
```

### 2. Create a Todo
- **URL**: `/todos`
- **Method**: `POST`

**Body**:
```json
{
  "description": "Walk the dog"
}
```

**Response**:
```json
{
  "id": "456",
  "description": "Walk the dog",
  "status": "initialized",
  "created_at": "2023-10-01T12:05:00Z",
  "updated_at": "2023-10-01T12:05:00Z"
}
```

### 3. Get a Todo by ID
- **URL**: `/todos/:id`
- **Method**: `GET`

**Response**:
```json
{
  "id": "123",
  "description": "Buy groceries",
  "status": "initialized",
  "created_at": "2023-10-01T12:00:00Z",
  "updated_at": "2023-10-01T12:00:00Z"
}
```

### 4. Update a Todo by ID
- **URL**: `/todos/:id`
- **Method**: `PUT`

**Body**:
```json
{
  "description": "Buy groceries and milk",
  "status": "completed"
}
```

**Response**:
```json
{
  "id": "123",
  "description": "Buy groceries and milk",
  "status": "completed",
  "created_at": "2023-10-01T12:00:00Z",
  "updated_at": "2023-10-01T12:10:00Z"
}
```

### 5. Delete a Todo by ID
- **URL**: `/todos/:id`
- **Method**: `DELETE`

**Response**: `204 No Content`

### 6. Delete All Todos
- **URL**: `/todos`
- **Method**: `DELETE`

**Response**: `204 No Content`

## Error Responses

- **404 Not Found**:
```json
{
  "code": 404,
  "message": "Todo not found"
}
```

- **500 Internal Server Error**:
```json
{
  "code": 500,
  "message": "Internal server error"
}
```

## How to Test
Use tools like Postman or curl to test the API.

### Example Requests

- **Get All Todos**:
  ```http
  GET http://35.180.4.197:9898/api/v1/todos
  ```

- **Create a Todo**:
  ```http
  POST http://35.180.4.197:9898/api/v1/todos
  Body: { "description": "Walk the dog" }
  ```

- **Get a Todo by ID**:
  ```http
  GET http://35.180.4.197:9898/api/v1/todos/123
  ```

- **Update a Todo by ID**:
  ```http
  PUT http://35.180.4.197:9898/api/v1/todos/123
  Body: { "description": "Buy groceries and milk", "status": "completed" }
  ```

- **Delete a Todo by ID**:
  ```http
  DELETE http://35.180.4.197:9898/api/v1/todos/123
  ```

- **Delete All Todos**:
  ```http
  DELETE http://35.180.4.197:9898/api/v1/todos
  ```


