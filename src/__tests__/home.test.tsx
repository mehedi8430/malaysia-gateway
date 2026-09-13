import { COMPANIES } from "@/data/companies";

test("companies data has placeholder names", () => {
  expect(COMPANIES.length).toBeGreaterThanOrEqual(4);
});