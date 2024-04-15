
// type PropsHtml = {
//     html: string,
//     css: string
// }

export default async function SaveHtml(htmlString:any) {
    console.log('HTML FUNCTION', htmlString)
    try {
        const response = await fetch('http://localhost:3000/save-html', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify('htmlString'),
        });
        if (response.ok) {
            console.log('HTML guardado exitosamente');
        } else {
            console.error('Error al guardar el HTML en el backend:', response.statusText);
        }
    } catch (error) {
          console.error('Error al guardar el HTML en el backend', error);
    }		
}