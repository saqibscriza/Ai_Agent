import React from 'react'
import Layout from '../component/Layout/Layout.jsx'
import { Routes, Route } from "react-router-dom";
import Dashboard from '../component/pages/dashboard/dashboard.jsx';
import Agent from '../component/pages/agent/agent.jsx';
import VendorMangement from '../component/pages/vendorManagement/vendormanagement.jsx';
import VoiceModel from '../component/pages/voiceModel/voiceModel.jsx';
import CallMonitoring from '../component/pages/callMonitoring/callMonitoring.jsx';
import BillingSubscription from '../component/pages/billingSubscription/billingSubscription.jsx';
import Setting from '../component/pages/setting/setting.jsx';
import LogInPage from '../component/logIn/logInPage.jsx';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<LogInPage />} />
                <Route element={<Layout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/agent" element={<Agent />} />
                    <Route path="/vendormanagement" element={<VendorMangement />} />
                    <Route path="/voicemodel" element={<VoiceModel />} />
                    <Route path="/callmonitoring" element={<CallMonitoring />} />
                    <Route path="/billingsubscription" element={<BillingSubscription />} />
                    <Route path="/setting" element={<Setting />} />
                </Route>
            </Routes>

            {/* <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/agent" element={<Agent />} />
                    <Route path="/vendormanagement" element={<VendorMangement />} />
                    <Route path="/voicemodel" element={<VoiceModel />} />
                    <Route path="/callmonitoring" element={<CallMonitoring />} />
                    <Route path="/billingsubscription" element={<BillingSubscription />} />
                    <Route path="/setting" element={<Setting />} />
                    <Route path="/login" element={<LogInPage />} />
                </Routes>
            </Layout> */}
        </>
    )
}

export default AppRoutes
