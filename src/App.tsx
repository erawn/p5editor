import * as React from "react";
// import "@codesandbox/sandpack-react/dist/index.css";
// import "./styles.css";
// import {
//   SandpackCodeEditor,
//   SandpackThemeProvider,
//   SandpackPreview,
//   SandpackProvider,
//   nightOwlTheme
// } from "@codesandbox/sandpack-react";
import files from "./GenerativeArt";

// export default function App() {
//   return (
//     <div className="App">

import {
  Sandpack,
  SandpackCodeEditor,
  SandpackLayout,
  SandpackTranspiledCode,
  SandpackThemeProvider,
  SandpackPreview,
  SandpackProvider
} from "@codesandbox/sandpack-react";

export default function App() {
  return (
    <>
      <SandpackProvider
        files={files}
        customSetup={{
          dependencies: {
            p5: "latest"
          }
        }}
        options={{
          startRoute: "src/index.js"
        }}
        theme="dark"
        template="vanilla"
      >
        <SandpackLayout>
          <SandpackCodeEditor showTabs={false} />
          <SandpackPreview />
          {/* <SandpackTranspiledCode /> */}
        </SandpackLayout>
        <SandpackPreview />
      </SandpackProvider>
    </>
  );
}
// import {
//   SandpackProvider,
//   SandpackLayout,
//   SandpackPreview
// } from "@codesandbox/sandpack-react";

// export default () => (
//   <SandpackProvider
//     template="vanilla"
//     files={files}
//     // startRoute={"index.html"}
//     customSetup={{
//       entry: files["/src/index.js"],
//       dependencies: {
//         p5: "1.4.0"
//       }
//     }}
//   >
//     <SandpackLayout>
//       <SandpackPreview
//         showOpenInCodeSandbox={false}
//         showRefreshButton={false}
//       />
//       <SandpackPreview />
//       <SandpackPreview />
//       <SandpackPreview />
//     </SandpackLayout>
//   </SandpackProvider>
// );
//       <SandpackProvider
//         template="vanilla"
//         customSetup={{
//           files: files,
//           entry: "index.html",
//           dependencies: {
//             p5: "1.4.0"
//           }
//         }}
//       >
//         <SandpackThemeProvider theme={nightOwlTheme}>
//           <div className="container">
//             <SandpackCodeEditor />
//             <div className="outputContainer">
//               <div className="output">
//                 <SandpackPreview
//                   startRoute={""}
//                   showOpenInCodeSandbox={false}
//                   showRefreshButton={false}
//                 />
//               </div>
//               <div className="output">
//                 <SandpackPreview
//                   showOpenInCodeSandbox={false}
//                   showRefreshButton={false}
//                 />
//               </div>

//               <div className="output">
//                 <SandpackPreview
//                   showOpenInCodeSandbox={false}
//                   showRefreshButton={false}
//                 />
//               </div>

//               <div className="output">
//                 <SandpackPreview
//                   showOpenInCodeSandbox={false}
//                   showRefreshButton={false}
//                 />
//               </div>

//               <div className="output">
//                 <SandpackPreview
//                   showOpenInCodeSandbox={false}
//                   showRefreshButton={false}
//                 />
//               </div>

//               <div className="output">
//                 <SandpackPreview
//                   showOpenInCodeSandbox={false}
//                   showRefreshButton={false}
//                 />
//               </div>
//             </div>
//           </div>
//         </SandpackThemeProvider>
//       </SandpackProvider>
//     </div>
//   );
// }
