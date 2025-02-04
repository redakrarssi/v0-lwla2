import QRCodeGenerator from "@/components/QRCodeGenerator"
import VerificationCodeGenerator from "@/components/VerificationCodeGenerator"
import CodeManagementDashboard from "@/components/CodeManagementDashboard"
import UsageTrackingSystem from "@/components/UsageTrackingSystem"
import QRCodeScanner from "@/components/QRCodeScanner"
import BulkGenerationTool from "@/components/BulkGenerationTool"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-right">نظام إنشاء والتحقق من رموز QR والرموز</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <QRCodeGenerator />
        <VerificationCodeGenerator />
        <CodeManagementDashboard />
        <UsageTrackingSystem />
        <QRCodeScanner />
        <BulkGenerationTool />
      </div>
    </main>
  )
}

