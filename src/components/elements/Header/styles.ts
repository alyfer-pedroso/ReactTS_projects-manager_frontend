import tw from "tailwind-styled-components";

export const Header = tw.header`
bg-slate-700
flex
justify-between
items-center
w-full
max-w-screen
p-4
border-b-4
border-b-slate-800
`;

export const SloganContainer = tw.span`
flex
gap-4
items-center
text-white
text-4xl
[&>h1]:hidden
drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.5)]
w-full
`;

export const PagesContainer = tw.nav`w-full`;

export const Pages = tw.ul`
w-full
flex
justify-end
items-center
gap-4
`;

export const Page = tw.li`
text-white
hover:drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.5)]
`;
