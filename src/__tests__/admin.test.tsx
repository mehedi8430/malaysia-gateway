import { render, act } from "@testing-library/react";
import { TrackingProvider } from "@/contexts/TrackingContext";
import { useTracking } from "@/hooks/useTracking";
import type { TrackingContextValue } from "@/types";

test("updateStage updates the sample record to a new stage", async () => {
  let ctx!: TrackingContextValue;
  function H() {
    ctx = useTracking();
    return null;
  }
  render(
    <TrackingProvider>
      <H />
    </TrackingProvider>
  );
  await act(async () => ctx.updateStage("MYVISA-2026-0001", 5));
  const rec = ctx.lookup("MYVISA-2026-0001");
  expect(rec?.currentStage).toBe(5);
});