import { Router } from 'express';

const UserRouter = Router();

const users = [
  { id: 1, name: 'Alice', role: 'Admin' },
  { id: 2, name: 'Bob', role: 'Member' },
];

// Get all users
UserRouter.get('/', (req, res) => {
  return res.json(users, { message: 'Users fetched successfully' });
});

// Create a new user
UserRouter.post('/', (req, res) => {
  try {
    const { name, role } = req.body;

    if (!name || !role) {
      return res.status(400).json({ error: 'Name and Role are required' });
    }

    //already exists
    const existingUser = users.find((user) => user.id === req.body.id);

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const newUser = { id: users.length + 1, name, role };
    users.push(newUser);
    return res
      .status(201)
      .json({ newUser, message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Fail to create user' });
  }
});

export default UserRouter;
