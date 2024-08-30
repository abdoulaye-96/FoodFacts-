import { foods } from "@/data";

export async function GET(
    request: Request,
    { params }: { params: { name: string } }
) {
    const index = foods.findIndex(
        (food) => food.name.toLowerCase().replace(/ /g, "-") === params.name
    );
    if (index !== -1) {
        const food = foods[index]; // Extraire l'élément
        return new Response(JSON.stringify(food), {
            headers: {
                "Content-Type": "application/json",
            },
            status: 200,
        });
    } else {
        return new Response("Food not found.", {
            headers: {
                "Content-Type": "application/json",
            },
            status: 404,
        });
    }
}
