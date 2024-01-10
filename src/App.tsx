import grapesjs, { Editor } from 'grapesjs';
import GjsEditor, { Canvas } from '@grapesjs/react';
import Topbar from './components/Topbar';
import RightSidebar from './components/RightSidebar';
import LeftSidebar from './components/LeftSidebar';
import './App.css';

function App() {
  const onEditor = (editor: Editor) => {
    console.log('Editor loaded', { editor });
  };

  return (
    <GjsEditor
      grapesjs={grapesjs}
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      onEditor={onEditor}
      options={{
        height: '100vh',
        storageManager: false,
      }}
    >
        <div className={'layout-editor-wrapper'}>
          <LeftSidebar></LeftSidebar>
          <div className={'gjs-editor-column'}>
            <Topbar></Topbar>
            <Canvas />
          </div>
          <RightSidebar></RightSidebar>
        </div>
    </GjsEditor>
  )
}

export default App
