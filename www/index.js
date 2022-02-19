import * as mstools from "wasm-mstools";

const encodeButton = document.getElementById("encode");
const decodeButton = document.getElementById("decode");
const inputTextArea = document.getElementById("input");

const encode = () => {
    inputTextArea.value = mstools.encode_base64(inputTextArea.value);
};

const decode = () => {
    inputTextArea.value = mstools.decode_base64(inputTextArea.value);
};

encodeButton.addEventListener("click", event => {
    encode();
});

decodeButton.addEventListener("click", event => {
    decode();
});
