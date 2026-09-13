import { render, act } from "@testing-library/react";
import { TrackingProvider } from "@/contexts/TrackingContext";
import { useTracking } from "@/hooks/useTracking";
import type { TrackingContextValue, TrackingRecord } from "@/types";

function getCtx(): TrackingContextValue {
  let ctx!: TrackingContextValue;
  function Harness() {
    ctx = useTracking();
    return null;
  }
  render(
    <TrackingProvider>
      <Harness />
    </TrackingProvider>
  );
  return ctx;
}

test("addRecord returns an id matching the MYVISA-YYYY-XXXX format", async () => {
  const ctx = getCtx();
  let rec!: TrackingRecord;
  await act(async () => {
    rec = ctx.addRecord({ name: "A", phone: "1", passport: "P", companyId: "c1" });
  });
  expect(rec.id).toMatch(/^MYVISA-2026-\d{4}$/);
  expect(ctx.lookup(rec.id)).not.toBeNull();
});