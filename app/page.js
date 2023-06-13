import Feed from "@/components/Feed" 

export default function Home() {
  return (
    <section className="w-full flex-center flex-col mt-48" >
      <h1 className="head_text text-center" >
        Discover & Share
        <br className="max-md:hidden" />
        <span className="emerald_gradient" > AI-Powered Prompts</span>
      </h1>
      <Feed />
    </section>
  )
}