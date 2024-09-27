"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9213],{9269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=n(4848),r=n(8453);const a={},i="Terminal",o={id:"usage/cmd",title:"Terminal",description:"This is the command line interface for TaskWeaver. You can interact with TaskWeaver through this interface.",source:"@site/docs/usage/cmd.md",sourceDirName:"usage",slug:"/usage/cmd",permalink:"/TaskWeaver/docs/usage/cmd",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/TaskWeaver/tree/main/website/docs/usage/cmd.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"Usage Options",permalink:"/TaskWeaver/docs/usage"},next:{title:"Web UI",permalink:"/TaskWeaver/docs/usage/webui"}},c={},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"terminal",children:"Terminal"})}),"\n",(0,s.jsx)(t.p,{children:"This is the command line interface for TaskWeaver. You can interact with TaskWeaver through this interface."}),"\n",(0,s.jsxs)(t.p,{children:["Follow the instruction in ",(0,s.jsx)(t.a,{href:"/TaskWeaver/docs/quickstart",children:"Quick Start"})," to clone the repository and fill in the necessary configurations."]}),"\n",(0,s.jsx)(t.p,{children:"Run the following command in terminal."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# assume you are in the TaskWeaver folder\npython -m taskweaver -p ./project/ # -p is the path to the project directory\n"})}),"\n",(0,s.jsx)(t.p,{children:"This will start the TaskWeaver process, and you can interact with it through the command line interface.\nIf everything goes well, you will see the following prompt:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"=========================================================\n _____         _     _       __\n|_   _|_ _ ___| | _ | |     / /__  ____ __   _____  _____\n  | |/ _` / __| |/ /| | /| / / _ \\/ __ `/ | / / _ \\/ ___/\n  | | (_| \\__ \\   < | |/ |/ /  __/ /_/ /| |/ /  __/ /\n  |_|\\__,_|___/_|\\_\\|__/|__/\\___/\\__,_/ |___/\\___/_/\n=========================================================\nTaskWeaver: I am TaskWeaver, an AI assistant. To get started, could you please enter your request?\nHuman: ___\n"})}),"\n",(0,s.jsxs)(t.p,{children:["We have provided a set of commands to interact with TaskWeaver. You can type ",(0,s.jsx)(t.code,{children:"help"})," to see the list of available commands.\nAll commands start with a ",(0,s.jsx)(t.code,{children:"/"})," character. For example, you can type ",(0,s.jsx)(t.code,{children:"/help"})," to see the list of available commands."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:" TaskWeaver \u25b6  I am TaskWeaver, an AI assistant. To get started, could you please enter your request?\n    Human   \u25b6  /help\n\nTaskWeaver Chat Console\n-----------------------\n/load <file>: load a file\n/info: print the information of the current session\n/reset: reset the session\n/clear: clear the console\n/exit: exit the chat console\n/help: print this help message\n/save: save the chat history of the current session for experience extraction\n"})}),"\n",(0,s.jsx)(t.p,{children:"The table of commands supported by TaskWeaver is as follows:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Command"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"/load <file>"})}),(0,s.jsx)(t.td,{children:"Load a file by its absolute path, e.g., /load /home/taskweaver/sample.csv"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"/info"})}),(0,s.jsx)(t.td,{children:"Print the session id and the active roles of the current session"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"/reset"})}),(0,s.jsx)(t.td,{children:"Reset the current session and start a new session"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"/clear"})}),(0,s.jsx)(t.td,{children:"Clear the console content"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"/exit"})}),(0,s.jsx)(t.td,{children:"Exit the chat console"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"/help"})}),(0,s.jsx)(t.td,{children:"Print the help message"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"/save"})}),(0,s.jsx)(t.td,{children:"Save the chat history of the current session for experience extraction"})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["When TaskWeaver runs generated code, the CWD (current working directory) is set to the ",(0,s.jsx)(t.code,{children:"project/workspace/session_id/cwd"})," directory.\nIf you need to use relative paths in the generated code, the ",(0,s.jsx)(t.code,{children:"cwd"})," directory should be the base path."]})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(6540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);