// import { SidebarProvider } from '@/shared/context/layout/SidebarContext';
// import LayoutContent from './LayoutContent';

interface IDefaultLayoutProps {
	children: React.ReactNode;
}

export default function DefaultLayout({ children }: IDefaultLayoutProps): React.ReactNode {
	return (
		// <SidebarProvider>
			// <LayoutContent />
		// </SidebarProvider>
        <><span style={{ color: 'red' }}>DefaultLayout</span>{children}</>
	);
}
