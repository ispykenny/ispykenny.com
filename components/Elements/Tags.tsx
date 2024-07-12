export const Tag = ({ text }: { text: string }) => {
  return (
    <p className="hasShadow text-base md:text-lg bg-primary-color inline-block p-3 px-6 rounded-full font-semibold">
      {text}
    </p>
  );
};
