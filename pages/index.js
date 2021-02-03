import ReactPlaceholder from "react-placeholder";
import Layout from "../components/layout";
import Image from 'next/image';
import UnorderedList from '../components/UnorderedList';
import Link from 'next/Link';

export default function Home() {
  return (
    <Layout size="full">
      <div className="container flex flex-wrap flex-col md:flex-row flex-1">
        <div className="flex flex-col md:flex-row md:text-left">
          <div class="flex flex-col">
            <h1>Hi, I'm Ryan 👋🏼</h1>
            <div className="mt-6 text-lg md:text-xl lg:text-2xl">
              <h3>I'm currently:</h3>
              <ul className="list-disc list-inside">
                <li>👨🏻‍💻 working as a backend-leaning-full-stack engineer&mdash; mostly Java, Spring, MySQL, Kafka, Kubernetes, with a sprinkle of Ember.js</li>
                {/* TODO link to lab */}
                <li>🔬 building out my homelab</li>
              </ul>
            </div>

            <div className="mt-6 text-lg md:text-xl lg:text-2xl">
              <h3>Outside of engineering:</h3>
              <ul className="list-disc list-inside">
                <li>✈️ I'm in the process of getting my private pilot license</li>
                <li>🥁 I play drums and arrange/perform percussion covers</li>
                <li>🥘 I enjoy cooking. I've been called the pasta prince and the spaghetti king 👑 </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 w-1/2 mx-auto">
            <Image src="/img/ryan-sitting.jpg" alt="Ryan Rishi" className="object-contain rounded-lg h-full w-full" width="3648" height="5472" />
          </div>
        </div>
      </div>

      {/* <div className="flex bg-white" style={{ height: '900px' }}>
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">Ryan Rishi</h2>
                <ReactPlaceholder type="text" rows={4} ready={false} />
            <div className="flex justify-center lg:justify-start mt-6">
              <a className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="#">Get Started</a>
              <a className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="#">Learn More</a>
            </div>
          </div>
        </div>
        <div>
          <Image src="/img/ryan-sitting.jpg" alt="Ryan Rishi" layout="fill" />
        </div>
      </div> */}
    </Layout>
  );
}
