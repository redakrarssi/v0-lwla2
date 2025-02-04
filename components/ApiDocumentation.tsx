import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

export function ApiDocumentation() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">API Documentation</h1>
      <SwaggerUI url="/api/docs" />
    </div>
  )
}

