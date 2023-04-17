// "express"라는 package를 express라는 이름으로 import 
import express from "express"; 

const PORT = 4000;

const app = express();

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
