// function CustomBlockManager() {
//     return (
//         <>
//             <h3>Test Blocks</h3>
//         </>
//     )
// }

// export default CustomBlockManager;

import { BlocksResultProps } from '@grapesjs/react';
import { MAIN_BORDER_COLOR, cx } from '../common';
import "./CustomBlockManager.scss";

export type CustomBlockManagerProps = Pick<
    BlocksResultProps,
    'mapCategoryBlocks' | 'dragStart' | 'dragStop'
>;

export default function CustomBlockManager({
    mapCategoryBlocks,
    dragStart,
    dragStop,
}: CustomBlockManagerProps) {

    console.log("BLOCKS", mapCategoryBlocks)
  return (
    <div className="gjs-custom-block-manager text-left">
        {Array.from(mapCategoryBlocks).map(([category, blocks]) => (
            <div key={category}>
                <div className={cx('py-2 px-4 border-y', MAIN_BORDER_COLOR)}>
                    {category}
                </div>
                <div className='content-blocks'>
                    {blocks.map((block) => (
                        <div
                            key={block.getId()}
                            draggable
                            className='box-block'
                            onDragStart={(ev) => dragStart(block, ev.nativeEvent)}
                            onDragEnd={() => dragStop(false)}
                        >
                            <div
                                className="image-size"
                                dangerouslySetInnerHTML={{ __html: block.getMedia()! }}
                            />
                            <div
                                className="text-size"
                                title={block.getLabel()}
                            >
                                {block.getLabel()}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
  );
}
