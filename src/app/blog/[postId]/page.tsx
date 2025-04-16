import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppAndScrollButtons } from "@/components/whatsapp-and-scroll-buttons";

import { PostContent } from "./post-content";

interface IPostPageProps {
  params: {
    postId: string;
  };
}

export default function PostPage({ params }: IPostPageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center md:px-4">
      <Header />
      <PostContent postId={params.postId} />
      <Footer />
      <WhatsAppAndScrollButtons />
    </main>
  );
}
