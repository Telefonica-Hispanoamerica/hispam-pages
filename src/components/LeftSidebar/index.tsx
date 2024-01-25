import './LeftSidebar.scss'
import { Collapse } from 'antd'
import { CaretUpOutlined, SwitcherOutlined, CopyOutlined } from '@ant-design/icons';
import CustomBlockManager from '../CustomBlockManager';
import CustomLayerManager from '../CustomLayerManager';
import CustomPageManager from '../CustomPageManager';
import {
    BlocksProvider,
    LayersProvider,
    PagesProvider,
    SelectorsProvider,
    StylesProvider,
    TraitsProvider,
} from '@grapesjs/react';

function LeftSidebar() {

    return (
        <div className="left-sidebar-column">
            <Collapse
                className='collapse-item'
                accordion
                expandIconPosition="right"
                expandIcon={({ isActive }) => (
                    <CaretUpOutlined style={{ fontSize: ''}} rotate={isActive ? 180 : 90} />
                )}
                items={[{ key: '1', label:(
                <span>
                     <CopyOutlined style={{ marginRight: '8px', fontSize: '16px', color: '#111827' }} />
                    Paginas
                </span>),
                children: 
                <PagesProvider>
                    {(props) => <CustomPageManager {...props} />}
                </PagesProvider>
            }]}
            >
            </Collapse>
            <Collapse
                className='collapse-item'
                accordion
                expandIconPosition="right"
                expandIcon={({ isActive }) => (
                    <CaretUpOutlined style={{ }} rotate={isActive ? 180 : 90} />
                )}
                items={[{ key: '2', label:(
                    <span>
                        <SwitcherOutlined style={{ marginRight: '8px', fontSize: '16px', color: '#111827' }} />
                        Capas
                    </span>),
                    children: 
                    <LayersProvider>
                        {(props) => <CustomLayerManager {...props} />}
                    </LayersProvider>               
                }]}
            >
            </Collapse>
            <Collapse
                className='collapse-item'
                accordion
                expandIconPosition="right"
                expandIcon={({ isActive }) => (
                    <CaretUpOutlined style={{ }} rotate={isActive ? 180 : 90} />
                )}
                items={[{ 
                    key: '3', 
                    label:(
                    <span>
                        <SwitcherOutlined style={{ marginRight: '8px', fontSize: '16px', color: '#111827' }} />
                        Bloques
                    </span>),
                    children: 
                    <BlocksProvider>
                        {(props) => <CustomBlockManager {...props} />}
                    </BlocksProvider>,
                }]}
            >
            </Collapse>
        </div>
    )
}

export default LeftSidebar