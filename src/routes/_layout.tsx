import {
  Link,
  Outlet,
  createFileRoute,
  useMatchRoute,
} from '@tanstack/react-router'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

export const Route = createFileRoute('/_layout')({
  component: Layout,
})

function Layout() {
  const matchRoute = useMatchRoute()

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={Boolean(matchRoute({ to: '/' }))}
                      render={<Link to="/">Home</Link>}
                    />
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={Boolean(matchRoute({ to: '/example' }))}
                      render={<Link to="/example">Example</Link>}
                    />
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={Boolean(matchRoute({ to: '/form' }))}
                      render={<Link to="/form">Form</Link>}
                    />
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={Boolean(matchRoute({ to: '/form1' }))}
                      render={<Link to="/form1">Form 1</Link>}
                    />
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={Boolean(matchRoute({ to: '/form2' }))}
                      render={<Link to="/form2">Form 2</Link>}
                    />
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1">
          <SidebarTrigger className="m-4" />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}
