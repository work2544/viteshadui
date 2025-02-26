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
import { useLocation } from "react-router";
import { useCart } from "~/context/cartcontext";
import type { MenuItem } from "../types/Types";

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { hash } = useLocation();
  const { state } = useCart();
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
            {state.product.map((category, idx) => (
              <SidebarMenuItem key={idx}>
                <SidebarMenuButton asChild>
                  <a
                    className="font-medium cursor-pointer"
                    onClick={(e) => {
                      onSmoothScroll(e, category.type);
                    }}
                  >
                    {category.type}
                  </a>
                </SidebarMenuButton>
                {category.items?.length ? (
                  <SidebarMenuSub>
                    {category.items.map((menu: MenuItem) => (
                      <SidebarMenuSubItem key={menu.id}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={
                            decodeURIComponent(hash.split("#")[1]) ===
                            menu.title
                          }
                        >
                          <a
                            className="font-medium cursor-pointer"
                            href={"#" + menu.id}
                            onClick={(e) => onSmoothScroll(e, menu.id)}
                          >
                            {menu.title}
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
