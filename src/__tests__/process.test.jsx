import { PROCESS_STEPS, TRACKING_STAGES } from "@/data/process-steps";

test("process steps and tracking stages are defined", () => {
  expect(PROCESS_STEPS.length).toBe(6);
  expect(TRACKING_STAGES.length).toBe(7);
});
