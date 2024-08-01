import request from 'supertest';
import server, { connectDB } from '../server';
import db from '../config/db';

describe('Pirmera prueba', () => {
  it('Debe revisar que 1 + 1 sea 2', () => {
    expect(1 + 1).toBe(2);
  });

  it('Debe revisar que 1 + 1 no sea 3', () => {
    expect(1 + 1).not.toBe(3);
  });
});

describe('GET /api', () => {
  it('Should send back a json response', async () => {
    const res = await request(server).get('/api');

    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body.msg).toBe('Desde API');

    expect(res.status).not.toBe(404);
    expect(res.body.msg).not.toBe('DESDE API');
  });
});

jest.mock('../config/db');

describe('connectDB', () => {
  test('should database connection error', async () => {
    jest.spyOn(db, 'authenticate').mockRejectedValueOnce(new Error('Unable to connect to the database'));

    const consoleSpy = jest.spyOn(console, 'error');

    await connectDB();

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Unable to connect to the database'));
  });
});
