const request = require('supertest');
const app = require('./app'); // Assuming your Express app is defined in app.js

describe('App', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('should respond with "Hello, World!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, World!');
  });
});
