# StudioYosepRA-Inbox Documentation

An inbox app to manage contact messages from StudioYosepRA apps.

### Specification: REST

_Note: This documentation may not be accurate and will be updated over time._

---

## **Message**

### Data Structure

```js
{
  name: String,
  email: String,
  body: String,
  status: String, // read, unread
  createdAt: Date,
}
```

Example:

```js
{
  name: 'John Smith',
  email: 'johnsmith@mail.com',
  body: 'Hi there. I would like to discuss about a website for my bookstore business. Can I ask for an opportunity to discuss this further with you? Thank you.',
  status: 'unread',
  createdAt: '2024-11-08T01:39:46.543Z',
}
```

---

### **Get Messages List**

List all messages. Default to get the latest 25 messages.

### Endpoint

```
GET /message
```

### Query Parameters

- `page` _Required_  
  Type: `Number`  
  Default: 1  
  Current page number.
- `sort`  
  Type: `String`  
  Default: -createdAt  
  Sort key based on message data field.
- `limit`  
  Type: `Number`  
  Default: 25  
  Data quantity limit for each request.

### Return

Array of messages based on sort key and data limit parameters.

### Response Example

```js
{
  status: 'ok',
  page: 1,
  length: 25,
  total: 102,
  totalPages: 5,
  data: [
    {
      name: 'John Smith',
      email: 'johnsmith@mail.com',
      body: 'Hi there. I would like to discuss about a website for my bookstore business. Can I ask for an opportunity to discuss this further with you? Thank you.',
      status: 'unread',
      createdAt: '2024-11-08T01:39:46.543Z',
    },
    /// ...
  ]
}
```

---

### **Create New Message**

Create a new user message.

### Endpoint

```
POST /message
```

### Query Parameters

_No query parameters._

### Body

Type: JSON

- `message`
  - `name` **Required**  
    Type: `String`  
    Default: ''  
    Sender's name.
  - `email` **Required**  
    Type: `String`  
    Default: ''  
    Sender's email address.
  - `body` **Required**  
    Type: `String`  
    Default: ''  
    Sender text message.

Example:

```js
{
  message: {
    name: 'John Smith',
    email: 'johnsmith@mail.com',
    body: 'Hi there. I would like to discuss about a website for my bookstore business. Can I ask for an opportunity to discuss this further with you? Thank you.'
  }
},
```

### Return

Message creation status and result.

### Response Example

```js
{
  status: 'ok',
  data: {
    _id: '6576cd624bf996d403eb1c00',
    name: 'John Smith',
    email: 'johnsmith@mail.com',
    body: 'Hi there. I would like to discuss about a website for my bookstore business. Can I ask for an opportunity to discuss this further with you? Thank you.',
    status: 'unread',
    createdAt: '2024-11-08T01:39:46.543Z',
  },
}
```

### Error Responses

**Missing required fields**

Status code: 400

```js
{
  status: 'error',
  errorMessage: 'Missing "x" field.'
}
```

---

### **Get Message Details**

Show message details.

### Endpoint

```
GET /message/:id
```

### Path Parameters

- `id`  
  Type: String  
  Default: ''  
  Message ID.

### Query Parameters

_No parameters._

### Return

Message details based on given ID.

### Response Example

```js
{
  status: 'ok',
  data: {
    _id: '6576cd624bf996d403eb1c00',
    name: 'John Smith',
    email: 'johnsmith@mail.com',
    body: 'Hi there. I would like to discuss about a website for my bookstore business. Can I ask for an opportunity to discuss this further with you? Thank you.',
    status: 'unread',
    createdAt: '2024-11-08T01:39:46.543Z',
  },
}
```

### Error Responses

**No Data Found**

Status code: 404

```js
{
  status: 'error',
  errorMessage: 'No message found with ID "x".'
}
```

---

### **Delete Message**

Delete a message.

### Endpoint

```
DELETE /message/:id
```

### Path Parameters

- `id`  
  Type: String  
  Default: ''  
  Message ID.

### Query Parameters

_No parameters._

### Return

Deleted message ID.

### Response Example

```js
{
  status: 'ok',
  data: {
    _id: '6576cd624bf996d403eb1c00',
  },
}
```

### Error Responses

**No Data Found**

Status code: 404

```js
{
  status: 'error',
  errorMessage: 'No message found with ID "x".'
}
```

### **Change Message Read Status**

Change message read status.

### Endpoint

```
PUT /message/:id/change-read-status
```

### Path Parameters

- `id`  
  Type: String  
  Default: ''  
  Message ID.

### Query Parameters

_No parameters._

### Return

Update status and old message data.

### Response Example

```js
{
  status: 'ok',
  data: {
    _id: '6576cd624bf996d403eb1c00',
    name: 'John Smith',
    email: 'johnsmith@mail.com',
    body: 'Hi there. I would like to discuss about a website for my bookstore business. Can I ask for an opportunity to discuss this further with you? Thank you.',
    status: 'unread',
    createdAt: '2024-11-08T01:39:46.543Z',
  },
}
```

### Error Responses

**No Data Found**

Status code: 404

```js
{
  status: 'error',
  errorMessage: 'No message found with ID "x".'
}
```
