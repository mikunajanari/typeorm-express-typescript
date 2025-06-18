import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Post } from 'orm/entities/Post';

export const destroy = async (req: Request, res: Response) => {
  try {
    const postRepo = getRepository(Post);
    const result = await postRepo.delete(+req.params.id);

    if (result.affected === 0) return res.status(404).json({ message: 'Post not found' });
    return res.sendStatus(204);
  } catch {
    return res.status(500).json({ message: 'Error deleting post' });
  }
};