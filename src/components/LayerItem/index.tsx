import { useEditor } from '@grapesjs/react';
import { mdiEyeOffOutline, mdiEyeOutline, mdiMenuDown } from '@mdi/js';
import Icon from '@mdi/react';
import type { Component } from 'grapesjs';
import { MouseEvent, useEffect, useMemo, useRef, useState } from 'react';
import { MAIN_BORDER_COLOR, cx } from '../common';
import "./LayerItem.scss";

export declare interface LayerItemProps
    extends React.HTMLProps<HTMLDivElement> {
    component: Component;
    level: number;
    draggingCmp?: Component;
    dragParent?: Component;
}

const itemStyle = { maxWidth: `100%` };

export default function LayerItem({
    component,
    draggingCmp,
    dragParent,
    ...props
}: LayerItemProps) {
    const editor = useEditor();
    const { Layers } = editor;
    const layerRef = useRef<HTMLDivElement>(null);
    const [layerData, setLayerData] = useState(Layers.getLayerData(component));
    const { open, selected, hovered, components, visible, name } = layerData;
    const componentsIds = components.map((cmp) => cmp.getId());
    const isDragging = draggingCmp === component;
    const cmpHash = componentsIds.join('-');
    const level = props.level + 1;
    const isHovered = hovered || dragParent === component;

    useEffect(() => {
        level === 0 && setLayerData(Layers.getLayerData(component));
        if (layerRef.current) {
            (layerRef.current as any).__cmp = component;
        }
    }, [component]);

    useEffect(() => {
        const up = (cmp: Component) => {
            cmp === component && setLayerData(Layers.getLayerData(cmp));
        };
        const ev = Layers.events.component;
        editor.on(ev, up);

        return () => {
            editor.off(ev, up);
        };
    }, [editor, Layers, component]);

    const cmpToRender = useMemo(() => {
        return components.map((cmp) => (
            <LayerItem
                key={cmp.getId()}
                component={cmp}
                level={level}
                draggingCmp={draggingCmp}
                dragParent={dragParent}
            />
        ));
    }, [cmpHash, draggingCmp, dragParent]);

    const toggleOpen = (ev: MouseEvent) => {
        ev.stopPropagation();
        Layers.setLayerData(component, { open: !open });
    };

    const toggleVisibility = (ev: MouseEvent) => {
        ev.stopPropagation();
        Layers.setLayerData(component, { visible: !visible });
    };

    const select = (event: MouseEvent) => {
        event.stopPropagation();
        Layers.setLayerData(component, { selected: true }, { event });
    };

    const hover = (hovered: boolean) => {
        if (!hovered || !draggingCmp) {
            Layers.setLayerData(component, { hovered });
        }
    };

    const wrapperCls = cx(
        'layer-item',
        selected && 'bg-sky-900',
        (!visible || isDragging) && 'opacity-50'
    );

    return (
        <div className={wrapperCls}>
            <div
                onClick={select}
                onMouseEnter={() => hover(true)}
                onMouseLeave={() => hover(false)}
                className="group"
                data-layer-item
                ref={layerRef}
            >
                <div
                    className={cx(
                        'box-layer',
                        level === 0 && 'border-t',
                        MAIN_BORDER_COLOR,
                        isHovered && 'bg-sky-700',
                        selected && 'bg-sky-500'
                    )}
                >
                    <div
                        style={{ marginLeft: `${level * 10}px` }}
                        className={cx(
                            'cursor-pointer',
                            !components.length && 'pointer-events-none opacity-0'
                        )}
                        onClick={toggleOpen}
                    >
                        <Icon path={mdiMenuDown} size={0.7} rotate={open ? 0 : -90} />
                    </div>
                    <div className='truncate' style={itemStyle}>
                        {name}
                    </div>
                    <div
                        className={cx(
                            'eye',
                            isHovered ? 'opacity-100' : 'opacity-0',
                            selected && 'opacity-100'
                        )}
                        onClick={toggleVisibility}
                    >
                        <Icon
                            path={visible ? mdiEyeOutline : mdiEyeOffOutline}
                            size={0.7}
                        />
                    </div>
                </div>
            </div>
            {!!(open && components.length) && (
                <div className={cx('max-w-full', !open && 'hidden')}>{cmpToRender}</div>
            )}
        </div>
    );
}
