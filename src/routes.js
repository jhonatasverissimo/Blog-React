import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Article from "./pages/Article";

const Rota  = () =>(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main></Main>} />
            <Route path="/Articles" element={<Article></Article>} />
        </Routes>
    </BrowserRouter>
)

export default Rota;