import './LeftSidebar.css'
import { Collapse } from 'antd'
import { CaretUpOutlined, SwitcherOutlined, CopyOutlined } from '@ant-design/icons';

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
                children: <div><h3>Pages content</h3></div>
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
                children: <div><h3>Layout content</h3></div>
            }]}
            >
            </Collapse>
        </div>
    )
}

export default LeftSidebar