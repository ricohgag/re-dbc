use anyhow::Result;
use sqlx::{Pool, MySql, MySqlPool};
use sqlx::mysql::MySqlConnectOptions;

use crate::error::AppError;


pub async fn db_connect(db_url: String) -> Result<Pool<MySql>, AppError> {
    let opts: MySqlConnectOptions = db_url.parse().unwrap();
    let pool = MySqlPool::connect_with(opts)
        .await?;
    Ok(pool)
}
