import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { AppSidebar } from "~/components/ui/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Separator } from "~/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import ProductCart from "../productcart";

export default function Page() {
  const [hashname, setHashname] = useState("");
  const location = useLocation();
  useEffect(() => {
    setHashname(decodeURIComponent(location.hash.split("#")[1]));
  }, [location, hashname]);
  return (
    <SidebarProvider className="font-menu">
      <AppSidebar />
      <SidebarInset>
      <header className="sticky top-0 z-10 flex h-16 items-center border-b bg-background px-4">
          <div className="flex flex-1 items-center gap-2">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">เมนูอาหารทั้งหมด</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{hashname ? hashname : <></>}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div>
            <ProductCart />
          </div>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
