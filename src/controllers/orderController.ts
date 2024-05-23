import { Request, Response } from 'express';
import { Order } from '../models/order';
import { User } from '../models/user';
import { Product } from '../models/product';
import { v4 as uuidv4 } from 'uuid';



const orders: Order[] = [];
const users: User[] = [];
const products: Product[] = [];

export const createOrder = (req: Request, res: Response) => {
    const { userId, products: orderProducts } = req.body;

    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    let total = 0;
    for (const orderProduct of orderProducts) {
        const product = products.find(p => p.id === orderProduct.productId);
        if (!product) {
            return res.status(404).json({ message: `Product with id ${orderProduct.productId} not found` });
        }
        total += product.price * orderProduct.quantity;
    }

    const newOrder: Order = { id: uuidv4(), userId, products: orderProducts, total };
    orders.push(newOrder);
    return res.status(201).json(newOrder);
};


export const getOrders = (req: Request, res: Response) => {
    res.json(orders);
};

export const getOrderById = (req: Request, res: Response) => {
    const { id } = req.params;
    const order = orders.find(o => o.id === id);
    if (order) {
        res.json(order);
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
};
