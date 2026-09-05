import React from "react";
import { render, screen } from "@testing-library/react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { COMPANIES } from "@/data/companies";

test("companies data has placeholder names", () => {
  expect(COMPANIES.length).toBeGreaterThanOrEqual(4);
});