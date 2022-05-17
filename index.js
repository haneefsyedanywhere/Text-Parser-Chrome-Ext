const createElement =(tag, props, child) =>{
  let element = document.createElement(tag);
  element.className = props.class;
  for (const property in props.styles){
    element.style[property] = props.styles[property];
  }
  element.innerHTML = child;
  return element;
}

const snackBarStyles = {
  padding: "16px",
  fontSize: "16px",
  lineHeight: "24px",
  borderRadius: "12px",
  display: "inline-block",
  position: "fixed",
  top: "60px",
  left: "50%",
  zIndex: 1000,
  backgroundColor: "#ffffff",
  transform: "translateX(-50%)",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
};

const onSuccessNotificationAndEvents = ()=>{
  let snackBar = createElement(
    "div",
    { class: "snackbar", styles: snackBarStyles },
    "Parsed text copied to clipboard 😎"
  );
  document.body.append(snackBar);
  setTimeout(()=>{
    snackBar.remove(snackBar);
    window.selectedElement.style.backgroundColor="initial";
  },1000);
}

const onErrorNotificationAndEvents = ()=>{
  let snackBar = createElement(
    "div",
    { class: "snackbar", styles: snackBarStyles },
    "Error Parsing Text 😔"
  );
  document.body.append(snackBar);
  setTimeout(()=>{
    snackBar.remove(snackBar);
    window.selectedElement.style.backgroundColor="initial";
  },1000);
}

const copyTextToClipboard =(text)=> {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      onSuccessNotificationAndEvents()
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      onErrorNotificationAndEvents();
      console.error("Async: Could not copy text: ", err);
    }
  );
}

const parseDoubleQuotesToSingleQuote = (text)=> {
  return text.replace(/"/g, "'");
}

const selectionEventHandler = (e)=>{
  let selection = document.getSelection();
  window.selectedElement = selection.focusNode.parentElement;
  let selectedElementInnerContent = selectedElement.innerHTML.toString();
  selectedElement.style.backgroundColor="red";
  let parsedContent = parseDoubleQuotesToSingleQuote(
    selectedElementInnerContent
  );
  console.log(`Parsed Content : ${parsedContent}`);
  copyTextToClipboard(parsedContent,selectedElement);
}

const notifyPluginLoaded = ()=>{
  console.log("Running Text Parser Script!");
  let snackBar = createElement(
    "div",
    { class: "snackbar", styles: snackBarStyles },
    "Text Parser Running! &#127881;"
  );
  document.body.append(snackBar);
  setTimeout(()=>{
    snackBar.remove(snackBar);
  },1000);
}

const disableAnchorNavigation = ()=>{
  let anchorElems = document.querySelectorAll("a");
  anchorElems.forEach((element) => {
    element.addEventListener('click',(e)=>{
      e.preventDefault();
    })
  });
};

function runScript() {
  notifyPluginLoaded();
  disableAnchorNavigation();
  document.addEventListener("selectionchange", selectionEventHandler);
}

runScript();

