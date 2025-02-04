"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type Code = {
  id: number
  value: string
  type: "QR" | "Verification"
  status: "Active" | "Used"
  createdAt: string
}

export default function CodeManagementDashboard() {
  const [codes, setCodes] = useState<Code[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCodes = codes.filter(
    (code) => code.value.includes(searchTerm) || code.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>لوحة إدارة الرموز</CardTitle>
        <CardDescription>إدارة وتتبع الرموز المنشأة</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <Input
            type="text"
            placeholder="البحث عن الرموز..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-1/3 text-right"
          />
          <Button
            onClick={() => {
              /* Implement bulk generation */
            }}
          >
            إنشاء مجموعة
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-right">الرمز</TableHead>
              <TableHead className="text-right">النوع</TableHead>
              <TableHead className="text-right">الحالة</TableHead>
              <TableHead className="text-right">تاريخ الإنشاء</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCodes.map((code) => (
              <TableRow key={code.id}>
                <TableCell className="font-medium">{code.value}</TableCell>
                <TableCell>{code.type === "QR" ? "رمز QR" : "رمز تحقق"}</TableCell>
                <TableCell>{code.status === "Active" ? "نشط" : "مستخدم"}</TableCell>
                <TableCell>{new Date(code.createdAt).toLocaleString("ar-EG")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

