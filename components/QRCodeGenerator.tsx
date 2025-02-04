"use client"

import { useState } from "react"
import { QRCodeSVG } from "qrcode.react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { generateQRCode, rateLimit } from "@/utils/codeGenerators"

export default function QRCodeGenerator() {
  const [qrCode, setQRCode] = useState<string | null>(null)
  const { toast } = useToast()

  const handleGenerate = () => {
    if (rateLimit("qr-generate", 10, 60000)) {
      const code = generateQRCode()
      setQRCode(code)
    } else {
      toast({
        title: "تم تجاوز حد معدل الإنشاء",
        description: "يرجى المحاولة مرة أخرى بعد دقيقة",
        variant: "destructive",
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>إنشاء رمز QR للاستخدام مرة واحدة</CardTitle>
        <CardDescription>قم بإنشاء رمز QR فريد للتحقق</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">{qrCode && <QRCodeSVG value={qrCode} size={200} />}</CardContent>
      <CardFooter>
        <Button onClick={handleGenerate} className="w-full">
          إنشاء رمز QR
        </Button>
      </CardFooter>
    </Card>
  )
}

