import { createRequestHandler } from "@react-router/node";

// Built server bundle – populated after `npm run build`
const handler = createRequestHandler(
  // @ts-expect-error – build output is generated at runtime
  () => import("../build/server/index.js"),
  process.env.NODE_ENV
);

export default handler;
