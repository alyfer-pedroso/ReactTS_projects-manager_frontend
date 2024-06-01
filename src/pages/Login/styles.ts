import tw from "tailwind-styled-components";

export const Main = tw.main`
bg-slate-200
w-full
h-screen
pt-[25%]
landscape:pt-[10%]
flex
flex-col
items-center
gap-16
`;

export const Title = tw.h1`
text-3xl
font-bold
flex
items-center
gap-4
[&>strong]:text-5xl
drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]
`;

export const Form = tw.form`
bg-white
shadow-lg
w-[80%]
landscape:max-w-[350px]
border-t-4 border-t-slate-700
`;

export const Subtitle = tw.h2`
text-center
mt-4
text-2xl
font-bold
`;

export const Container = tw.div`
p-6 flex
flex-col
gap-4
`;
