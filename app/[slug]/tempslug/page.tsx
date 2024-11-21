export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug
    const path=`app/testProblems/challenges/${slug}`
    return <div>My Post: {slug}</div>
  }