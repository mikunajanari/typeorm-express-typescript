import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Post } from 'orm/entities/Post';

export const list = async (req: Request, res: Response) => {
  try {
    const postRepo = getRepository(Post);
    const posts = await postRepo.find({ relations: ['user'] });
    return res.json(posts);
  } catch {
    return res.status(500).json({ message: 'Error fetching posts' });
  }
};