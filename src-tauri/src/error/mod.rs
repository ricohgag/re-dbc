use serde_json::json;
use thiserror::Error;
use sqlx::{Error as SqlxError};

pub type Result<T, E = AppError> = core::result::Result<T, E>;

#[derive(Debug, Error)]
pub enum AppError {

    #[error("SQLx error: {0}")]
    SqlxError(#[from] SqlxError),

    #[error("Invalid credentials")]
    InvalidCredentials,
    
    #[error("User not found")]
    UserNotFound,
}

impl serde::Serialize for AppError {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::ser::Serializer,
    {
        serializer.serialize_str(self.to_string().as_ref())
    }
}