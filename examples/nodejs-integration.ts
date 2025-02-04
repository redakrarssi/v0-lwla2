import axios from "axios"
import io from "socket.io-client"

const API_URL = "http://localhost:3000/api/v1"
const API_KEY = "your-api-key-here"

// RESTful API example
async function getRewards() {
  try {
    const response = await axios.get(`${API_URL}/rewards`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
    console.log("Rewards:", response.data)
  } catch (error) {
    console.error("Error fetching rewards:", error)
  }
}

// WebSocket example
function connectWebSocket() {
  const socket = io("http://localhost:3000", {
    query: { apiKey: API_KEY },
  })

  socket.on("connect", () => {
    console.log("Connected to WebSocket")
  })

  socket.on("reward_update", (data) => {
    console.log("Reward update received:", data)
  })

  socket.on("disconnect", () => {
    console.log("Disconnected from WebSocket")
  })

  return socket
}

// Usage
getRewards()
const socket = connectWebSocket()

// Don't forget to disconnect the socket when you're done
// socket.disconnect()

