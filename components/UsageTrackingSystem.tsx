"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "يناير", qrCodes: 400, verificationCodes: 240 },
  { name: "فبراير", qrCodes: 300, verificationCodes: 139 },
  { name: "مارس", qrCodes: 200, verificationCodes: 980 },
  { name: "أبريل", qrCodes: 278, verificationCodes: 390 },
  { name: "مايو", qrCodes: 189, verificationCodes: 480 },
  { name: "يونيو", qrCodes: 239, verificationCodes: 380 },
  { name: "يوليو", qrCodes: 349, verificationCodes: 430 },
]

export default function UsageTrackingSystem() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>نظام تتبع الاستخدام</CardTitle>
        <CardDescription>تتبع استخدام رموز QR ورموز التحقق</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="qrCodes" fill="#8884d8" name="رموز QR" />
              <Bar dataKey="verificationCodes" fill="#82ca9d" name="رموز التحقق" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

