import * as React from "react";
import { GalleryVerticalEnd } from "lucide-react";
import { Link } from "react-scroll";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "~/components/ui/sidebar";
import { useLocation, useNavigate } from "react-router";
import { useCart } from "~/context/cartcontext";
import type { MenuItem } from "../types/Types";

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useCart();
  const [hash, setHash] = React.useState("");

  function onSmoothScroll(hashname: string) {
    window.history.pushState(null, "", `#${hashname}`);
    window.dispatchEvent(new PopStateEvent("popstate", { state: null }));
    setHash(decodeURIComponent(window.location.href.split("#")[1]));
  }
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="" smooth={true} delay={100}>
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">เมนูอาหาร</span>
                  <span className="">แสนอร่อย</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {state.product.map((category, idx) => (
              <SidebarMenuItem key={idx}>
                <SidebarMenuButton asChild isActive={hash === category.type}>
                  <Link
                    to={category.type}
                    smooth={true}
                    onClick={() => onSmoothScroll(category.type)}
                    offset={-70}
                  >
                    {category.type}
                  </Link>
                </SidebarMenuButton>
                {category.items?.length ? (
                  <SidebarMenuSub>
                    {category.items.map((menu: MenuItem) => (
                      <SidebarMenuSubItem key={menu.id}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={hash === menu.title}
                        >
                          <Link
                            to={menu.id}
                            smooth={true}
                            offset={-70}
                            onClick={() => onSmoothScroll(menu.id)}
                          >
                            {menu.title}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
