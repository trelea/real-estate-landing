export default async function HousePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="h-screen w-full flex items-center justify-center">
      HousePage {id}
    </div>
  );
}
