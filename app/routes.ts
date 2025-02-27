import {
  type RouteConfig,
  index,
  layout,
  prefix,
  relative,
  route,
} from "@react-router/dev/routes";

export default [
  layout("components/layout/navigatelayout2.tsx", [index("routes/shadui.tsx")]),
] satisfies RouteConfig;
