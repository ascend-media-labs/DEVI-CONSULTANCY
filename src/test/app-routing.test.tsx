import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

describe("App routing", () => {
  it("matches dedicated pages for each navbar navigation route", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const routes = ["/", "/about", "/services", "/projects", "/achievements", "/testimonials", "/contact"];

    for (const r of routes) {
      const matches = router.matchRoutes(r);
      expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    }
  });
});
