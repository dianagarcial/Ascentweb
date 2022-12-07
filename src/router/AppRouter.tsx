import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../components";

export const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={ <Navigate to ="/"/> }/>
        </Routes>
    )
}