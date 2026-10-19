import type { RouteRecord } from "vite-react-ssg";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import ServicePage from "@/pages/ServicePage";
import { SERVICES } from "@/lib/site";

export const routes: RouteRecord[] = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      ...SERVICES.map((s) => ({
        path: s.slug,
        element: <ServicePage slug={s.slug} />,
      })),
      { path: "404", Component: NotFound },
      { path: "*", Component: NotFound },
    ],
  },
];
