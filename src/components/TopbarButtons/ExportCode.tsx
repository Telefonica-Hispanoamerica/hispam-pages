import { Editor, PluginOptions } from 'grapesjs';
// import SaveHtml from './SaveHtml'

function ExportCode(props:any) {
    const [ editor, opts ] = props
    const pfx = editor?.getConfig('stylePrefix');
    const commandName = 'export';

    const config: PluginOptions = {
        addExportBtn: true,
        btnLabel: 'Save HTML',
        filenamePfx: 'grapesjs_template',
        filename: undefined,
        done: () => {},
        onError: console.error,
        root: {
            css: {
                'style.css': (editor: Editor) => editor.getCss(),
            },
            'index.html': (editor: Editor) =>
            `<!doctype html>
            <html lang="en">
                <head>
                <meta charset="utf-8">
                <link rel="stylesheet" href="./css/style.css">
                </head>
                <body>${editor.getHtml()}</body>
            </html>`,
        },
            isBinary: undefined,
            ...opts,
    };		

    editor?.Commands.add(commandName, {
        run(editor:any) {
            editor.Modal.open({
                title: 'Modal example',
                content: `
                    <body>
                        ${editor.getHtml()}
                    </body>
                    <style></style>
                `,
            });

            // const exportData = {
            //     //html: editor.getHtml(),
            //     html: `<!doctype html>
            //     <html lang="en">
            //         <head>
            //         <meta charset="utf-8">
            //         <link rel="stylesheet" href="./css/style.css">
            //         </head>
            //         <body>${editor.getHtml()}</body>
            //     </html>`,
            //     css: editor.getCss()
            // }

            if (config.addExportBtn) {
                const btnExp = document.createElement('button');
                btnExp.innerHTML = config.btnLabel!;
                btnExp.className = `${pfx}btn-prim`;
                btnExp.type = 'button';
        
                editor.on('run:export', () => {
                    const el = editor.Modal.getContentEl();
                    el?.appendChild(btnExp);
                    btnExp.onclick = () => {
                        // <SaveHtml htmlString={exportData}/>

                        // guardarHTMLenBackend(exportData)
                    }						
                });
            }
            
        },
        stop(editor:any) {
            editor.Modal.close();
        },
    });
}

export default ExportCode