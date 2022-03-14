use wasm_bindgen::prelude::*;
use base64;
use urlencoding;
use std::str;
use serde_json;
use std::string::FromUtf8Error;
use uuid::Uuid;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[derive(Debug, thiserror::Error)]
enum Error {
    #[error(transparent)]
    DecodeError(#[from] base64::DecodeError),

    #[error(transparent)]
    JsonError(#[from] serde_json::Error),

    #[error(transparent)]
    FromUtf8Error(#[from] FromUtf8Error),

    #[error("Invalid token")]
    InvalidToken
}

#[wasm_bindgen]
pub fn encode_base64(s: &str) -> String {
    base64::encode(s)
}

#[wasm_bindgen]
pub fn decode_base64(s: &str) -> Result<String, JsError> {
    let decoded = base64::decode(s)?;
    let converted = String::from_utf8(decoded)?;
    Ok(converted.to_string())
}

#[wasm_bindgen]
pub fn encode_url(s: &str) -> String {
    urlencoding::encode(s).into_owned()
}

#[wasm_bindgen]
pub fn decode_url(s: &str) -> Result<String, JsError> {
    let decoded_str = urlencoding::decode(s)?;
    Ok(decoded_str.into_owned())
}

fn parse_jwt(s: &str) -> Result<[serde_json::Value; 2], Error> {
    let mut i = s.splitn(3, '.');
    let (header, payload) = match (i.next(), i.next(), i.next(), i.next()){
        (Some(header), Some(payload), Some(_signature), None) => (header, payload),
        _ => return Err(Error::InvalidToken)
    };

    let decoded_header = base64::decode_config(header, base64::URL_SAFE_NO_PAD)?;
    let decoded_payload = base64::decode_config(payload, base64::URL_SAFE_NO_PAD)?;

    let converted_header = String::from_utf8(decoded_header)?;
    let converted_payload = String::from_utf8(decoded_payload)?;

    let parsed_jwt_header = serde_json::from_str::<serde_json::Value>(&converted_header)?;
    let parsed_jwt_payload = serde_json::from_str::<serde_json::Value>(&converted_payload)?;

    Ok([parsed_jwt_header, parsed_jwt_payload])
}

#[wasm_bindgen]
pub fn decode_jwt(s: &str) -> Result<String, JsError> {
    let jwt = parse_jwt(s)?;
    Ok(serde_json::to_string_pretty(&jwt).unwrap())
}

#[wasm_bindgen]
pub fn format_json(s: &str) -> Result<String, JsError> {
    let parsed_json = serde_json::from_str::<serde_json::Value>(s)?;
    Ok(serde_json::to_string_pretty(&parsed_json).unwrap())
}

#[wasm_bindgen]
pub fn gen_uuid() -> String {
    let uuid = Uuid::new_v4();
    uuid.to_hyphenated().to_string()
}
