import { useRouter } from "next/router";

const CaseStudyDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Get the dynamic `id` from the URL

  // You can fetch your data here based on the `id` or display static data
  return (
    <div className="py-6 px-4 lg:py-6 lg:px-20">
      <h1 className="text-3xl lg:text-4xl font-bold">Case Study: {id}</h1>
      <p>This is the detailed page for case study {id}.</p>
    </div>
  );
};

export default CaseStudyDetails;
