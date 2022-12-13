import Express,{json}  from "express";
import cors from "cors";
import { CreatePost, GetPosts } from "./src/routes/index.js";
import db from "./src/config/db.js";

const app = Express();

const PORT = 5000;

db.on("error", console.error.bind(console, "connection error:")); // visualizar erro no console
db.once("open", function () {
  // abrindo conexão com o banco
  console.log("Conectado ao banco de dados!");
});

app.get("/", (req, res) => {
    res.send("Hello to Memories API");
});
app.use(cors());
app.use(json());

app.post("/post", CreatePost);
app.get("/posts", GetPosts);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

