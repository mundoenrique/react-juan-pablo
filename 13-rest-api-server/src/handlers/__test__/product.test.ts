import request from 'supertest';
import server from '../../server';

describe('POST /api/products', () => {
  test('Should display validation erros', async () => {
    const response = await request(server).post('/api/products').send({});
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('errors');
    expect(response.body.errors).toHaveLength(3);

    expect(response.status).not.toBe(201);
    expect(response.body).not.toHaveProperty('data');
    expect(response.body.errors).not.toHaveLength(0);
  });

  test('Should display validation price is greater than 0', async () => {
    const response = await request(server).post('/api/products').send({
      name: 'Mouse - test',
      price: 0,
    });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('errors');
    expect(response.body.errors).toHaveLength(1);
    expect(response.body.errors[0].msg).toEqual('EL precio debe ser mayor a 0');

    expect(response.status).not.toBe(200);
    expect(response.body).not.toHaveProperty('data');
    expect(response.body.errors).not.toHaveLength(0);
  });

  test('Should display validation price is a number and greater than 0', async () => {
    const response = await request(server).post('/api/products').send({
      name: 'Mouse - test',
      price: 'text',
    });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('errors');
    expect(response.body.errors).toHaveLength(2);

    expect(response.status).not.toBe(200);
    expect(response.body).not.toHaveProperty('data');
    expect(response.body.errors).not.toHaveLength(0);
  });

  it('should create a new product', async () => {
    const response = await request(server).post('/api/products').send({
      name: 'Camara - test',
      price: 150,
    });

    expect(response.status).toEqual(201);
    expect(response.body).toHaveProperty('data');

    expect(response.status).not.toBe(404);
    expect(response.status).not.toBe(200);
    expect(response.body).not.toHaveProperty('errors');
  });
});

describe('GET /api/products', () => {
  test('Should display a JSON response', async () => {
    const response = await request(server).get('/api/products');

    expect(response.status).toEqual(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toHaveProperty('data');

    expect(response.status).not.toEqual(400);
    expect(response.headers['content-type']).not.toMatch(/text/);
    expect(response.body).not.toHaveProperty('errors');
  });
});
