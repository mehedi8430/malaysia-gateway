import { DOCUMENTS } from "@/data/documents";
import { TESTIMONIALS } from "@/data/testimonials";
import { FAQ_ITEMS } from "@/data/faq";

test("mock content data is populated", () => {
  expect(DOCUMENTS.length).toBe(8);
  expect(TESTIMONIALS.length).toBeGreaterThanOrEqual(3);
  expect(FAQ_ITEMS.length).toBeGreaterThanOrEqual(5);
});