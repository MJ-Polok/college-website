import { Routes, Route } from "react-router-dom";
import NoticeArchivePage from "../pages/NoticeArchivePage";
import NoticeDetailsPage from "../pages/NoticeDetailsPage";
import HomePage from "../pages/HomePage";
import AdmissionPage from "../pages/AdmissionPage";
import TeacherPage from "../pages/TeacherPage";
import GalleryPage from "../pages/GalleryPage";
import UnderConstructionPage from "../pages/UnderConstructionPage";
import NotFoundPage from "../pages/NotFoundPage";

// const FEATURES = {
//     historyIntroduction: false,
//     administrativeStructure: false,
//     aimsObjectives: false,
//     departments: false,
//     academic: false,
//     contact: false,
// };

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notice-archive" element={<NoticeArchivePage />} />
            <Route path="/notice-archive/:slug" element={<NoticeDetailsPage />} />
            <Route path="/admission" element={<AdmissionPage />} />
            <Route path="/teachers" element={<TeacherPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/history-introduction" element={<UnderConstructionPage/>} />
            <Route path="/administrative-structure" element={<UnderConstructionPage/>} />
            <Route path="/aims-objectives" element={<UnderConstructionPage/>} />
            <Route path="/departments" element={<UnderConstructionPage/>} />
            <Route path="/academic" element={<UnderConstructionPage/>} />
            <Route path="/contact" element={<UnderConstructionPage/>} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRoutes;