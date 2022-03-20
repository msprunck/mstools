import * as mstools from "wasm-mstools";

const inputTextArea = document.getElementById("input");
const errorText = document.getElementById("error");

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
  decode_jwt: () => {
    inputTextArea.value = mstools.decode_jwt(inputTextArea.value);
  },
  format_json: () => {
    inputTextArea.value = mstools.format_json(inputTextArea.value);
  },
  gen_uuid: () => {
    inputTextArea.value = mstools.gen_uuid();
  },
  json_to_edn: () => {
    inputTextArea.value = mstools.json_to_edn(inputTextArea.value);
  },
  edn_to_json: () => {
    inputTextArea.value = mstools.edn_to_json(inputTextArea.value);
  },
};

const show_error = (message) => {
  errorText.hidden = false;
  errorText.textContent = message;
};

const hide_error = () => {
  errorText.hidden = true;
};

for (const [button_id, fn] of Object.entries(buttons_mapping)) {
  let button = document.getElementById(button_id);
  button.addEventListener("click", (event) => {
    try {
      hide_error();
      fn();
    } catch (error) {
      show_error(error.message);
    }
  });
}
