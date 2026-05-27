import Image from "next/image";
import Link from "next/link";

export default function DroneReactorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-[#1abc9c] font-semibold uppercase tracking-wide text-sm mb-2">Capstone Project</p>
      <h1 className="text-4xl font-bold text-[#2c3e50] mb-6">
        Drones to Ensure Nuclear Plant Safety in an Emergency
      </h1>

      <div className="flex justify-center mb-10">
        <Image
          src="/images/drone.png"
          alt="Drone project"
          width={400}
          height={300}
          className="object-contain rounded"
        />
      </div>

      <div className="text-gray-700">
        <p className="text-xl text-gray-600 mb-8">
          For my 4th year Capstone design project, our team designed drones for Nuclear Power Plant safety
          using a wide range of hardware and software tools.
        </p>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-10 mb-4">Team</h2>
        <ul className="space-y-2 mb-8">
          {["Cameron Witkowski", "Ben Agro", "Jerry Chen", "Connor Lee"].map((name) => (
            <li key={name} className="flex items-center gap-2">
              <span className="text-[#1abc9c]">▸</span>
              <span>{name}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#2c3e50] mt-10 mb-4">Project Description</h2>
        <p className="mb-4">
          Nuclear power plants require rigorous safety inspection, particularly in emergency scenarios
          where human access may be dangerous or impossible. Our team designed a fleet of autonomous
          drones capable of navigating the interior of a nuclear facility, collecting sensor data, and
          reporting conditions in real time.
        </p>
        <p className="mb-4">
          The project integrated hardware design (drone chassis, sensor arrays), software development
          (autonomous navigation, computer vision), and systems integration under the strict engineering
          constraints of a nuclear environment.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/projects" className="text-[#1abc9c] hover:text-[#16a085] font-semibold transition-colors">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
