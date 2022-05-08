export interface CreateFeedbackData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbackRepository {
  create: (data: CreateFeedbackData) => Promise<void>;
}
