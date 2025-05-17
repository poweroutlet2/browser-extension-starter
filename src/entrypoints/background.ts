import { createTRPCProxyClient } from "@trpc/client";
import { initTRPC } from "@trpc/server";
import { createChromeHandler } from "trpc-chrome/adapter";
import { z } from "zod";
import type { TRPCError } from "@trpc/server";

const t = initTRPC.create({
	isServer: false,
	allowOutsideOfServer: true,
});

const appRouter = t.router({
	updateCount: t.procedure.input(z.object({ count: z.number() })).query(async ({ input }) => {
		console.log("Message from content script received!");

		return input.count + 1;
	}),
});

export type AppRouter = typeof appRouter;

export default defineBackground(() => {
	console.log("Hello background!", { id: browser.runtime.id });

	createChromeHandler({
		router: appRouter,
		createContext: () => ({}),
		onError: (opts: { error: TRPCError }) => {
			console.error("Error:", opts.error);
		},
	});
});
