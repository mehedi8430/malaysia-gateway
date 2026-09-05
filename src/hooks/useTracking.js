"use client";
import { useContext } from "react";
import { TrackingContext } from "@/contexts/TrackingContext";

export function useTracking() {
  return useContext(TrackingContext);
}
