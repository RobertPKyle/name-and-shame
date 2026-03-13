import companiesData from "@/data/companies.json";
import CompanyList from "@/components/CompanyList";

export default function HomePage() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">
          Companies List
        </h1>
        <p className="text-zinc-400 max-w-2xl">
          These companies have a documented history of ghosting job candidates — disappearing
          mid-process, never following up, or rescinding offers without explanation. Know before you apply.
        </p>
      </div>
      <CompanyList companies={companiesData} />
    </div>
  );
}
