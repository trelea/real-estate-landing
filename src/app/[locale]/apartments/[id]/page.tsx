export default async function ApartmentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="h-screen w-full flex items-center justify-center">
      ApartmentPage {id}
    </div>
  );
}
