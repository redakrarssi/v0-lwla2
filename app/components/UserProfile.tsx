"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import type React from "react" // Added import for React

interface UserData {
  name: string
  email: string
  userType: "business" | "customer"
}

export default function UserProfile() {
  const t = useTranslations("Profile")
  const [userData, setUserData] = useState<UserData | null>(null)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    // TODO: Fetch user data from API
    // For now, we'll use mock data
    setUserData({
      name: "John Doe",
      email: "john@example.com",
      userType: "business",
    })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement update logic and API call
    console.log("Profile updated:", userData)
    setIsEditing(false)
  }

  if (!userData) {
    return <div>{t("loading")}</div>
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">{t("profileTitle")}</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              {t("name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {t("saveChanges")}
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-4">
          <div>
            <span className="font-medium">{t("name")}:</span> {userData.name}
          </div>
          <div>
            <span className="font-medium">{t("email")}:</span> {userData.email}
          </div>
          <div>
            <span className="font-medium">{t("userType")}:</span> {t(userData.userType)}
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {t("editProfile")}
          </button>
        </div>
      )}
    </div>
  )
}

