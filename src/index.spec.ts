import { test, expect } from "vitest";
import { hashplate } from "@/index.ts";

test("hash hello world", () => {
    const input = "Hello World!";

    const hash = hashplate(input);

    expect(hash).toBe("🦐 GP-150-UJ 🪣");
});
