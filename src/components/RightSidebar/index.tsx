import {
  BlocksProvider,
  LayersProvider,
  PagesProvider,
  SelectorsProvider,
  StylesProvider,
  TraitsProvider,
} from "@grapesjs/react";
import { useState } from "react";
import CustomBlockManager from "../CustomBlockManager";
import CustomPageManager from "../CustomPageManager";
import CustomLayerManager from "../CustomLayerManager";
import CustomSelectorManager from "../CustomSelectorManager";
import CustomStyleManager from "../CustomStyleManager";
import CustomTraitManager from "../CustomTraitManager";
import { Tabs } from "antd";
import "./RigthSidebar.css";
import { HighlightOutlined, ToolOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
function RightSidebar() {

  const [selectedTab, setSelectedTab] = useState("0");

  return (
    <div className="right-sidebar-column">
      <Tabs
        activeKey={selectedTab}
        onChange={(activeKey) => setSelectedTab(activeKey)}
        centered
      >
        <TabPane tab={ <span><HighlightOutlined className="icon" style={{color: '#111827'}}/>Estilos</span>} key="1">
        </TabPane>
        <TabPane tab={ <span><ToolOutlined className="icon" style={{color: '#111827'}}/>Propiedades</span> } key="2">
        </TabPane>
        {/* <TabPane tab={ <AppstoreOutlined style={{color: '#fff'}}/> } key="3">
        </TabPane>
        <TabPane tab={ <SettingOutlined style={{color: '#fff'}}/>} key="4">
        </TabPane>
        <TabPane tab={ <FileTextOutlined style={{color: '#fff'}}/> } key="5">
        </TabPane> */}
      </Tabs>
      <div>
        {selectedTab === '1' && (
            <>
                <SelectorsProvider>
                    {(props) => <CustomSelectorManager {...props} />}
                </SelectorsProvider>
                <StylesProvider>
                    {(props) => <CustomStyleManager {...props} />}
                </StylesProvider>
            </>
        )}
      </div>
    </div>
  );
}

export default RightSidebar;
