use anyhow::Result;
use crate::error::AppError;
use crate::dao::db;

#[tauri::command]
pub async fn test_connect(db_url: &str) -> Result<String, AppError> {
    println!("连接数据库: {}", db_url);
    // 连接调用连接数据库，如果失败则返回错误信息
    let pool = db::db_connect(db_url.to_string()).await;
    match pool {
        Ok(_) => {
            println!("连接成功");
            Ok("连接成功".to_string())
        },
        Err(e) => {
            println!("连接失败: {}", e);
            Ok(format!("连接失败: {}", e))
        },
    }
}