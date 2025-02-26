import * as React from "react";
import { GalleryVerticalEnd } from "lucide-react";

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
import { menu } from "~/components/data/menu";
import { useLocation } from "react-router";

// This is sample data.
const data = {
  navMain: menu,
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { hash } = useLocation();
  function onSmoothScroll(
    e: React.MouseEvent<HTMLAnchorElement>,
    hashname: string | undefined
  ) {
    e.preventDefault();
    document.querySelector("#" + hashname)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    window.history.pushState(null, "", "#" + hashname);
  }
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">เมนูอาหาร</span>
                  <span className="">แสนอร่อย</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item, idx) => (
              <SidebarMenuItem key={idx}>
                <SidebarMenuButton asChild>
                  <a
                    className="font-medium cursor-pointer"
                    onClick={(e) => {
                      onSmoothScroll(e, item.type);
                    }}
                  >
                    {item.type}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.cardTitle}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={
                            decodeURIComponent(hash.split("#")[1]) ===
                            item.cardTitle
                          }
                        >
                          <a
                            className="font-medium cursor-pointer"
                            href={"#" + item.cardTitle}
                            onClick={(e) => onSmoothScroll(e, item.cardTitle)}
                          >
                            {item.cardTitle}
                          </a>
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
