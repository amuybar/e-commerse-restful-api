import { Request, Response } from 'express';
import { User } from '../models/user';
import { v4 as uuidv4 } from 'uuid';

const users: User[] = [];

export const createUser = (req: Request, res: Response) => {
  // dstructure our req body
    const { name, email, password } = req.body;
    
    const newUser: User = { id: uuidv4(), name, email, password };
    users.push(newUser);
    res.status(201).json(newUser);
};

export const getUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const user = users.find(u => u.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

export const updateUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const user = users.find(u => u.id === id);
    if (user) {
        user.name = name;
        user.email = email;
        user.password = password;
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex > -1) {
        users.splice(userIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};
