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
import AddAgentIndustry from '../component/pages/agent/addAgentIndustry.jsx';
import AgentUseCase from '../component/pages/agent/agentUseCase.jsx';
import CompleteAgent from '../component/pages/agent/completeAgent.jsx';
import ChildAgent from '../component/pages/agent/childAgent/childAgent.jsx';
import SuperChildAgent from '../component/pages/agent/superChildAgent/superChildAgent.jsx';
import KnowledgeBase from '../component/pages/agent/knowledgeBase/knowledgeBase.jsx';
import Analysis from '../component/pages/agent/analysis/analysis.jsx';
import Test from '../component/pages/agent/tests/test.jsx';
import Widget from '../component/pages/agent/widget/widget.jsx';
import AiCallingAgent from '../component/pages/agent/AiCallingagent.jsx';
import AddVendor from '../component/pages/vendorManagement/addVendor.jsx';
import UpdateVendor from '../component/pages/vendorManagement/updateVendor.jsx';

const AppRoutes = () => {
    return (
        <>
            <Routes >
                <Route path="/login" element={<LogInPage />} />
                <Route element={<Layout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/agent" element={<Agent />} />
                    <Route path="/vendormanagement" element={<VendorMangement />} />
                    <Route path="/voicemodel" element={<VoiceModel />} />
                    <Route path="/callmonitoring" element={<CallMonitoring />} />
                    <Route path="/billingsubscription" element={<BillingSubscription />} />
                    <Route path="/setting" element={<Setting />} />
                        {/* Child Routes  */}
                    <Route path="/addagentindustry" element={<AddAgentIndustry />} />
                    <Route path="/agentusecase" element={<AgentUseCase />} />
                    <Route path="/completeagent" element={<CompleteAgent />} />
                        {/*Super Child Routes  */}
                    <Route path="/childagent" element={<ChildAgent />} />
                    <Route path="/superchildagent" element={<SuperChildAgent />} />
                    <Route path="/knowledgebase" element={<KnowledgeBase />} />
                    <Route path="/analysis" element={<Analysis />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/Widget" element={<Widget />} />
                    <Route path="/aicallingagent" element={<AiCallingAgent />} />
                    <Route path="/addvendor" element={<AddVendor />} />
                    <Route path="/updatevendor" element={<UpdateVendor />} />

                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes
