import { CustomDashedBorder } from "custom-dashed-border";
import { NextPage } from "next";
import Head from "next/head";
import { CSSProperties, useEffect, useState } from "react";
import { IconChevronRight } from "tabler-icons";
import { Button } from "../components/Button";

const Divider: React.FC<{
  className?: string;
  vertical?: boolean;
  style?: CSSProperties;
}> = ({ className, vertical, style }) => (
  <div className={`relative ${className}`} style={style}>
    <CustomDashedBorder
      bottom={
        vertical
          ? undefined
          : { color: "#e5e7eb", stripe: 16, spacing: 6, height: 2 }
      }
      left={
        vertical
          ? { color: "#e5e7eb", stripe: 16, spacing: 6, width: 2 }
          : undefined
      }
    />
  </div>
);

const useDimensions = <T extends HTMLElement = HTMLDivElement>() => {
  const [boxRef, setBoxRef] = useState<T | null>(null);
  const [dimensions, setDimensions] = useState({
    x: 0,
    y: 0,
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (boxRef) {
        const { x, width, y, height } = boxRef.getBoundingClientRect();
        setDimensions({ x, width, y, height });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions, true);
    return () => {
      window.removeEventListener("resize", updateDimensions, true);
    };
  }, [boxRef]);

  return { boxRef, setBoxRef, dimensions };
};

const LandingPage: NextPage = () => {
  const { setBoxRef: setHeaderRef, dimensions: headerDimensions } =
    useDimensions<HTMLDivElement>();
  const { setBoxRef: setExampleRef, dimensions: exampleDimensions } =
    useDimensions<HTMLElement>();

  return (
    <div>
      <Head>
        <title>Dropbox</title>
      </Head>
      <div className="bg-gray-50 relative overflow-hidden border-b-2">
        <Divider
          className="!absolute inset-y-0 block lg:hidden left-4"
          vertical
        />
        <Divider
          className="!absolute inset-y-0 block lg:hidden right-4"
          vertical
        />
        <Divider
          style={{ left: `calc(${headerDimensions.x}px - 1rem)` }}
          className="!absolute inset-y-0 hidden lg:block"
          vertical
        />
        <Divider
          style={{
            left: `calc(${exampleDimensions.x}px - 1rem)`,
          }}
          className="!absolute inset-y-0 hidden lg:block"
          vertical
        />
        <Divider
          style={{
            left: `calc(${exampleDimensions.x}px + ${exampleDimensions.width}px + 1rem)`,
          }}
          className="!absolute inset-y-0 hidden lg:block"
          vertical
        />
        <header>
          <nav className="flex items-center justify-between max-w-6xl mx-auto px-8 py-6">
            <img src="dropbox.png" alt="Dropbox Logo" className="h-11 w-auto" />
            <ul className="hidden sm:flex items-center space-x-5 text-gray-500">
              <li>
                <a href="https://experience.dropbox.com/contact">Contact</a>
              </li>
              <li>
                <a href="https://dropbox.com/desktop">Download</a>
              </li>
              <li>
                <a href="https://dropbox.com/login">Sign In</a>
              </li>
              <li>
                <a href="https://dropbox.com/register">
                  <Button>
                    Get Started{" "}
                    <span className="text-blue-100">— It's Free</span>
                  </Button>
                </a>
              </li>
            </ul>
          </nav>
          <Divider className="mt-8 lg:mt-16" />
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto px-8 py-20 lg:py-0">
            <div ref={(ref) => setHeaderRef(ref)} className="max-w-2xl w-full">
              <h1 className="font-bold text-3xl sm:text-4xl leading-tight sm:leading-tight">
                Keep life organized and work <br />
                <span className="text-gray-500">moving, all in one place.</span>
              </h1>
              <p className="text-gray-500 max-w-lg text-base sm:text-lg mt-4">
                Easy to use, reliable, private, and secure. It’s no wonder
                Dropbox is the choice for storing and sharing your most
                important files.
              </p>
              <Button
                className="mt-6"
                color="gray"
                rightIcon={<IconChevronRight />}
              >
                Find your plan
              </Button>
            </div>
            <aside className="py-4 mt-8 lg:mt-0 max-w-2xl lg:max-w-[30rem] w-full">
              <article
                className="rounded-xl border-2 bg-white"
                ref={(ref) => setExampleRef(ref)}
              >
                <div className="py-1 px-2 border-b-2 space-x-1.5">
                  <button className="inline-flex items-center justify-center rounded-full bg-red-500 h-3 w-3 text-red-800"></button>
                  <button className="inline-flex items-center justify-center rounded-full bg-amber-500 h-3 w-3 text-amber-800"></button>
                  <button className="inline-flex items-center justify-center rounded-full bg-green-500 h-3 w-3 text-green-800"></button>
                </div>
                <div className="h-[30rem]"></div>
              </article>
            </aside>
          </div>
        </header>
        <Divider />
        <div className="h-24" />
      </div>
    </div>
  );
};

export default LandingPage;
