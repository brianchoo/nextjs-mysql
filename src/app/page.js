import PaginationControls from "@/components/PaginationControls";
import { redirect } from "next/navigation";

async function getItemsData() {
  const response = await fetch("http://localhost:3000/api/items");
  if (!response.ok) {
    redirect("/500");
  }

  return response.json();
}

export default async function Home({ searchParams }) {
  const items = await getItemsData();

  const page = searchParams?.page || 1;
  const per_page = searchParams?.per_page || 5;

  // determine the start and end of page and pagination
  const start = (page - 1) * per_page;
  const end = start + per_page;
  const hasNextPage = end < items.length;
  const hasPrevPage = start > 0;

  // show only the numbers of entries set
  const entries = items.slice(start, end);

  return (
    <div className="md:px-16 md:mt-16 px-4 mt-4">
      <table className="w-full shadow-md rounded-lg overflow-hidden px-6">
        <thead>
          <tr className="text-left bg-gray-500 text-white">
            <th className="px-4 py-2">No.</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {entries.length &&
            entries.map((entry) => (
              <tr key={entry.id}>
                <td className="px-4 py-2">{entry.id}</td>
                <td className="px-4 py-2">{entry.name}</td>
                <td className="px-4 py-2">{entry.description}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <PaginationControls
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
          listLength={items.length}
        />
      </div>
    </div>
  );
}
