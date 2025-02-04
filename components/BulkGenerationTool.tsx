"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { generateQRCode, generateVerificationCode, rateLimit } from "@/utils/codeGenerators"

export default function BulkGenerationTool() {
  const [quantity, setQuantity] = useState(10)
  const [generatedCodes, setGeneratedCodes] = useState<string[]>([])
  const { toast } = useToast()

  const handleBulkGenerate = () => {
    if (rateLimit("bulk-generate", 100, 3600000)) {
      // 100 requests per hour
      const codes: string[] = []
      for (let i = 0; i < quantity; i++) {
        if (Math.random() > 0.5) {
          codes.push(generateQRCode())
        } else {
          codes.push(generateVerificationCode())
        }
      }
      setGeneratedCodes(codes)
      toast({
        title: "تم إنشاء الرموز بنجاح",
        description: `تم إنشاء ${quantity} رمز`,
      })
    } else {
      toast({
        title: "تم تجاوز حد معدل الإنشاء",
        description: "يرجى المحاولة مرة أخرى بعد ساعة",
        variant: "destructive",
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>أداة الإنشاء بالجملة</CardTitle>
        <CardDescription>إنشاء كميات كبيرة من الرموز</CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min={1}
          max={1000}
          className="mb-4 text-right"
        />
        <div className="h-40 overflow-y-auto">
          {generatedCodes.map((code, index) => (
            <div key={index} className="text-right">
              {code}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleBulkGenerate} className="w-full">
          إنشاء الرموز
        </Button>
      </CardFooter>
    </Card>
  )
}

