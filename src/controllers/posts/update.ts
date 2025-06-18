import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Post } from 'orm/entities/Post';

export const update = async (req: Request, res: Response) => {
  try {
    const postRepo = getRepository(Post);
    const post = await postRepo.findOne({ where: { id: +req.params.id } });

    if (!post) return res.status(404).json({ message: 'Post not found' });

    post.title = req.body.title;
    post.content = req.body.content;

    await postRepo.save(post);
    return res.json(post);
  } catch {
    return res.status(500).json({ message: 'Error updating post' });
  }
};