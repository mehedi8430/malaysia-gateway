import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { TrackingProvider } from "@/contexts/TrackingContext";
import { useTracking } from "@/hooks/useTracking";
import { TRACKING_STAGES } from "@/data/process-steps";

function Probe() {
  const { lookup, addRecord, updateStage, records } = useTracking();
  return (
    <div>
      <span data-testid="count">{records.length}</span>
      <button data-testid="lookup" onClick={() => {}}>lookup</button>
      <button data-testid="add" onClick={() => addRecord({ name: "Test User", phone: "01700000000", passport: "A1234567", companyId: "c1" })}>add</button>
      <button data-testid="advance" onClick={() => { updateStage(records[records.length - 1].id, 3); }}>advance</button>
    </div>
  );
}

test("samples are seeded and lookup works", () => {
  render(<TrackingProvider><Probe /></TrackingProvider>);
  expect(screen.getByTestId("count")).toHaveTextContent("3");
});

test("addRecord generates MYVISA id and defaults stages", () => {
  render(<TrackingProvider><Probe /></TrackingProvider>);
  fireEvent.click(screen.getByTestId("add"));
  expect(screen.getByTestId("count")).toHaveTextContent("4");
  expect(TRACKING_STAGES.length).toBe(7);
});

test("updateStage marks reached stages done and reflects in lookup", () => {
  const ctx = renderHookWithProvider();
  let rec;
  act(() => { rec = ctx.addRecord({ name: "New Person", phone: "019999", passport: "Z999", companyId: "c1" }); });
  act(() => { ctx.updateStage(rec.id, 3); });
  const after = ctx.lookup(rec.id);
  expect(after.currentStage).toBe(3);
  expect(after.stages[3].status).toBe("in-progress");
  expect(after.stages[0].status).toBe("done");
  expect(after.stages[4].status).toBe("pending");
});

function renderHookWithProvider() {
  let capture;
  function Harness() {
    const ctx = useTracking();
    capture = ctx;
    return null;
  }
  render(<TrackingProvider><Harness /></TrackingProvider>);
  return capture;
}
