import { useEditor } from '@grapesjs/react'
import { useEffect, useState } from 'react'
// import { UndoOutlined, RedoOutlined,ExpandOutlined, CodeOutlined, LayoutOutlined, DeleteOutlined } from '@ant-design/icons'
import './TopbarButtons.scss'
import { AccessAlarm } from '@mui/icons-material';

interface CommandButton {
    id: string
    iconPath?: React.ReactNode
    options?: Record<string, any>
    disabled?: () => boolean
}

function TopbarButtons () {

    const editor = useEditor()
    const [, setUpdateCounter] = useState(0);
    const { UndoManager, Commands } = editor;
    const cmdButtons: CommandButton[] = [
        {
			id: 'core:component-outline',
			iconPath: <AccessAlarm />
        },
        {
			id: 'core:fullscreen',
			iconPath: <AccessAlarm />,
			options: { target: '#root' }
        },
        // {
		// 	id: 'core:open-code',
		// 	iconPath: <CodeOutlined />
        // },
        // {
		// 	id: 'export-template',
		// 	iconPath: <CodeOutlined />
        // },
        {
			id: 'save-export',
			iconPath: <AccessAlarm />
        },
        // {
		// 	id: 'export',
		// 	iconPath: <CodeOutlined />
        // },
        // {
		// 	id: 'gjs-export-zip',
		// 	iconPath: <CodeOutlined />
        // },
        //  {
		// 	id: 'gjs-export-zip',
		// 	iconPath: <CodeOutlined />
        // },
        {
			id: 'core:component-delete',
			iconPath: <AccessAlarm />
        },
        {
			id: 'core:undo',
			iconPath: <AccessAlarm />,
			disabled: () => !UndoManager.hasUndo()
        },
        {
			id: 'core:redo',
			iconPath: <AccessAlarm />,
			disabled: () => !UndoManager.hasRedo()
        },
    ];

    function cx(...inputs: any[]): string {
        const inp = Array.isArray(inputs[0]) ? inputs[0] : [...inputs];
        return inp.filter(Boolean).join(' ');
    }

    useEffect(() => {
        const cmdEvent = 'run stop';
        const updateEvent = 'update';
        const updateCounter = () => setUpdateCounter((value) => value + 1);
        const onCommand = (id: string) => {
            cmdButtons.find((btn) => btn.id === id) && updateCounter()
        }
        editor.on(cmdEvent, onCommand)
        editor.on(updateEvent, updateCounter)

        return () => {
            editor.off(cmdEvent, onCommand)
            editor.off(updateEvent, updateCounter)
        }
    }, []);

    return (
        <div>
      		{cmdButtons.map(({ id, iconPath, disabled, options = {} }) => (
				<button
					key={id}
					type="button"
					className={cx(
						'buttonOptions',
						Commands.isActive(id) && 'text-sky-300'
					)}
					onClick={() =>
						Commands.isActive(id)
						? Commands.stop(id)
						: Commands.run(id, options)
					}
					disabled={disabled?.()}
				>
					<i >{iconPath}</i>
				</button>
      		))}
    	</div>
    )
}

export default TopbarButtons