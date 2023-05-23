import { useEffect, FC, Suspense, lazy, ReactNode, Children } from "react";
import TopBar from "../global/Topbar";
import { Route, Routes, } from "react-router-dom"
import Application from "../app/application"

const Dashboard: FC = () => {
    return (
        <>
            <TopBar/>
            <Routes>
                <Route index element={<Application/>} />
            </Routes>
        </>
    )
}


export default Dashboard

