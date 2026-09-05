import React from "react";
import { render, screen } from "@testing-library/react";
import { TrackingProvider } from "@/contexts/TrackingContext";
import { useTracking } from "@/hooks/useTracking";

function Harness() {
  const ctx = useTracking();
  const rec = ctx.lookup("MYVISA-2026-0001");
  return (
    <div>
      <span data-testid="found">{rec ? "yes" : "no"}</span>
      <span data-testid="stage">{rec ? rec.currentStage : ""}</span>
    </div>
  );
}

test("lookup finds the sample record by tracking id", () => {
  let ctx;
  function H() {
    ctx = useTracking();
    return null;
  }
  render(
    <TrackingProvider>
      <H />
    </TrackingProvider>
  );
  const rec = ctx.lookup("MYVISA-2026-0001");
  expect(rec).not.toBeNull();
  expect(rec.currentStage).toBe(3);
});

test("track page harness renders the sample record currentStage", () => {
  render(
    <TrackingProvider>
      <Harness />
    </TrackingProvider>
  );
  expect(screen.getByTestId("found")).toHaveTextContent("yes");
  expect(screen.getByTestId("stage")).toHaveTextContent("3");
});
