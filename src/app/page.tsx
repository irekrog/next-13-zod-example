import { Inter } from "next/font/google";

import { z } from "zod";

const inter = Inter({ subsets: ["latin"] });

type User = {
  id: number;
};

const userSchema = z.object({
  id: z.number(),
});

async function getData(): Promise<User> {
  const res = await fetch("http://localhost:3000/api/user", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return res.json();
}

export default async function Home() {
  const data = await getData();
  const schema = userSchema.safeParse(data);
  if (!schema.success) {
    return <div>ERROR</div>;
  }

  return (
    <main className={inter.className}>
      <p title={String(data.id)}>{String(data.id).substring(0, 5) + "..."}</p>
    </main>
  );
}
