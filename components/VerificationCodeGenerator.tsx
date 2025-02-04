"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { generateVerificationCode, validateCode, rateLimit } from "@/utils/codeGenerators"

export default function VerificationCodeGenerator() {
  const [code, setCode] = useState<string | null>(null)
  const [inputCode, setInputCode] = useState("")
  const { toast } = useToast()

  const handleGenerate = () => {
    if (rateLimit("code-generate", 10, 60000)) {
      const newCode = generateVerificationCode()
      setCode(newCode)
    } else {
      toast({
        title: "تم تجاوز حد معدل الإنشاء",
        description: "يرجى المحاولة مرة أخرى بعد دقيقة",
        variant: "destructive",
      })
    }
  }

  const handleValidate = () => {
    if (validateCode(inputCode)) {
      toast({
        title: "تم التحقق بنجاح",
        description: "الرمز صالح",
      })
    } else {
      toast({
        title: "فشل التحقق",
        description: "الرمز غير صالح أو تم استخدامه بالفعل",
        variant: "destructive",
      })
    }
    setInputCode("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>إنشاء والتحقق من رمز التحقق</CardTitle>
        <CardDescription>قم بإنشاء رمز تحقق من 5 أرقام والتحقق منه</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {code && <div className="text-center text-2xl font-bold">{code}</div>}
        <Input
          type="text"
          placeholder="أدخل رمز التحقق"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          className="text-right"
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleGenerate}>إنشاء رمز</Button>
        <Button onClick={handleValidate}>التحقق من الرمز</Button>
      </CardFooter>
    </Card>
  )
}

