import Card from "@/components/card";
import Link from "next/link";
export default function Notifications() {
  return (
    <Card>
      Notifications Metrics
      <div>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  );
}
