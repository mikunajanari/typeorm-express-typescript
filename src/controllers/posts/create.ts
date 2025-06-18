import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Post } from 'orm/entities/Post';
import { User } from 'orm/entities/users/User';

export const create = async (req: Request, res: Response) => {
  try {
    const userRepo = getRepository(User);
    const postRepo = getRepository(Post);

    const user = await userRepo.findOne({ where: { id: req.body.userId } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const post = postRepo.create({
      title: req.body.title,
      content: req.body.content,
      user,
    });

    await postRepo.save(post);
    return res.json(post);
  } catch {
    return res.status(500).json({ message: 'Error creating post' });
  }
};