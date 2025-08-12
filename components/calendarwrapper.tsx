'use client'

import dynamic from "next/dynamic";

const CalendarUi = dynamic(() => import("@/components/calenderui"), { ssr: false });

export default function CalendarWrapper() {
  return <CalendarUi />;
}
