import type { Request, Response } from 'express';
import Product from '../models/Product.model';

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.findAll({
    order: [['id', 'ASC']],
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  });

  res.json({ data: products });
};

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findByPk(id, {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  });

  if (!product) {
    return res.status(404).json({
      error: 'Producto No Encontrado',
    });
  }

  res.json({ data: product });
};

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

  const product = await Product.create(req.body);

  res.status(201).json({ data: product });
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findByPk(id, {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  });

  if (!product) {
    return res.status(404).json({
      error: 'Producto No Encontrado',
    });
  }

  await product.update(req.body);
  // await product.save();

  res.json({ data: product });
};

export const updateAvailability = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findByPk(id, {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  });

  if (!product) {
    return res.status(404).json({
      error: 'Producto No Encontrado',
    });
  }

  product.availability = !product.dataValues.availability;
  await product.save();

  res.json({ data: product });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({
      error: 'Producto No Encontrado',
    });
  }

  await product.destroy();

  res.json({ data: 'Producto Eliminado' });
};
