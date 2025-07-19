import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import TeamManagement from './pages/TeamManagement';
import TaskManagement from './pages/TaskManagement';
import Schedule from './pages/Schedule';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import { AppProvider, useAppContext } from './contexts/AppContext';
import Notification from './components/Notification';
import PageSkeleton from './components/PageSkeleton';
import FullPageLoader from './components/FullPageLoader';
import ProfileModal from './components/ProfileModal';

const PageRenderer: React.FC = () => {
  const { activePage } = useAppContext();
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    setIsPageLoading(true);
    const timer = setTimeout(() => setIsPageLoading(false), 500);
    return () => clearTimeout(timer);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard': return <Dashboard />;
      case 'team': return <TeamManagement />;
      case 'tasks': return <TaskManagement />;
      case 'schedule': return <Schedule />;
      default: return <Dashboard />;
    }
  };

  if (isPageLoading) {
    return <PageSkeleton />;
  }

  return renderPage();
};

const AppContent: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { notifications, isProfileModalOpen } = useAppContext();

  return (
    <div className="h-screen flex bg-gray-100 font-sans">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          <PageRenderer />
        </div>
      </main>
      
      <div className="fixed top-5 right-5 z-[100] space-y-2">
        {notifications.map(notification => (
          <Notification key={notification.id} notification={notification} />
        ))}
      </div>
      
      {isProfileModalOpen && <ProfileModal />}
    </div>
  );
};

const AuthRouter: React.FC = () => {
  const { isAuthenticated, isLoading, authFlowPage } = useAppContext();
  
  if (isLoading) {
    return <FullPageLoader />;
  }
  
  if (!isAuthenticated) {
    switch (authFlowPage) {
        case 'forgotPassword': return <ForgotPasswordPage />;
        default: return <LoginPage />;
    }
  }

  return <AppContent />;
};

const App: React.FC = () => (
  <AppProvider>
    <AuthRouter />
  </AppProvider>
);

export default App;