import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import denyRoutePermission from "./configs/routesAccess";

export async function middleware(request: NextRequest) {
  const token = await request.cookies.get("token")?.value;
  const role = await request.cookies.get("role")?.value;
  if (
    !token &&
    (request.url.includes("/dashboard") || request.url.includes("/admin"))
  ) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  if (
    request.url.includes("/admin") &&
    role !== "SUADMIN" &&
    denyRoutePermission(role || "", request.url.split("/admin/")[1])
  ) {
    return NextResponse.redirect(new URL("/401", request.url));
  }
  return;
}
