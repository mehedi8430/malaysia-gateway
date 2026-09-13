"use client";
import { useContext } from "react";
import { TrackingContext } from "@/contexts/TrackingContext";
import type { TrackingContextValue } from "@/types";

export function useTracking(): TrackingContextValue {
  return useContext(TrackingContext);
}