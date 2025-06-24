import TransferAssistance from "@/components/transfer-assistance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "University Transfer Assistance | PickMyUni - Seamless Credit Transfer Services",
  description:
    "Get expert assistance with university transfers in Australia. We help you transfer credits, navigate admission requirements, and ensure a smooth transition to your new university.",
  keywords: [
    "university transfer Australia",
    "credit transfer assistance",
    "university transfer services",
    "course transfer help",
    "Australian university transfer",
    "academic credit transfer",
    "transfer student support",
  ],
  openGraph: {
    title: "University Transfer Assistance | PickMyUni",
    description:
      "Expert assistance for seamless university transfers in Australia. Get help with credit transfers and admission requirements.",
    type: "website",
  },
};

export default function Page() {
  return <TransferAssistance />;
}
