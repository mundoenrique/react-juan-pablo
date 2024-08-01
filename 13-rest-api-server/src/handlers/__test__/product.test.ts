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
  test('Should display a JSON response with a prodcut list', async () => {
    const response = await request(server).get('/api/products');

    expect(response.status).toEqual(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toHaveProperty('data');

    expect(response.status).not.toEqual(400);
    expect(response.headers['content-type']).not.toMatch(/text/);
    expect(response.body).not.toHaveProperty('errors');
  });
});

describe('GET /api/products/:id', () => {
  it('Should return http code 404', async () => {
    const productId = 2000;
    const response = await request(server).get(`/api/products/${productId}`);

    expect(response.status).toEqual(404);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toEqual('Producto No Encontrado');
  });

  it('Should a valid id in the url', async () => {
    const productId = 'text';
    const response = await request(server).get(`/api/products/${productId}`);

    expect(response.status).toEqual(400);
    expect(response.body).toHaveProperty('errors');
  });

  test('Should display a JSON response with a pruduct', async () => {
    const productId = 1;
    const response = await request(server).get(`/api/products/${productId}`);

    expect(response.status).toEqual(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toHaveProperty('data');

    expect(response.status).not.toEqual(404);
    expect(response.headers['content-type']).not.toMatch(/text/);
    expect(response.body).not.toHaveProperty('error');
  });
});

describe('PUT /api/products/:id', () => {
  test('Should display validation error messages', async () => {
    const response = await request(server).put('/api/products/text').send({});

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('errors');
    expect(response.body.errors).toBeTruthy();
    expect(response.body.errors).toHaveLength(6);

    expect(response.status).not.toBe(200);
    expect(response.body).not.toHaveProperty('data');
    expect(response.body.data).toBeFalsy();
  });

  it('Should display validation error for no fount product', async () => {
    const response = await request(server).put('/api/products/2000').send({
      name: 'Mouse',
      price: 55,
      availability: true,
    });

    expect(response.status).toBe(404);
    expect(response.body.error).toBeTruthy();
    expect(response.body.error).toEqual('Producto No Encontrado');

    expect(response.status).not.toBe(200);
    expect(response.body.data).toBeFalsy();
  });

  it('Should display json response for product update', async () => {
    const response = await request(server).put('/api/products/1').send({
      name: 'Mouse',
      price: 55,
      availability: false,
    });

    expect(response.status).toBe(200);
    expect(response.body.data).toBeTruthy();

    expect(response.status).not.toBe(400);
    expect(response.status).not.toBe(404);
    expect(response.body.error).toBeFalsy();
  });
});

describe('PATCH /api/products/:id', () => {
  test('Should display validation error messages', async () => {
    const response = await request(server).patch('/api/products/text');

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('errors');
    expect(response.body.errors).toBeTruthy();
    expect(response.body.errors).toHaveLength(2);

    expect(response.status).not.toBe(200);
    expect(response.body).not.toHaveProperty('data');
    expect(response.body.data).toBeFalsy();
  });

  it('Should display validation error for no fount product', async () => {
    const response = await request(server).patch('/api/products/2000');

    expect(response.status).toBe(404);
    expect(response.body.error).toBeTruthy();
    expect(response.body.error).toEqual('Producto No Encontrado');

    expect(response.status).not.toBe(200);
    expect(response.body.data).toBeFalsy();
  });

  it('Should display json response for product update', async () => {
    const response = await request(server).patch('/api/products/1');

    expect(response.status).toBe(200);
    expect(response.body.data).toBeTruthy();

    expect(response.status).not.toBe(404);
    expect(response.body.error).toBeFalsy();
  });
});

describe('DELETE /api/products/:id', () => {
  test('Should display validation error messages', async () => {
    const response = await request(server).delete('/api/products/text');

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('errors');
    expect(response.body.errors).toBeTruthy();
    expect(response.body.errors).toHaveLength(2);

    expect(response.status).not.toBe(200);
    expect(response.body).not.toHaveProperty('data');
    expect(response.body.data).toBeFalsy();
  });

  it('Should display validation error for no fount product', async () => {
    const response = await request(server).delete('/api/products/2000');

    expect(response.status).toBe(404);
    expect(response.body.error).toBeTruthy();
    expect(response.body.error).toEqual('Producto No Encontrado');

    expect(response.status).not.toBe(200);
    expect(response.body.data).toBeFalsy();
  });

  it('Should display json response for product delete', async () => {
    const response = await request(server).delete('/api/products/1');

    expect(response.status).toBe(200);
    expect(response.body.data).toBeTruthy();
    expect(response.body.data).toEqual('Producto Eliminado');

    expect(response.status).not.toBe(400);
    expect(response.status).not.toBe(404);
    expect(response.body.error).toBeFalsy();
  });
});
