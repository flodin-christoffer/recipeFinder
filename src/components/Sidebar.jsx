import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";

const Sidebar = () => {
    //fragments då går det med multiple children
    return ( 
    <>
    <DesktopSidebar></DesktopSidebar>
    <MobileSidebar></MobileSidebar>
    </> );
}
 
export default Sidebar;