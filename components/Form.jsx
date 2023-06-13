import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section
      className="w-full max-w-full flex-start flex-col mt-32"
    >
      <h1 className="head_text text-left">
        <span className="emerald_gradient" >{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md" >
        {type} and share amazing prompts with the world and let your imagination run wild with any AI-powered platform
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Your AI Prompt</span>
          <textarea  
            value={post.prompt}
            onChange={(e) => setPost({...post, prompt: e.target.value})}
            placeholder="Write your Prompt here"
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">It's Description</span>
          <textarea  
            value={post.description}
            onChange={(e) => setPost({...post, description: e.target.value})}
            placeholder="More details to better understand the context in which this prompt can be used"
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Platform {` `} <span className="font-normal">(e.g. ChatGPT, Dalle, MidJourney)</span></span>
          <input  
            value={post.platform}
            onChange={(e) => setPost({...post, platform: e.target.value})}
            placeholder="On which platform can it work best"
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Tag {` `} <span className="font-normal">(e.g. coding, jobhunting, marketing, art)</span></span>
          <input  
            value={post.tag}
            onChange={(e) => setPost({...post, tag: e.target.value})}
            placeholder="tag (without the #)"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4 ">
          <Link href="/profile" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-emerald-500 rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form