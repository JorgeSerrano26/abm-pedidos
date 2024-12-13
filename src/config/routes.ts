type Link = {
    label: string;
    sublinks?: Link[];
    href?: string;
    icon?: "metrics" | "order" | "package" | "truck" | "users";
};

export const links: Link[] = [
    { href: "/", label: "Dashboard", icon: 'metrics' },
    {
        label: "Clients",
        href: "/clients",
        sublinks: [
            { href: "/clients", label: "Listado de clientes" },
            { href: "/clients/agregar", label: "Agregar cliente" },
        ],
        icon: 'users',
    },
    {
        label: "Productos",
        href: "/products",
        sublinks: [
            { href: "/products", label: "Listado de productos" },
            { href: "/products/new", label: "Agregar producto" },
        ],
        icon: 'package',
    },
    {
        href: "/orders",
        label: "Pedidos",
        sublinks: [
            { href: "/orders", label: "Listado de pedidos" },
            { href: "/orders/new", label: "Agregar pedido" },
        ],
        icon: 'order',
    },
    {
        href: "/shippings",
        label: "Envios",
        sublinks: [
            { href: "/shippings", label: "Listado de envios" },
            { href: "/shippings/new", label: "Crear un envio" },
        ],
        icon: 'truck',
    },
];