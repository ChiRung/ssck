import EditorJS from '@editorjs/editorjs';

// const Editor = new EditorJS();


// return <Editor />
export default function Editor() {
    const Editor = new EditorJS({
        autofocus: true,
        
    });
  return (
    <div className="editorContainer">
        <div>가용영역</div>
        <div id="editorjs"></div>
        <div>가용영역</div>
    </div>
    
  )
}
