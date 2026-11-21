import { describe, expect, it } from "vitest";

import { shop } from "@/data/shop";

// Facts confirmed by the owner on 2026-11-20: WhatsApp = call number,
// Friday hours same as every day, free delivery all over Soan Garden.
describe("Shop facts confirmed by the owner", () => {
  it("uses the call number for WhatsApp", () => {
    expect(shop.whatsapp).toBe("+92 306 5833000");
    expect(shop.whatsapp).toBe(shop.phone);
    expect(shop.whatsappConfirmed).toBe(true);
  });

  it("keeps Friday hours the same as every day", () => {
    expect(shop.hours.fridayOpen).toBe(shop.hours.daily);
  });

  it("offers free delivery all over Soan Garden", () => {
    expect(shop.delivery.toLowerCase()).toContain("free");
    expect(shop.delivery.toLowerCase()).toContain("soan garden");
  });
});

it("custom cake and bulk mithai orders need 2 days lead time", () => {
  expect(shop.orderLeadTimeDays).toBe(2);
});
