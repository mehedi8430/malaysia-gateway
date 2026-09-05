import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useLanguage } from "@/hooks/useLanguage";

function Probe() {
  const { t, toggle } = useLanguage();
  return (
    <div>
      <span data-testid="greeting">{t("greeting")}</span>
      <button data-testid="toggle" onClick={toggle}>toggle</button>
    </div>
  );
}

test("defaults to Bangla and toggles to English", () => {
  render(
    <LanguageProvider>
      <Probe />
    </LanguageProvider>
  );
  expect(screen.getByTestId("greeting")).toHaveTextContent("স্বাগতম");
  fireEvent.click(screen.getByTestId("toggle"));
  expect(screen.getByTestId("greeting")).toHaveTextContent("Welcome");
});
