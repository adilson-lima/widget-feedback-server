import { prisma } from "../../prisma";
import {
  CreateFeedbackData,
  FeedbackRepository,
} from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbackRepository {
  async create({ type, comment, screenshot }: CreateFeedbackData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
