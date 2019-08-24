export type ErrorMessage = Record<string, string>
export type ErrorBagage = Record<string, ErrorMessage>

export interface ValidationError {
    name: string
    errors: ErrorBagage
}
