import { MenuCategory } from "@/menu.types";
import Menu from "./Menu";

import menuData from '@/utils/data/menu_data_api.json'

const MenuSection = async() => {

    const data: MenuCategory[] = menuData;
    
    return(
        <>
            <Menu menuList={data} />
        </>

    )
}
export default MenuSection;