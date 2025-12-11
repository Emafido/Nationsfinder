import type { Config } from "@react-router/dev/config";

export default {
  // Server-side render by default
  ssr: true,
  // For Vercel deployment
  serverBuildPath: "build/server/index.js",
} satisfies Config;
