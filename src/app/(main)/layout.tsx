// "use client";

//
import { Breadcrumbs, Drawer, Header, Sidebar } from "common/components";
import { classNames } from "common/utils";
// import { useDrawer } from "common/zustand";

const MainLayout: React.FCC = ({ children }) => {
  // const isOpen = useDrawer((state) => state.isOpen);
  // const closeDrawer = useDrawer((state) => state.close);

  return (
    <Drawer>
      <div
        className={classNames(
          "grid h-screen w-screen grid-rows-[70px,1fr] bg-[#fafafa]",
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
      </div>
    </Drawer>
  );
};

export default MainLayout;
