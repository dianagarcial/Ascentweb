import { Navigate, Route, Routes } from "react-router-dom";

export const AppRouter = () => {

    return (
        <Routes>


            <Route path="/" element={<Home />} />
            <Route path="/*" element={ <Navigate to ="/"/> }/>
        </Routes>
    )
}