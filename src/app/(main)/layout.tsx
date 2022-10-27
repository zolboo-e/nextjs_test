"use client";

//
import { Breadcrumbs, Drawer, Header, Sidebar } from "common/components";
import { classNames } from "common/utils";
import { CloseDrawerOnMobile, useDrawer } from "common/zustand";

const MainLayout: React.FCC = ({ children }) => {
  const isOpen = useDrawer((state) => state.isOpen);
  const closeDrawer = useDrawer((state) => state.close);

  return (
    <CloseDrawerOnMobile>
      <div className="flex">
        <Drawer />
        <div
          className={classNames(
            "z-10 grid h-screen w-screen grid-rows-[70px,1fr] bg-[#fafafa] transition-margin duration-200",
            isOpen && "ml-[80vw]",
            "sm:grid-cols-[80px,1fr]"
          )}
        >
          <Sidebar />
          <Header />
          <div className={classNames("w-screen overflow-auto", "sm:w-full")}>
            <div className="container pt-5 pb-20">
              <div className="flex flex-col gap-y-10">
                <Breadcrumbs />
                {children}
              </div>
            </div>
          </div>
          <div
            className={classNames(
              "absolute h-screen w-screen bg-black/20 transition-opacity duration-200",
              isOpen ? "visible opacity-100" : "invisible opacity-0"
            )}
            onClick={closeDrawer}
          />
        </div>
      </div>
    </CloseDrawerOnMobile>
  );
};

export default MainLayout;
