const routeAccess: any = {
  UADMIN: ["administrative-users"],
  BLOGGER: [
    "administrative-users",
    "plugin",
    "wallet",
    "merchant",
    "tickets",
    "transactions",
    "transactions-list",
    "users",
  ],
  OPERATOR: [
    "administrative-users",
    "plugin",
    "blog",
    "wallet",
    "merchant",
    "transactions",
    "transactions-list",
  ],
  DADMIN: [
    "administrative-users",
    "blog",
    "wallet",
    "merchant",
    "tickets",
    "transactions",
    "transactions-list",
  ],
  USER: [
    "administrative-users",
    "plugin",
    "blog",
    "wallet",
    "merchant",
    "tickets",
    "transactions",
    "transactions-list",
    "users",
    "",
  ],
};

const denyRoutePermission = (role: string, url: string) =>
  routeAccess[role]?.includes(url);

export default denyRoutePermission;
