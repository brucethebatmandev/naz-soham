export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: string;
}

export interface MenuCategory {
    id: number;
    name: string;
    description: string | null;
    menu_items: MenuItem[];
}