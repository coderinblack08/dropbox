import { NextPage } from "next";
import Head from "next/head";
import { IconBolt, IconChevronRight } from "tabler-icons";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Divider } from "../components/Divider";
import { useDimensions } from "../lib/useDimensions";

const pickRandomEmoji = () => {
  const emojis = ["🤞", "🤝", "🤌", "🤙", "🤚"];
  return emojis[Math.floor(Math.random() * emojis.length)];
};

const LandingPage: NextPage = () => {
  const { setBoxRef: setHeaderRef, dimensions: headerDimensions } =
    useDimensions<HTMLDivElement>();
  const { setBoxRef: setExampleRef, dimensions: exampleDimensions } =
    useDimensions<HTMLElement>();

  return (
    <div>
      <style jsx global>{`
        html {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewport="0 0 72 72" style="fill:black;font-size:36px"><text y="50%">${pickRandomEmoji()}</text></svg>')
              16 0,
            auto;
        }
      `}</style>
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
              <a href="https://dropbox.com/plans">
                <Button
                  className="mt-6"
                  color="gray"
                  rightIcon={<IconChevronRight />}
                >
                  Find your plan
                </Button>
              </a>
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
        <div className="h-32" />
      </div>
      <main className="border-b-2">
        <div className="grid-paper py-16 -mt-0.5">
          <div className="flex flex-col items-center">
            <img src="dropbox-paper.png" className="h-40 w-auto" />
            <h2 className="text-4xl font-black text-blue-500 text-center mt-4">
              Dropbox works the way you do
            </h2>
            <p className="text-blue-500 text-2xl text-center mt-2">
              Get to all your files from <u>anywhere</u>, on any <br /> device,
              and share them with <u>anyone</u>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto px-8 mt-16">
              <Card
                title="Take your docs anywhere"
                description="Save files on your computer, then access them on your phone from the road. Everything you keep in Dropbox is synced automatically to all your devices."
                colorScheme="violet"
              />
              <Card
                title="Send videos quickly"
                description="Send your entire wedding video to family with a simple link. It’s easy to share large files with anyone — even if they don’t have a Dropbox account."
                colorScheme="blue"
              />
              <Card
                title="Keep your photos safe"
                description="Back up vacation photos automatically from your phone or computer. That way, memories are safe as soon as you make them, and you can relive them from any device."
                colorScheme="red"
              />
              <Card
                title="Work on slides together"
                description="Edit a presentation with teammates without emailing files back and forth. When you edit a file in a shared folder, everyone gets the update automatically."
                colorScheme="green"
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="px-8 py-32">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black">
            Get Started{" "}
            <u className="text-blue-500 decoration-wavy underline-offset-4">
              For Free
            </u>
          </h2>
          <p className="text-gray-500 text-lg mt-2">
            2GB of storage + Safe and reliable backups + File sharing
          </p>
          <form className="flex flex-col gap-3 mt-8">
            <input
              className="border-2 px-4 py-2 bg-white rounded-xl"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="border-2 px-4 py-2 bg-white rounded-xl"
              type="text"
              placeholder="Email Address"
            />
            <input
              className="border-2 px-4 py-2 bg-white rounded-xl"
              type="text"
              placeholder="Password"
            />
            <Button
              leftIcon={<IconBolt size={24} />}
              className="!rounded-xl justify-center"
            >
              Sign up for free
            </Button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
