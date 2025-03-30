const cors = require("cors");

const app = express();

// CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://your-vercel-app-domain.vercel.app", // Replace with your actual Vercel domain
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ... rest of your server code ...
