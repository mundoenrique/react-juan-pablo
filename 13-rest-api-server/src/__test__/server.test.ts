import { connectDB } from '../server';
import db from '../config/db';

describe('Pirmera prueba', () => {
  it('Debe revisar que 1 + 1 sea 2', () => {
    expect(1 + 1).toBe(2);
  });

  it('Debe revisar que 1 + 1 no sea 3', () => {
    expect(1 + 1).not.toBe(3);
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
