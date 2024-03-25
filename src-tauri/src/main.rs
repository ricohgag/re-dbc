// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod command;
mod error;
mod dao;

use crate::command::test_connect;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    // tracing();
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, test_connect])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
