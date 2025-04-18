import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppAndScrollButtons } from "@/components/whatsapp-and-scroll-buttons";
import { IPostPageProps } from "@/core/interfaces/post-page-props";

import { PostContent } from "./post-content";

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
