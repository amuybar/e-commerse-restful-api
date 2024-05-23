import { Request, Response } from 'express';
import { Product } from '../models/product';
import { v4 as uuidv4 } from 'uuid';

const products: Product[] = [];

export const addProduct = (req: Request, res: Response) => {
    const { name, description, price, quantity } = req.body;
    const newProduct: Product = { id: uuidv4(), name, description, price, quantity };
    products.push(newProduct);
    res.status(201).json(newProduct);
};

export const getProducts = (req: Request, res: Response) => {
    res.json(products);
};

export const getProductById = (req: Request, res: Response) => {
    const { id } = req.params;
    const product = products.find(p => p.id === id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

export const updateProduct = (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description, price, quantity } = req.body;
    const product = products.find(p => p.id === id);
    if (product) {
        product.name = name;
        product.description = description;
        product.price = price;
        product.quantity = quantity;
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

export const deleteProduct = (req: Request, res: Response) => {
    const { id } = req.params;
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex > -1) {
        products.splice(productIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};
