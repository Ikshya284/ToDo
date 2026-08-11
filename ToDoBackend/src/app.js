const cors = require("cors");
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: process.env.CORS_METHOD?.split(","),
  }),
);