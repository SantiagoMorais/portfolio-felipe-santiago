import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppAndScrollButtons } from "@/components/whatsapp-and-scroll-buttons";

import { PostContent } from "./post-content";

export default async function PostPage({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center md:px-4">
      <Header />
      <PostContent postId={params.postId} />
      <Footer />
      <WhatsAppAndScrollButtons />
    </main>
  );
}
