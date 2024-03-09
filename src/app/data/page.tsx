import { Payment, columns } from "./column";
import { DataTable } from "./data-table";
import RootLayout from "../layout";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.

  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "failed",
      email: "prasad@gmail.com",
    },

    {
      id: "728edee2f",
      amount: 100,
      status: "pending",
      email: "utsav@gmail.com",
    },

    {
      id: "728ed772f",
      amount: 100,
      status: "success",
      email: "rushikesh@gmail.com",
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <RootLayout showNavbar={true}>
      <div className="container">
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </RootLayout>
  );
}
