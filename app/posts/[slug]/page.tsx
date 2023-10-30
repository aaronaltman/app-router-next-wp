import { fetchPostData } from "@/utils/fetchPostData";

interface Params {
  slug: string;
}

export default async function PostPage({ params }: { params: Params }){
  const postData = await fetchPostData(params.slug);

  return (
    <div>
      <h1>{postData.title}</h1>
      <p>image maybe here</p>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </div>
  );
}
