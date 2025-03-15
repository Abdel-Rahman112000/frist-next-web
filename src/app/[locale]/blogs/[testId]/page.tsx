export default async function Page({ params }: ParamsType) {
  const { testId } = await params;

  return <div>My Post:{testId} </div>;
}
