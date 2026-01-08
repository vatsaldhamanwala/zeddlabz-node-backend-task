import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const CommunityRouter = Router();

const users = [
  { id: 1, name: 'Alice', role: 'Admin' },
  { id: 2, name: 'Bob', role: 'Member' },
  { id: 3, name: 'Vatsal', role: 'Member' },
];
console.log('🚀 ~ users:', users);

const communities = [
  {
    id: '101',
    name: 'Developers Hub',
    members: [users[0].id, users[1].id, users[2].id],
  },
];
console.log('🚀 ~ communities:', communities);

// get community by id
CommunityRouter.get('/:id', (req, res) => {
  try {
    const { id } = req.params;

    const community = communities.find((community) => {
      console.log('🚀 ~ community:', community);
      return community.id === id;
    });

    if (!community) {
      return res.status(404).json({ error: 'Community not found' });
    }

    const memberDetails = users.filter((user) =>
      community.members.includes(user.id),
    );
    console.log('🚀 ~ memberDetails:', memberDetails);

    return res.json({
      id: community.id,
      name: community.name,
      members: memberDetails,
      message: 'Community details fetched successfully',
    });
  } catch (error) {
    res.status(500).json({ error: 'fail to fetch community details.' });
  }
});

export default CommunityRouter;
