import React from "react";
import CommonLayout from "./componets/CommonLayout";
import Iphone from "./componets/Iphone";
import Main from "./componets/Main";
import SingleAppleProduct from "./componets/SingleAppleProduct";
import { Route, Routes } from "react-router-dom";
import Mac from "./componets/Mac";
import Ipad from "./componets/Ipad";
import Watch from "./componets/Watch";
import TV from "./componets/TV";
import Music from "./componets/Music";
import Support from "./componets/Support";
import Search from "./componets/Search";
import Cart from "./componets/Cart";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<CommonLayout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/mac" element={<Mac />} />
                    <Route path="/iphone" element={<Iphone />} />
                    <Route path="/ipad" element={<Ipad />} />
                    <Route path="watch/" element={<Watch />} />
                    <Route path="tv/" element={<TV />} />
                    <Route path="music/" element={<Music />} />
                    <Route path="support/" element={<Support />} />
                    <Route path="search/" element={<Search />} />
                    <Route path="cart/" element={<Cart />} />
                    <Route
                        path="iphone/:productName"
                        element={<SingleAppleProduct />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
