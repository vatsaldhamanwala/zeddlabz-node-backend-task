import express from 'express';
import UserRouter from './routes/users.js';
import CommunityRouter from './routes/communities.js';

const app = express();
const PORT = 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json('Server is running successfully');
});

app.use('/users', UserRouter);
app.use('/communities', CommunityRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
