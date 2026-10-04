import "dotenv/config";
import { createApp } from "./app.js";
import { connectDatabase } from "./db.js";

const port = Number(process.env.PORT || 4000);
const app = createApp();

connectDatabase()
  .then((state) => {
    if (!state.connected) {
      console.info(`[api] MongoDB skipped: ${state.reason}`);
    }
  })
  .catch((error) => {
    console.warn(`[api] MongoDB connection failed: ${error.message}`);
  });

app.listen(port, () => {
  console.info(`[api] Morepen API listening on http://localhost:${port}`);
});
