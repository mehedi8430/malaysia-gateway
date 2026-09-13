import { JOBS } from "@/data/jobs";
import { COMPANIES } from "@/data/companies";
import bn from "@/locales/bn.json";
import en from "@/locales/en.json";

test("jobs data has twelve entries with all required fields", () => {
  expect(JOBS.length).toBe(12);
  for (const job of JOBS) {
    expect(job).toHaveProperty("id");
    expect(job).toHaveProperty("companyId");
    expect(job).toHaveProperty("titleKey");
    expect(job).toHaveProperty("sectorKey");
    expect(job).toHaveProperty("salaryRange");
    expect(job).toHaveProperty("vacancies");
  }
});

test("every job references an existing company", () => {
  const companyIds = COMPANIES.map((c) => c.id);
  for (const job of JOBS) {
    expect(companyIds).toContain(job.companyId);
  }
});

test("bn and en locales have identical key sets", () => {
  expect(Object.keys(bn).sort()).toEqual(Object.keys(en).sort());
});

test("job title and sector keys exist in both locales", () => {
  const bnKeys = Object.keys(bn);
  const enKeys = Object.keys(en);
  for (const job of JOBS) {
    expect(bnKeys).toContain(job.titleKey);
    expect(enKeys).toContain(job.titleKey);
    expect(bnKeys).toContain(job.sectorKey);
    expect(enKeys).toContain(job.sectorKey);
    expect(bnKeys).toContain("job_desc_" + job.id);
    expect(enKeys).toContain("job_desc_" + job.id);
  }
});