import {
  type RouteConfig,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  ...prefix("shadui", [
    layout("components/layout/navigatelayout2.tsx", [index("routes/shadui.tsx")]),
  ]),
] satisfies RouteConfig;
