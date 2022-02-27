//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

use wasm_bindgen_test::*;
use mstools::*;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn test_encode_decode_base64() {
    let input = "1234";
    let encoded = encode_base64(&input);
    let decoded = decode_base64(&encoded);
    assert_eq!(&input, &decoded);
    assert_eq!(encoded, String::from("MTIzNA=="));
}

#[wasm_bindgen_test]
fn test_encode_decode_url() {
    let input = "http://www.example.com";
    let encoded = encode_url(&input);
    let decoded = decode_url(&encoded);
    assert_eq!(&input, &decoded);
    assert_eq!(encoded, String::from("http%3A%2F%2Fwww.example.com"));
}
