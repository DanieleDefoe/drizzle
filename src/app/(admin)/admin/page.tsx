import { notFound } from "next/navigation";

import { UserForm } from "@/app/(admin)/admin/_components/user-form";
import { getCurrentUser } from "@/app/services";

export default async function Page() {
	const currentUserData = await getCurrentUser();

	if (!currentUserData) notFound();

	return (
		<main className="space-y-3">
			<h1 className="text-2xl">Profile</h1>
			<UserForm defaultValues={currentUserData} />
		</main>
	);
}