import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppAndScrollButtons } from "@/components/whatsapp-and-scroll-buttons";

import { PostContent } from "./post-content";

interface IPostPageProps {
  params: Promise<{ postId: string }>;
}

export default async function PostPage({ params }: IPostPageProps) {
  const { postId } = await params;
  return (
    <main className="flex min-h-screen flex-col items-center md:px-4">
      <Header />
      <PostContent postId={postId} />
      <Footer />
      <WhatsAppAndScrollButtons />
    </main>
  );
}
