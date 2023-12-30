import {
  CustomPaths,
  FilterBar,
  FilterProducts,
  ProductsRender,
} from "@/components";

export default async function Page() {

  return (
    <section>
      <div className="min-h-screen container mx-auto">
        <CustomPaths />
        <h3 className="pb-2 font-semibold text-2xl">Iqlim texnikasi</h3>
        <div className="flex gap-5 mb-5">
          <aside className="bg-white rounded-xl p-6 pt-2 w-1/4">
            <FilterBar />
          </aside>
          <div>
            <FilterProducts />
            <ProductsRender />
          </div>
        </div>
      </div>
    </section>
  );
}
