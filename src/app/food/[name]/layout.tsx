import {Metadata} from 'next'
export function generateMetadata({ params }: {
  params:{
  name:string;
};
}): Metadata {
  const title = `Discover ${params.name} - NutriSpark`
  const description = `learn all about the nutrutional value of ${params.name}
  on nutruTech. explore now`
  return {
    title,
    description,
  };
};

export default function FoodLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
    </>
  );
}
