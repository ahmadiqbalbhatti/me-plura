import { SUBACCOUNT_SLUG } from "@/lib/constants";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    subaccountId: string;
    funnelId: string;
    funnelPageId: string;
  };
};

const FunnelPageId = async ({ params }: Props) => {
  const funnelPageDetails = await db.funnelPage.findFirst({
    where: { id: params.funnelPageId },
  });

  if (!funnelPageDetails) {
    return redirect(
      `${SUBACCOUNT_SLUG}/${params.subaccountId}/funnels/${params.funnelId}`
    );
  }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-20 bg-background overflow-hidden">
        
    </div>
  );
};

export default FunnelPageId;