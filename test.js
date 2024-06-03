const request = require('supertest');
const app = require('./server');  

describe('Blog Application', () => {
  it('should return a 200 status code for the home page', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
