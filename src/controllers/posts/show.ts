import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Post } from 'orm/entities/Post';

export const show = async (req: Request, res: Response) => {
  try {
    const postRepo = getRepository(Post);
    const post = await postRepo.findOne({ where: { id: +req.params.id }, relations: ['user'] });
    if (!post) return res.status(404).json({ message: 'Post not found' });
    return res.json(post);
  } catch {
    return res.status(500).json({ message: 'Error fetching post' });
  }
};