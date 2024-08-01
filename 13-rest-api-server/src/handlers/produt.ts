import { check, validationResult } from 'express-validator';
import type { Request, Response } from 'express';
import Product from '../models/Product.model';

export const createProduct = async (req: Request, res: Response) => {
  // const product = new Product(req.body);
  // await product.save();

  // Validación en el handler o controlador
  // await check('name').notEmpty().withMessage('El nombre del producto no debe estar vacio').run(req);
  // await check('price')
  //   .isNumeric()
  //   .withMessage('El precio debe ser un número')
  //   .custom((value) => value > 0)
  //   .withMessage('EL precio debe ser mayor a 0')
  //   .run(req);

  // let errors = validationResult(req);

  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }

  try {
    const product = await Product.create(req.body);

    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};
