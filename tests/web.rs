//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

use wasm_bindgen_test::*;
use wasm_bindgen::*;
use mstools::*;
use serde_json::*;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn test_encode_decode_base64() {
    let input = "1234";
    let encoded = encode_base64(&input);
    let decoded = decode_base64(&encoded);

    assert_eq!(Ok(String::from(input)), decoded.map_err(|e| JsValue::from(e)));
    assert_eq!(encoded, String::from("MTIzNA=="));
}

#[wasm_bindgen_test]
fn test_encode_decode_url() {
    let input = "http://www.example.com";
    let encoded = encode_url(&input);
    let decoded = decode_url(&encoded);
    assert_eq!(Ok(String::from(input)), decoded.map_err(|e| JsValue::from(e)));
    assert_eq!(encoded, String::from("http%3A%2F%2Fwww.example.com"));
}

#[wasm_bindgen_test]
fn test_decode_jwt() {
    let jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    let expected_jwt = [json!({"alg":"HS256","typ":"JWT"}),
                        json!({"sub":"1234567890","name":"John Doe","iat":1516239022})];
    let expected_jwt_string = serde_json::to_string_pretty(&expected_jwt).unwrap();
    let decoded_jwt_string = decode_jwt(&jwt).map_err(|e| JsValue::from(e)).unwrap();
    assert_eq!(expected_jwt_string, decoded_jwt_string);
}
