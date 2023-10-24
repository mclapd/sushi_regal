import NotionApi from "../api/NotionApi";
import MenuItems from "./MenuItems";

export default async function MenuSection() {
  const memu_list = await NotionApi();
  return (
    <section className="text-white pt-6" id="menu">
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10 py-6">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our Menu
          {/* <span className="pl-4 text-blue-500">{memu_list.results.length}</span> */}
        </h2>

        <div className="grid sm:grid-cols-1 gap-8 p-2 m-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {memu_list.results.map((menu) => (
            <MenuItems key={menu.id} data={menu} />
          ))}
          {/* <NotionApi /> */}
        </div>
      </div>
    </section>
  );
}
