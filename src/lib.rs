use wasm_bindgen::prelude::*;
use base64;
use std::str;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn encode_base64(s: &str) -> String {
    base64::encode(s)
}

#[wasm_bindgen]
pub fn decode_base64(s: &str) -> String {
    let chars = match base64::decode(s) {
        Ok(chars) => chars,
        _ => vec!()
    };
    match str::from_utf8(&chars) {
        Ok(s) => s.to_string(),
        _ => String::from("")
    }
}
