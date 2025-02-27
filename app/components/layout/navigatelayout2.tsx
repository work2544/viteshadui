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
        <header className="flex h-16 items-center gap-2 border-b justify-between">
          <div className="flex items-center gap-2 px-3 ">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">เมนูอาหารทั้งหมด</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {hashname? hashname: (<></>)}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="mr-20">
            <ProductCart />
          </div>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
