import * as mstools from "wasm-mstools";

const inputTextArea = document.getElementById("input");

const buttons_mapping = {
  encode_base64: () => {
    inputTextArea.value = mstools.encode_base64(inputTextArea.value);
  },
  decode_base64: () => {
    inputTextArea.value = mstools.decode_base64(inputTextArea.value);
  },
  encode_url: () => {
    inputTextArea.value = mstools.encode_url(inputTextArea.value);
  },
  decode_url: () => {
    inputTextArea.value = mstools.decode_url(inputTextArea.value);
  },
};

for (const [button_id, fn] of Object.entries(buttons_mapping)) {
  let button = document.getElementById(button_id);
  button.addEventListener("click", (event) => {
    fn();
  });
}
