import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  //   { create: async () => {} },
  //   { sendMail: async () => {} }
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "data:image/png;base64,345;3l5jk345;k354",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();

    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "example comment",
        screenshot: "data:image/png;base64,345;3l5jk345;k354",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUB",
        comment: "",
        screenshot: "data:image/png;base64,345;3l5jk345;k354",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback with invalid image", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUB",
        comment: "this is comment",
        screenshot: "invalid_image.jpg",
      })
    ).rejects.toThrow();
  });
});

test("sum 2 + 2", () => {
  expect(2 + 2).toBe(4);
});
