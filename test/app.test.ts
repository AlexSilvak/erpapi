import request from 'supertest';
import app from '../src/index'; // Ajuste o caminho conforme necessário

describe('GET /', () => {
  it('deve responder com um status 200 e uma mensagem JSON', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    //expect(response.body).toEqual({ message: 'Hello, world!' });
  });
});
